import React from "react";
import "../styles/searchform.scss";

const SearchForm = ({
	isLight,
	searchString,
	setSearchString,
	setIsError,
	isError,
	setUser,
}) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (searchString.length === 0) return;
		const searchURL = `https://api.github.com/users/${searchString}`;
		const response = await fetch(searchURL);
		const data = await response.json();

		if ("message" in data) {
			setIsError(true);
		} else {
			setUser(data);
			setSearchString("");
			setIsError(false);
		}
	};
	return (
		<article className={`formContainer ${isLight ? "lm" : "dm"}`}>
			<form
				onSubmit={handleSubmit}
				className={`formContainer__form ${isLight ? "lm" : "dm"}`}
			>
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
				{isError && (
					<p className="formContainer__form--error">no results found</p>
				)}
				<button className={`formContainer__form--btn ${isLight ? "lm" : "dm"}`}>
					search
				</button>
			</form>
		</article>
	);
};

export default SearchForm;
