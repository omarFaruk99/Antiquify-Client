import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedArtifactCards from "./FeaturedArtifactCards";
import CountUp from "react-countup";
import { HashLoader } from "react-spinners";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch artifacts data
  useEffect(() => {
    axios
      .get("http://localhost:3000/artifacts/top")
      .then((res) => {
        console.log("get artifacts data ======>", res.data);
        setArtifacts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured artifacts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader size={80} color="#ffae42" />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto my-5">
      {/* Animated Heading with Count */}
      <div className="text-center mb-6 flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Featured Artifacts </h1>
        <span className="ml-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
          <CountUp end={artifacts.length} duration={1.5} />
        </span>
      </div>

      {/* Grid of Artifacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <FeaturedArtifactCards key={artifact._id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
