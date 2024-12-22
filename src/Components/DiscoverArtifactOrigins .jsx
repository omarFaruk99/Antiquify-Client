// home page extra section: 1
import { FaHistory, FaGlobe } from "react-icons/fa";

const DiscoverArtifactOrigins = () => {
  return (
    <div className="py-8 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">
          Discover Artifact Origins
        </h2>
        <p className="text-base-content mb-6">
          Uncover the rich history and fascinating stories behind these timeless
          treasures.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400 shadow-lg rounded-lg">
            <FaHistory className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Historical Significance</h3>
            <p className="mt-2">
              Learn about the events, cultures, and civilizations that gave
              birth to these artifacts.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400 shadow-lg rounded-lg">
            <FaGlobe className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Global Connection</h3>
            <p className="mt-2">
              Discover how artifacts link us to diverse cultures across the
              globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverArtifactOrigins;
