import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/sonu pic1.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Sonu Prajapati</h4>
          <h6>MERN Stack & Full Stack Web Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Sonu Prajapati started his journey as a passionate web developer
            with a vision to build modern and user-friendly web applications.
            Through continuous learning and hands-on projects, he has developed
            strong skills in frontend and full-stack development.
          </p>
          <p>
            He specializes in technologies like React.js, Node.js, Express, and
            MongoDB, and enjoys creating responsive and interactive user
            experiences.
          </p>
          <p>
            Apart from coding, he loves exploring new technologies, improving
            problem-solving skills, and building creative projects.
          </p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
