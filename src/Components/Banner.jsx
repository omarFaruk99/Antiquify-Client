import bannerImg1 from "../assets/banner1.webp";
import bannerImg2 from "../assets/banner2.webp";
import bannerImg3 from "../assets/banner3.webp";

// banner section
const Banner = () => {
  return (
    <div className="mt-4">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={bannerImg1}
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-sm"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={bannerImg2}
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-sm"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={bannerImg3}
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-sm"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs sm:btn-sm md:btn-md">
          1
        </a>
        <a href="#item2" className="btn btn-xs sm:btn-sm md:btn-md">
          2
        </a>
        <a href="#item3" className="btn btn-xs sm:btn-sm md:btn-md">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
