import axios from "axios";
import { useEffect, useState } from "react";
import AllArtifactCards from "./AllArtifactCards";
import { Bars } from "react-loader-spinner";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [filteredArtifacts, setfilteredArtifacts] = useState([]); // Stores the filtered results
  const [searchQuery, setSearchQuery] = useState(""); // Stores the search input
  const [loading, setLoading] = useState(true);

  console.log("artifacts=============>", artifacts);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/artifacts");
        setArtifacts(response.data); //save full artifacts data
        setfilteredArtifacts(response.data); //initialize with all artifacts
      } catch (error) {
        console.log("Error fetching artifacts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtifacts();
  }, []);

  // Handle search input and filter jobs
  const handleSearch = (e) => {
    const query = e.target.value.trim(); //remove white space
    setSearchQuery(query); // Update search input state

    const results = artifacts.filter((artifact) =>
      artifact.artifactName?.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredArtifacts(results);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Bars
          height="80"
          width="80"
          color="#ffae42"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-5">
      {/* search functionality: by arfifacts==> name */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="serch by artifact name"
          className="input input-bordered mb-5"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {filteredArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtifacts.map((artifact) => (
            <AllArtifactCards
              key={artifact._id}
              artifact={artifact}
            ></AllArtifactCards>
          ))}
        </div>
      ) : (
        <p className="font-bold text-2xl">No Artifacts Found</p>
      )}
    </div>
  );
};

export default AllArtifacts;
