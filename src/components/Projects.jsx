import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen px-4 py-16 sm:px-8 pt-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full md:px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="my-6">// Check out some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="w-full flex flex-col justify-between shadow-lg dark:shadow-gray-600 hover:shadow-2xl">
            <div
              className="h-[200px] w-full content-div"
              style={{ backgroundImage: `url(${Project1})` }}
            ></div>
            <div className="p-4">
              <div className="font-bold m-2">React Budget App</div>
              <div className="flex flex-wrap">
                <span className="bg-gray-300 dark:bg-gray-700 rounded p-2 m-2">
                  React
                </span>
                <span className="bg-gray-300 dark:bg-gray-700 rounded p-2 m-2">
                  Context API
                </span>
              </div>
            </div>
            <div className="h-[50px] w-full flex">
              <a
                href="https://github.com/the-kawatra/Budget-App"
                target="_blank"
                className="w-1/2 border-2 hover:bg-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600 flex justify-center"
              >
                <button>Code</button>
              </a>
              <a
                href="https://budget-app-virid.vercel.app"
                target="_blank"
                className="w-1/2 border-2 hover:bg-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600 flex justify-center"
              >
                <button>Demo</button>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between shadow-lg dark:shadow-gray-600 hover:shadow-2xl">
            <div
              className="h-[200px] w-full content-div"
              style={{ backgroundImage: `url(${Project2})` }}
            ></div>
            <div className="p-4">
              <div className="font-bold m-2">User Management System</div>
              <div className="flex flex-wrap">
                <span className="bg-gray-300 dark:bg-gray-700 rounded p-2 m-2">
                  React
                </span>
                <span className="bg-gray-300 dark:bg-gray-700 rounded p-2 m-2">
                  Express
                </span>
                <span className="bg-gray-300 dark:bg-gray-700 rounded p-2 m-2">
                  Mongo DB
                </span>
              </div>
            </div>
            <div className="h-[50px] w-full flex">
              <a
                href="https://github.com/the-kawatra/User-Management-App"
                target="_blank"
                className="w-1/2 border-2 hover:bg-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600 flex justify-center"
              >
                <button>Code</button>
              </a>
              <a
                href="https://kay-ums.herokuapp.com"
                target="_blank"
                className="w-1/2 border-2 hover:bg-[#ffccac] dark:hover:bg-pink-600 dark:hover:border-pink-600 flex justify-center"
              >
                <button>Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
