import React from "react";
import "../styles/header.scss";
import { FaSun, FaMoon } from "react-icons/fa";
const Header = ({ isLight, setIsLight }) => {
	return (
		<header className="header">
			<h1 className={`header__title ${isLight ? "lm" : "dm"}`} lm>
				devfinder
			</h1>
			<div className={`header__toggle ${isLight ? "lm" : "dm"}`}>
				<span className={`header__toggle--span ${isLight ? "lm" : "dm"}`}>
					{isLight ? "dark" : "light"}
				</span>
				<button
					onClick={() => setIsLight(!isLight)}
					className="header__toggle--btn"
				>
					{isLight ? (
						<FaMoon className="header__toggle--icon lm" />
					) : (
						<FaSun className="header__toggle--icon dm" />
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
