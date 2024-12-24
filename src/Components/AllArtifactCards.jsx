import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const AllArtifactCards = ({ artifact }) => {
  const {
    _id,
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
  } = artifact;

  return (
    <div className="bg-white border dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-3 pb-5">
      {/* Artifact Image */}
      <img
        src={artifactImage}
        alt={artifactName}
        className="w-full h-32 object-cover mb-5 rounded-md"
      />

      <div>
        {/* Artifact Name */}
        <h2 className="text-xl font-bold mb-2 truncate">{artifactName}</h2>

        {/* Artifact Type */}
        <p className="text-sm mb-2 truncate">
          <span className="font-semibold">Type:</span> {artifactType}
        </p>

        {/* Historical Context */}
        <p className="text-sm mb-2 truncate">
          <span className="font-semibold">Historical Context:</span>{" "}
          {historicalContext}
        </p>

        {/* Created At */}
        <p className="text-sm mb-4 truncate">
          <span className="font-semibold">Created At:</span> {createdAt}
        </p>
      </div>

      {/* View Detail Button */}
      <Link
        to={`/artifacts/details/${_id}`} // Navigate to the Artifact Details page with the artifact ID
        className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
      >
        <FaEye />
        View Detail
      </Link>
    </div>
  );
};

export default AllArtifactCards;
