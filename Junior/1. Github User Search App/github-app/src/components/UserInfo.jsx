import "../styles/userinfo.scss";
import dateFormat from "dateformat";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocation,
	faLink,
	faBuilding,
	faTwitter,
} from "@fortawesome/free-solid-svg-icons";

const UserInfo = ({ isLight, user }) => {
	const dateObj = new Date(user.created_at);
	const dateString = dateFormat(dateObj, "d mmm yyyy");

	const bio =
		user.bio ||
		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";

	return (
		<article className={`userInfo ${isLight ? "lm" : "dm"}`}>
			<header className={`userInfo__header ${isLight ? "lm" : "dm"}`}>
				<img
					src={user.avatar_url}
					alt="user avatar"
					className={`userInfo__header--avatar ${isLight ? "lm" : "dm"}`}
				/>
				<div className={`userInfo__header--info`}>
					<h2 className={`userInfo__header--name ${isLight ? "lm" : "dm"}`}>
						{user.name}
					</h2>
					<span
						className={`userInfo__header--twitter ${isLight ? "lm" : "dm"}`}
					>
						@{user.login}
					</span>
					<p className={`userInfo__header--joinDate ${isLight ? "lm" : "dm"}`}>
						Joined {dateString}
					</p>
				</div>
			</header>
			<p className={`userInfo__aboutText ${isLight ? "lm" : "dm"}`}>{bio}</p>
			<div className={`userInfo__body ${isLight ? "lm" : "dm"}`}>
				<div className={`userInfo__body--item ${isLight ? "lm" : "dm"}`}>
					<p className={`userInfo__body--itemTitle ${isLight ? "lm" : "dm"}`}>
						repos
					</p>
					<p className={`userInfo__body--itemValue ${isLight ? "lm" : "dm"}`}>
						{user.public_repos}
					</p>
				</div>
				<div className={`userInfo__body--item ${isLight ? "lm" : "dm"}`}>
					<p className={`userInfo__body--itemTitle ${isLight ? "lm" : "dm"}`}>
						followers
					</p>
					<p className={`userInfo__body--itemValue ${isLight ? "lm" : "dm"}`}>
						{user.followers}
					</p>
				</div>
				<div className={`userInfo__body--item ${isLight ? "lm" : "dm"}`}>
					<p className={`userInfo__body--itemTitle ${isLight ? "lm" : "dm"}`}>
						following
					</p>
					<p className={`userInfo__body--itemValue ${isLight ? "lm" : "dm"}`}>
						{user.following}
					</p>
				</div>
			</div>
			<footer className={`userInfo__footer ${isLight ? "lm" : "dm"}`}>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<FontAwesomeIcon icon="fa-solid fa-location-dot" />
					<p className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"}`}>
						{user.location}
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<img
						className={`userInfo__footer--itemImg ${isLight ? "lm" : "dm"}`}
						src="./assets/icon-website.svg"
						alt="website link"
					/>
					<p className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"}`}>
						{user.blog}
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<img
						className={`userInfo__footer--itemImg ${isLight ? "lm" : "dm"}`}
						src="./assets/icon-twitter.svg"
						alt="twitter logo"
					/>
					<p className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"}`}>
						{user.twitter_username || "Not Available"}
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<img
						className={`userInfo__footer--itemImg ${isLight ? "lm" : "dm"}`}
						src="./assets/icon-company.svg"
						alt="company"
					/>
					<p className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"}`}>
						{user.company}
					</p>
				</div>
			</footer>
		</article>
	);
};

export default UserInfo;
