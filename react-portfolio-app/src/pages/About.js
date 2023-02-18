import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="section section--biography">
        <h2>Biography</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, elit nec laoreet commodo, ex enim dictum velit, in sollicitudin risus ipsum in turpis.</p>
      </section>
      <section className="section section--education">
        <h2>Education</h2>
        <ul>
          <li>Bachelor's Degree in Computer Science, University of XYZ</li>
          <li>Master's Degree in Software Engineering, University of ABC</li>
        </ul>
      </section>
      <section className="section section--work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li>Software Engineer, Company A (2018-2021)</li>
          <li>Senior Software Engineer, Company B (2021-present)</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
