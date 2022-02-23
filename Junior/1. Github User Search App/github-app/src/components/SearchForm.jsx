import React from "react";
import "../styles/searchform.scss";

const SearchForm = ({ isLight, searchString, setSearchString }) => {
	return (
		<article className={`formContainer ${isLight ? "lm" : "dm"}`}>
			<form className={`formContainer__form ${isLight ? "lm" : "dm"}`}>
				<div
					className={`formContainer__form--form-control ${
						isLight ? "lm" : "dm"
					}`}
				>
					<img
						src="./assets/icon-search.svg"
						alt="magnifying glass"
						className={`formContainer__form--form-img ${isLight ? "lm" : "dm"}`}
					/>
					<input
						type="text"
						className={`formContainer__form--input ${isLight ? "lm" : "dm"}`}
						placeholder="Search GitHub Username..."
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
					/>
				</div>
				<button className={`formContainer__form--btn ${isLight ? "lm" : "dm"}`}>
					search
				</button>
			</form>
		</article>
	);
};

export default SearchForm;
