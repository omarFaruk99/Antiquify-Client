// home page extra section: 2
import { FaShieldAlt, FaLeaf, FaGlobe } from "react-icons/fa";

const ArtifactPreservationInsights = () => {
  return (
    <div className="py-8 bg-base-200 mt-7">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">
          Artifact Preservation Insights
        </h2>
        <p className="text-base-content mb-6">
          Understand the techniques and care involved in preserving these
          timeless pieces.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400 shadow-lg rounded-lg">
            <FaShieldAlt className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Protection Methods</h3>
            <p className="mt-2">
              Learn about advanced techniques to shield artifacts from decay and
              damage.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400 shadow-lg rounded-lg">
            <FaLeaf className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Eco-Friendly Practices</h3>
            <p className="mt-2">
              Explore sustainable approaches in artifact preservation.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400 shadow-lg rounded-lg">
            <FaGlobe className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Cultural Impact</h3>
            <p className="mt-2">
              Understand the global significance of conserving these treasures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactPreservationInsights;
