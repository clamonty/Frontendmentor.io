import "../styles/userinfo.scss";
import dateFormat from "dateformat";
import React from "react";
import { FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

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
				<p className={`userInfo__aboutText ${isLight ? "lm" : "dm"}`}>{bio}</p>
			</header>
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
					<FaMapMarkerAlt
						class={`userInfo__footer--icon ${isLight ? "lm" : "dm"} ${
							user.location ? "" : "unavailable"
						}`}
					/>

					<p
						className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"} ${
							user.location ? "" : "unavailable"
						}`}
					>
						{user.location || "Not Available"}
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<FaLink
						class={`userInfo__footer--icon ${isLight ? "lm" : "dm"} ${
							user.blog ? "" : "unavailable"
						}`}
					/>

					<p
						className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"} ${
							user.blog ? "" : "unavailable"
						}`}
					>
						<a
							className={`userInfo__footer--itemLink ${isLight ? "lm" : "dm"}`}
							href={user.blog}
						>
							{user.blog || "Not Available"}
						</a>
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<FaTwitter
						class={`userInfo__footer--icon ${isLight ? "lm" : "dm"} ${
							user.twitter_username ? "" : "unavailable"
						}`}
					/>
					<p
						className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"} ${
							user.twitter_username ? "" : "unavailable"
						}`}
					>
						{user.twitter_username || "Not Available"}
					</p>
				</div>
				<div className={`userInfo__footer--item ${isLight ? "lm" : "dm"}`}>
					<FaBuilding
						class={`userInfo__footer--icon ${isLight ? "lm" : "dm"} ${
							user.company ? "" : "unavailable"
						}`}
					/>
					<p
						className={`userInfo__footer--itemText ${isLight ? "lm" : "dm"} ${
							user.company ? "" : "unavailable"
						}`}
					>
						{user.company || "Not Available"}
					</p>
				</div>
			</footer>
		</article>
	);
};

export default UserInfo;
