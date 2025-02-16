import React from "react";
import TextFormatter from "../components/TextFormatter";
import { teaching } from "../database/teaching.json";

const TeachingAndServices = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
        Teaching & Services
      </h1>
      <div className="mt-4 space-y-6">
        {teaching.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-medium text-gray-700">{item.institution}</p>
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

export default TeachingAndServices;
