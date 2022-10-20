import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen dark:text-gray-400 px-4 sm:px-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto md:px-8 flex flex-col justify-center h-full">
        <p className="text-xl text-pink-600 dark:text-pink-500">
          Hi, My name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-blue-900 dark:text-blue-200 ">
          Aadarsh Kawatra
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          A Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px]">
          I'm a full stack developer speciliasing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full stack web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="group dark:text-white border-2 border-gray-800 dark:border-white px-6 py-3 flex items-center gap-2 hover:bg-[#ffccac] hover:border-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
