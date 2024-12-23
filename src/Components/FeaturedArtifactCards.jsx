import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const FeaturedArtifactCards = ({ artifact }) => {
  const {
    _id,
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    likes, // Updated to 'likes' as per your data
  } = artifact;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[22rem] max-w-sm mx-auto flex flex-col justify-between">
      {/* Artifact Image */}
      <img
        src={artifactImage}
        alt={artifactName}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />

      <div>
        {/* Artifact Name */}
        <h2 className="text-xl font-bold mb-2 truncate">{artifactName}</h2>

        {/* Short Description (truncate historicalContext as a short description) */}
        <p className="text-sm mb-2 truncate">
          <span className="font-semibold">Description:</span>{" "}
          {historicalContext.length > 100
            ? historicalContext.substring(0, 100) + "..."
            : historicalContext}
        </p>

        {/* Artifact Type */}
        <p className="text-sm mb-2">
          <span className="font-semibold">Type:</span> {artifactType}
        </p>

        {/* Likes */}
        <p className="text-sm mb-2">
          <span className="font-semibold">Likes:</span> {likes}
        </p>

        {/* Created At */}
        <p className="text-sm mb-2">
          <span className="font-semibold">Created At:</span> {createdAt}
        </p>

        {/* Discovery Information */}
        <p className="text-sm mb-2">
          <span className="font-semibold">Discovered At:</span> {discoveredAt}
        </p>
        <p className="text-sm mb-2">
          <span className="font-semibold">Discovered By:</span> {discoveredBy}
        </p>
        <p className="text-sm mb-4">
          <span className="font-semibold">Present Location:</span>{" "}
          {presentLocation}
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

export default FeaturedArtifactCards;
