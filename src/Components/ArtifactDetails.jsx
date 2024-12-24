import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaUserAlt,
  FaClock,
} from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const ArtifactDetails = () => {
  // Fetching artifact details passed through the route loader
  const artifactDetails = useLoaderData();

  // Using context to access authenticated user
  const { user } = useContext(AuthContext);

  // State to track the number of likes
  const [likes, setLikes] = useState(artifactDetails.likes || 0);

  // State to track if the user has liked the artifact
  const [isLiked, setIsLiked] = useState(false);

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Fetch initial like status when the component mounts
  useEffect(() => {
    if (!user) {
      setLoading(false); // Stop loading if user is not authenticated
      return;
    }

    const fetchLikeStatus = async () => {
      try {
        // Making a GET request to fetch like status
        const response = await axios.get(
          `http://localhost:3000/artifacts/details/${artifactDetails._id}`,
          { params: { email: user.email } } // Passing user's email as a parameter
        );

        // Setting the like count and like status
        setLikes(response.data.likes);
        setIsLiked(response.data.isLikedByUser);
      } catch (error) {
        console.error("Error fetching like status:", error);
      } finally {
        setLoading(false); // Stop loading after the fetch is complete
      }
    };

    fetchLikeStatus();
  }, [artifactDetails._id, user]);

  // Handle toggling like
  const handleToggleLike = async () => {
    if (!user) {
      alert("You must be logged in to like an artifact!");
      return;
    }

    try {
      const action = isLiked ? "dislike" : "like"; // Determine action based on like status
      const response = await axios.put(
        `http://localhost:3000/artifacts/${artifactDetails._id}/like`,
        { action, email: user.email } // Including user's email in the request
      );

      // Update like count and toggle like status
      setLikes(response.data.likes);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  // Show loading message while data is being fetched
  if (loading) {
    return (
      <p className="text-center text-xl mt-6">Loading artifact details...</p>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6">
      <div className="max-w-xl mx-auto shadow-lg rounded-lg bg-base-100 p-4">
        {/* Display artifact image */}
        <img
          src={artifactDetails.artifactImage}
          alt={artifactDetails.artifactName}
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* Display artifact name with a user icon */}
        <h1 className="text-2xl font-bold mt-3 flex items-center gap-2">
          <FaUserAlt className="text-primary" /> {artifactDetails.artifactName}
        </h1>
        {/* Display artifact creation time */}
        <p className="mt-2 flex items-center gap-2 text-gray-600">
          <FaClock className="text-secondary" /> Created At:{" "}
          {artifactDetails.createdAt}
        </p>
        {/* Display artifact location */}
        <p className="mt-2 flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-accent" /> Location:{" "}
          {artifactDetails.presentLocation}
        </p>
        {/* Display artifact type */}
        <p className="mt-2 text-gray-600">
          Type: {artifactDetails.artifactType}
        </p>
        {/* Display the user who added the artifact */}
        <p className="mt-2 text-gray-600">
          Added by: {artifactDetails.addedByName}
        </p>
        {/* Display the person who discovered the artifact */}
        <p className="mt-2 text-gray-600">
          Discovered By: {artifactDetails.discoveredBy}
        </p>
        {/* Display historical context */}
        <p className="mt-2 text-gray-600">
          {artifactDetails.historicalContext}
        </p>

        {/* Like Icon */}
        <div className="flex items-center mt-4">
          <div
            onClick={handleToggleLike}
            className="cursor-pointer text-2xl"
            title={isLiked ? "Unlike" : "Like"}
          >
            {isLiked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400" />
            )}
          </div>
          <span className="ml-4 text-lg font-semibold">{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
