import axios from "axios";
import { useEffect, useState } from "react";
import AllArtifactCards from "./AllArtifactCards";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/artifacts").then((res) => {
      console.log("get artifacts data ======>", res.data);
      setArtifacts(res.data);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-5">
      {/* className="flex flex-wrap gap-6 justify-start items-start" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <AllArtifactCards
            key={artifact._id}
            artifact={artifact}
          ></AllArtifactCards>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
