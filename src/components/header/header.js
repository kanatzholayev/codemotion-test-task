import logo from "../../img/logo.png";
import "./header.scss";
import React from "react";

const Header = () => {
	return (
		<header className="c-header">
			<a href="/" className="c-logo">
				<img src={logo} alt="logo" />
			</a>
			<input type="checkbox" id="c-burger-shower" className="c-burger-shower" />
			<label for="c-burger-shower" className="c-hamburger">
				<i className="fa fa-bars"></i>
				<i className="fa-solid fa-x"></i>
			</label>
			<ul className="c-nav c-nav--header">
				<li className="c-nav_item">
					<a href="/">Home</a>
				</li>
				<li className="c-nav_item">
					<a href="/">About</a>
				</li>
				<li className="c-nav_item">
					<a href="/">Services</a>
				</li>
				<li className="c-nav_item">
					<a href="/">Investments</a>
				</li>
				<li className="c-nav_item">
					<a href="/">Blog</a>
				</li>
				<li className="c-nav_item">
					<a href="/">Contact</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
