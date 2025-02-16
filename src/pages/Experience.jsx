import React from "react";
import TextFormatter from "../components/TextFormatter";
import { experiences } from "../database/experience.json";

const Experience = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
        Experience
      </h1>

      <div className="mt-4 space-y-6">
        {experiences.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-500 pl-4">
            <h2 className="text-large font-bold">{item.title}</h2>
            <p className="text-gray-700 font-bold">
              <TextFormatter text={item.company} />
            </p>
            <p className="text-medium text-gray-700">{item.duration}</p>
            <div className="mt-2 text-gray-700">
              <TextFormatter text={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
