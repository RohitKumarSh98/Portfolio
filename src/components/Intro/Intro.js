import React from "react";
import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <h1>Hello! 👋 World</h1>
        <h2>
          I am <span className={classes.highlight}> ROHIT KUMAR</span>
        </h2>
        <p>
          I am quick learner, have good grasping power and keen interest in
          programming. I am having some good mathematical and problem solving
          skills. I am always curious about learning new technologies and
          implementing my skills in filed of Web and Programming.
        </p>
      </div>
      <div className={classes.image}>
        <img src="./coder.png" alt="coderImage" />
      </div>
    </section>
  );
};

export default Intro;
