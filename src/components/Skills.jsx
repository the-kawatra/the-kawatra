const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen px-4 py-16 md:py-0 sm:px-8 pt-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center md:px-8">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-pink-600">
            Skills
          </p>
          <p className="my-6">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div
            style={{
              borderImage: "linear-gradient(to right, orange, purple) 1",
            }}
            className="mt-2 mb-8 flex flex-col border-4 shadow-lg dark:shadow-gray-600 p-4 md:hover:scale-110 duration-300"
          >
            <div>
              <p className="text-xl font-bold p-4">Frontend</p>
            </div>
            <div className="flex flex-col p-4">
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>React</span>
              <span>Redux</span>
              <span>Tailwind</span>
              <span>Bootstrap</span>
            </div>
          </div>
          <div
            style={{
              borderImage: "linear-gradient(to right, orange, purple) 1",
            }}
            className="mt-2 mb-8 flex flex-col border-4 shadow-lg dark:shadow-gray-600 p-4 md:hover:scale-110 duration-300"
          >
            <div>
              <p className="text-xl font-bold p-4">Backend</p>
            </div>
            <div className="flex flex-col p-4">
              <span>Node JS</span>
              <span>Express JS</span>
              <span>Mongo DB</span>
              <span>Json Web Token (JWT)</span>
            </div>
          </div>
          <div
            style={{
              borderImage: "linear-gradient(to right, orange, purple) 1",
            }}
            className="mt-2 mb-8 flex flex-col border-4 shadow-lg dark:shadow-gray-600 p-4 md:hover:scale-110 duration-300"
          >
            <div>
              <p className="text-xl font-bold p-4">Languages & Tools</p>
            </div>
            <div className="flex flex-col p-4">
              <span>Python</span>
              <span>C++</span>
              <span>Postman</span>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
