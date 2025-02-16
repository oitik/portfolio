import React from "react";
import TextFormatter from "../components/TextFormatter";
import { projects } from "../database/projects.json";

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
        Projects
      </h1>

      <div className="mt-4 space-y-6">
        {projects.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-500 pl-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-gray-700">
              <TextFormatter text={item.description} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





// const Projects = () => {
//     return (<div>Projects</div>)
// }

// export default Projects


