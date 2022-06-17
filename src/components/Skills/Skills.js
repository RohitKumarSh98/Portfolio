import React from "react";
import skillImg from "../../Assets/skill2.jpg";
import classes from "./Skills.module.css";

const Skills = () => {
  const skillData = [
    { name: "Frontend", data: "ReactJS, HTML, CSS, JavaScript" },
    { name: "Competitive Programming", data: "C++" },
    { name: "Tools", data: "Visual Studio Code, Git" },
    { name: "Others", data: "Adobe Photoshop" },
  ];

  return (
    <section className={classes.section}>
      <h1>Skills and Tools</h1>
      <div className={classes.container}>
        <div className={classes.skills}>
          {skillData.map((skill) => {
            return (
              <p className={classes.skill}>
                <span>{skill.name}</span> : {skill.data}
              </p>
            );
          })}
        </div>
        <div className={classes.image}>
          <img src={skillImg} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
