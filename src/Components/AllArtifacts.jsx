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
      <h1>Artifacts length {artifacts.length}</h1>
      <div className="flex flex-wrap gap-6 justify-start items-start">
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
