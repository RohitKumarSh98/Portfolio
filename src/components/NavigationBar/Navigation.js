import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <h1>ROHIT KUMAR</h1>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName={classes.active}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
