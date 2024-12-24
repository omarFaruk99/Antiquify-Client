import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myArtifacts?email=${user?.email}`)
      .then((res) => {
        setArtifacts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader size={80} color="#ffae42"  />
      </div>
    );
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    console.log("Delete artifact with ID:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // proceed with deletion
        axios
          .delete(`http://localhost:3000/artifacts/${id}`)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Artifact has been deleted.",
                icon: "success",
              });
              // Update state to remove the deleted artifact
              setArtifacts(artifacts.filter((artifact) => artifact._id !== id));
              navigate("/allArtifacts");
            }
          })
          .catch((error) => {
            console.error("Error deleting artifact:", error);
          });
      }
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          My Artifacts{" "}
          <span className="text-blue-500">({artifacts.length})</span>{" "}
          {/* Total count displayed */}
        </h1>
      </div>

      {artifacts.length === 0 ? (
        <p className="text-gray-500">
          No artifacts found. Add some to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artifacts.map((artifact) => (
            <div key={artifact._id} className="border p-4 rounded shadow">
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold">{artifact.artifactName}</h2>
              <p className="text-sm text-gray-600">
                Type: {artifact.artifactType}
              </p>
              <p className="text-sm text-gray-600">
                Added By: {artifact.addedByName}
              </p>
              <p className="text-sm text-gray-600">
                Created At: {artifact.createdAt}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleUpdate(artifact._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(artifact._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
