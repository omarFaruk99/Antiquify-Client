import ArtifactPreservationInsights from "./ArtifactPreservationInsights";
import Banner from "./Banner";
import DiscoverArtifactOrigins from "./DiscoverArtifactOrigins ";
import FeaturedArtifacts from "./FeaturedArtifacts";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <FeaturedArtifacts></FeaturedArtifacts>
      <DiscoverArtifactOrigins></DiscoverArtifactOrigins>
      <ArtifactPreservationInsights></ArtifactPreservationInsights>
    </div>
  );
};

export default Home;
