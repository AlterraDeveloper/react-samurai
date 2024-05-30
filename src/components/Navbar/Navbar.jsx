import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={s.nav}>
          <div className={s.item}>
              <NavLink
                  to="/profile"
                  className={({isActive}) => (isActive ? `${s.activeLink} ${s.link}` : s.link)}
              >
                  Profile
              </NavLink>
          </div>
          <div className={s.item}>
              <NavLink
                  to="/messages"
                  className={({isActive}) => (isActive ? `${s.activeLink} ${s.link}` : s.link)}
              >
                  Messages
              </NavLink>
          </div>
          <div className={s.item}>
              <NavLink
                  to="/users"
                  className={({isActive}) => (isActive ? `${s.activeLink} ${s.link}` : s.link)}
              >
                  Users
              </NavLink>
          </div>
          <div className={s.item}>
              <NavLink
                  to="/pokemons"
                  className={({isActive}) => (isActive ? `${s.activeLink} ${s.link}` : s.link)}
              >
                  Pokemons
              </NavLink>
          </div>
          {/* <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div> */}
      </nav>
  );
};

export default Navbar;
