import React from "react";
import "../styles/header.scss";
const Header = ({ isLight, setIsLight }) => {
	return (
		<header className="header lm">
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
					<img
						src={isLight ? "./assets/icon-moon.svg" : "./assets/icon-sun.svg"}
						alt="light mode toggle"
						className={`header__toggle--img ${isLight ? "lm" : "dm"}`}
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
