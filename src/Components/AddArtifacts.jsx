// Import necessary libraries and dependencies
import { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddArtifacts = () => {
  const { user } = useContext(AuthContext); // Fetch logged-in user info

  const [formData, setFormData] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "",
    historicalContext: "",
    createdAt: "e.g. 100 BC",
    discoveredAt: "e.g. 1799",
    discoveredBy: "",
    presentLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const artifactData = {
      ...formData,
      addedByName: user?.displayName,
      addedByEmail: user?.email,
      likes: 0,
    };

    // console.log("artifactData======>", artifactData);
    // console.log("user======>", user);

    // using axios
    // axios.post("https://antiquify-server.vercel.app/artifacts", artifactData).then((res) => {
    //   console.log("clinet res=======>", res);
    //   console.log("clinet res.data=======>", res.data);
    // });

    try {
      const response = await axios.post(
        "https://antiquify-server.vercel.app/artifacts",
        artifactData
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Artifact added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          artifactName: "",
          artifactImage: "",
          artifactType: "",
          historicalContext: "",
          createdAt: "",
          discoveredAt: "",
          discoveredBy: "",
          presentLocation: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add the artifact. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error adding artifact:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-300 shadow-md rounded-md my-5">
      <Helmet>
        <title>Add Artifact</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Add Artifact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Artifact Name</label>
          <input
            type="text"
            name="artifactName"
            value={formData.artifactName}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Artifact Image (URL)
          </label>
          <input
            type="url"
            name="artifactImage"
            value={formData.artifactImage}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Artifact Type</label>
          <select
            name="artifactType"
            value={formData.artifactType}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select a type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Created At</label>
          <input
            type="text"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Discovered At</label>
          <input
            type="text"
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            value={formData.presentLocation}
            onChange={handleChange}
            required
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Your Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-900"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;
