import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'The Movie DB',
      description: 'Full Stack Web App',
      link: "https://sheltered-plateau-74324.herokuapp.com/",
      repo: "https://github.com/jalontuttle/Group-Project-2"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
