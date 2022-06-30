import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };

  const onClickNav = () => {
    setToggle(false);
  };

  const navClass = `${classes.nav} ${toggle && classes.change}`;

  return (
    <header className={classes.header}>
      <nav>
        <div
          id={classes.menu}
          onClick={onClickHandler}
          className={toggle && classes.icon}
        >
          <div id={classes.bar1} className={classes.bar}></div>
          <div id={classes.bar2} className={classes.bar}></div>
          <div id={classes.bar3} className={classes.bar}></div>
        </div>
        <h1>ROHIT KUMAR</h1>
        <ul className={navClass} id={classes.nav1}>
          <li onClick={onClickNav}>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li onClick={onClickNav}>
            <NavLink to="/skills" activeClassName={classes.active}>
              Skills
            </NavLink>
          </li>
          <li onClick={onClickNav}>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
          <li onClick={onClickNav}>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
