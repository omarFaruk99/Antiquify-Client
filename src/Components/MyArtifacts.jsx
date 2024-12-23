import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myArtifacts?email=${user?.email}`)
      .then((res) => {
        setArtifacts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
      });
  }, [user?.email]);

  const handleUpdate = (id) => {
    console.log("Update artifact with ID:", id);
    // Implement update functionality here
  };

  const handleDelete = (id) => {
    console.log("Delete artifact with ID:", id);
    // Implement delete functionality here
    axios
      .delete(`http://localhost:3000/artifacts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setArtifacts(artifacts.filter((artifact) => artifact._id !== id));
        }
      })
      .catch((error) => {
        console.error("Error deleting artifact:", error);
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
