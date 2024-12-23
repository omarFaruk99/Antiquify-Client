import axios from "axios";
import { useEffect, useState } from "react";

import FeaturedArtifactCards from "./FeaturedArtifactCards";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/artifacts/top").then((res) => {
      console.log("get artifacts data ======>", res.data);
      setArtifacts(res.data);
    });
  }, []);

  return (
    <div className="w-full mx-auto my-5">
      <h1 className="font-semibold">
        FeaturedArtifact length======: {artifacts.length}
      </h1>
      <div className="flex flex-wrap gap-6 justify-start items-start">
        {artifacts.map((artifact) => (
          <FeaturedArtifactCards
            key={artifact._id}
            artifact={artifact}
          ></FeaturedArtifactCards>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
