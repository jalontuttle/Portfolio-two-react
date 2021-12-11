import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="./src/assets/resume/resume.pdf">resume here!</a>
        </p>
        <h3>Proficiencies</h3>
        <ul className="skills">
          <li>JavaScript/React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>git/GitHub</li>
          <li>SQL</li>
          <li>Jest</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Familiarities</h3>
        <ul className="skills">
          <li>Node/Express</li>
          <li>jQuery</li>
          <li>Heroku</li>
          <li>Handlebars</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
        <h3>Interests</h3>
        <ul className="skills">
          <li>Java/C#</li>
          <li>Integration/End-To-End Testing</li>
          <li>Full Stack Web Architecture</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
