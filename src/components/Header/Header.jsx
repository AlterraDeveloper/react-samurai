import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return <header className={s.header}>
		<div className={s.loginBlock}>
			<NavLink to={"/login"}>{props.auth.userId ? `Hello, ${props.auth.login}` : "Login"}</NavLink>
		</div>
	</header>
}

export default Header;