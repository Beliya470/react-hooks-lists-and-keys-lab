import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techTags = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techTags}</div>
    </div>
  );
}

export default ProjectItem;
