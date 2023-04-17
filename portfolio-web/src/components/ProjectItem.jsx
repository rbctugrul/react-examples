import React from "react";

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div className="picture">
        <img src={image} />
      </div>
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
