import React from "react";

const CV = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">CV</h1>
      <div className="mt-4">
        <embed
          src ="portfolio/public/oitikcv.pdf" 
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
    </div>
  );
};

export default CV;
