import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { HashLoader } from "react-spinners";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch liked artifacts when the user's email is available
  useEffect(() => {
    // if (!user?.email) return; //change this #################################################

    axios
      .get("http://localhost:3000/artifacts/liked", {
        params: { email: user.email },
      })
      .then((res) => {
        setLikedArtifacts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching liked artifacts:", error);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* <div className="text-xl font-semibold">Loading...</div> */}
        <HashLoader size={80} color="#ffae42" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <Helmet>
        <title>Liked Artifacts</title>
      </Helmet>
      {/* Heading with Dynamic Count */}
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          My Liked Artifacts
        </h1>
        <span className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
          <CountUp end={likedArtifacts.length} duration={1.5} ></CountUp>
        </span>
      </div>

      {likedArtifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500 dark:text-gray-400">
          No liked artifacts found. Explore and like some artifacts to see them
          here!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white border p-3 dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Artifact Image */}
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-40 rounded-md object-cover"
              />

              {/* Artifact Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {artifact.artifactName}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Type:</strong> {artifact.artifactType}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Discovered By:</strong> {artifact.discoveredBy}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> {artifact.presentLocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
