import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateArtifact = () => {
  const { id } = useParams(); // Get the artifact ID from the URL
  const navigate = useNavigate(); // For navigation after updating
  const [artifact, setArtifact] = useState(null); // Artifact data state

  useEffect(() => {
    // Fetch artifact details using the ID
    axios
      .get(`http://localhost:3000/artifacts/details/${id}`)
      .then((res) => {
        setArtifact(res.data);
      })
      .catch((error) => console.error("Error fetching artifact:", error));
  }, [id]);

  console.log("update fetch data========>", artifact);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Update artifact in the database
    axios
      .put(`http://localhost:3000/artifacts/update/${id}`, artifact)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Artifact updated successfully!",
            text: "You clicked the button!",
            icon: "success",
          });
          navigate("/myArtifacts"); // Redirect to My Artifacts page
        }
      })
      .catch((error) => console.error("Error updating artifact:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact({ ...artifact, [name]: value });
  };

  if (!artifact) return <p>Loading artifact data...</p>; // Show loading message

  return (
    <div className="p-4 w-11/12 mx-auto">
      <Helmet>
        <title>Update Artifact</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Update Artifact</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-semibold">Artifact Name</label>
          <input
            type="text"
            name="artifactName"
            value={artifact.artifactName || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Artifact Image (URL)</label>
          <input
            type="url"
            name="artifactImage"
            value={artifact.artifactImage || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Artifact Type</label>
          <select
            name="artifactType"
            value={artifact.artifactType || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Historical Context</label>
          <textarea
            name="historicalContext"
            value={artifact.historicalContext || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold">Created At</label>
          <input
            type="text"
            name="createdAt"
            value={artifact.createdAt || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Discovered At</label>
          <input
            type="text"
            name="discoveredAt"
            value={artifact.discoveredAt || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            value={artifact.discoveredBy || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            value={artifact.presentLocation || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
