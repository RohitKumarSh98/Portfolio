import React from "react";
import classes from "./Project.module.css";

const Projects = () => {
  const Data = [
    {
      name: "Snack Bar",
      title: "It is a online Food ordering demo app.",
      Link: "https://rohitkumarsh98.github.io/food_order_app/",
      Detail:
        "Made this project while learning React. Used basic React and Hooks in this project.",
    },
    {
      name: "Mapty",
      title: "Map your Workout.",
      Link: "https://rohitkumarsh98.github.io/Map_your_workout/",
      Detail:
        "Made this project while learning JavaScript with the help of my instructor. I have used HTML5, CSS3, JavaScript and Leaflet library for the map.",
    },
    {
      name: "Bankist Intro",
      title: "Welcome Page of a Bank's website.",
      Link: "https://rohitkumarsh98.github.io/Bankist_Intro_page/",
      Detail:
        "Used HTML, CSS and some Advanced DOM manipulation techniques of JavaScript. It contains a slider of images and a tabbed component.",
    },
    {
      name: "Game",
      title: "Two player adding numbers game.",
      Link: "https://rohitkumarsh98.github.io/game/",
      Detail:
        "This was my first project while learning JavaScript. It is a small 2 player game. Throw the dice and add the number, one who scores 100 first wins. If you get 1 on dice your unsaved score will be lost and player switches",
    },
  ];

  return (
    <section className={classes.section}>
      <h1>Projects and Experiments</h1>
      {Data.map((item) => {
        return (
          <div className={classes.project}>
            <p>
              <b>{item.name}</b> : {item.title}
              <a href={item.Link} target="_blank" rel="noreferrer">
                {"  "}LIVE PREVIEW
              </a>
            </p>
            <details>
              <summary>Detail</summary>
              <p className={classes.detail}>{item.Detail}</p>
            </details>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
