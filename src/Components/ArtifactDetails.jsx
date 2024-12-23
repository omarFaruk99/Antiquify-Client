import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

const ArtifactDetails = () => {
  const artifactDetails = useLoaderData();
  const [likes, setLikes] = useState(artifactDetails.likes);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/artifacts/${artifactDetails._id}/like`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update likes");
      }

      const updatedArtifact = await response.json();
      setLikes(updatedArtifact.likes);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6">
      <div className="max-w-xl mx-auto shadow-lg rounded-lg bg-base-100 p-4">
        <img
          src={artifactDetails.artifactImage}
          alt={artifactDetails.artifactName}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-3 flex items-center gap-2">
          <FaUserAlt className="text-primary" /> {artifactDetails.artifactName}
        </h1>
        <p className="mt-2 flex items-center gap-2 text-gray-600">
          <FaClock className="text-secondary" /> Created At:{" "}
          {artifactDetails.createdAt}
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-accent" /> Location:{" "}
          {artifactDetails.presentLocation}
        </p>
        <p className="mt-2 text-gray-600">
          Type: {artifactDetails.artifactType}
        </p>
        <p className="mt-2 text-gray-600">
          Added by: {artifactDetails.addedByName}
        </p>
        <p className="mt-2 text-gray-600">
          Discovered By: {artifactDetails.discoveredBy}
        </p>
        <p className="mt-2 text-gray-600">
          {artifactDetails.historicalContext}
        </p>
        <div className="flex items-center mt-4">
          <button
            onClick={handleLike}
            className="btn btn-primary flex items-center gap-2"
          >
            <FaRegHeart className="text-lg" /> Like
          </button>
          <span className="ml-4 text-lg font-semibold">{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
