import { VFC } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Globalnavi.scss";

export const Globalnavi: VFC = () => {
  return (
    <div className="globalNaviWrapper">
      <ul className="globalNavi">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/post" activeClassName="active">
            Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
