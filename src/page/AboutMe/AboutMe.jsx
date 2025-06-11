import React from "react";

function AboutMe() {
  return (
    <div className="" style={{ height: "100vh" }}>
      <div className="d-flex  justify-content-center pt-5">
        <div className="border-bottom border-5 border-primary">
          <p className="fw-bold mb-0" style={{ fontSize: "40px" }}>
            About Me
          </p>
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
      <div className="d-md-flex align-items-center justify-content-evenly">
        <div className="container">
          hi I'm a pssionate software developer with expertise in building
          robust web application and intutive interfaces. With over 2 years of
          experience in the Industry, I've worked on a diverse range of project
          from e-commerce platform to visualization tools.
        </div>
        <div className="container">
          <p className="fw-bold" style={{ fontSize: "60px" }}>
            Web Developer
          </p>
          <p>
            I'm a pssionate software developer with expertise in building robust
            web application and intutive interfaces. With over 2 years of
            experience in the Industry, I've worked on a diverse range of
            project from e-commerce platform to visualization tools.
          </p>
          <div style={{ height: "10px" }}></div>
          <p>
            My approach combine technical excellence with creative
            problem-solving. I believe in writing clean, maintainable code that
            deliver exceptional user experiences. When I'm not coding, you can
            find me exploring new technologies, contributing to open-souce
            projects, or mentoring junior developers.
          </p>
          <div className="row">
            <div className="col">
              <p className="fw-bold mb-0">Name:</p>
              <p>Songheak Chanratanak</p>
              <p className="fw-bold mb-0">Location:</p>
              <p>Phnom Penh, Cambodia</p>
            </div>
            <div className="col">
              <p className="fw-bold mb-0">Email:</p>
              <p>songheakchanratanak@gamil.com</p>
              <p className="fw-bold mb-0">Availability:</p>
              <p>Open opportunity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
