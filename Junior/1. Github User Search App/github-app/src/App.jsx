import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import UserInfo from "./components/UserInfo";
// const dummyUser = {
// 	login: "octocat",
// 	id: 583231,
// 	node_id: "MDQ6VXNlcjU4MzIzMQ==",
// 	avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
// 	gravatar_id: "",
// 	url: "https://api.github.com/users/octocat",
// 	html_url: "https://github.com/octocat",
// 	followers_url: "https://api.github.com/users/octocat/followers",
// 	following_url: "https://api.github.com/users/octocat/following{/other_user}",
// 	gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
// 	starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
// 	subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
// 	organizations_url: "https://api.github.com/users/octocat/orgs",
// 	repos_url: "https://api.github.com/users/octocat/repos",
// 	events_url: "https://api.github.com/users/octocat/events{/privacy}",
// 	received_events_url: "https://api.github.com/users/octocat/received_events",
// 	type: "User",
// 	site_admin: false,
// 	name: "The Octocat",
// 	company: "@github",
// 	blog: "https://github.blog",
// 	location: "San Francisco",
// 	email: null,
// 	hireable: null,
// 	bio: null,
// 	twitter_username: null,
// 	public_repos: 8,
// 	public_gists: 8,
// 	followers: 4990,
// 	following: 9,
// 	created_at: "2011-01-25T18:44:36Z",
// 	updated_at: "2022-02-22T15:07:13Z",
// };

function App() {
	const [isLight, setIsLight] = useState(true);
	const [user, setUser] = useState(null);
	const [searchString, setSearchString] = useState("");
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		setIsLoading(true);
		try {
			const response = await fetch("https://api.github.com/users/octocat");
			const data = await response.json();
			setUser(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleUserSearch = async () => {
		let searchURL = `https://api.github.com/users/${searchString}`;
		const response = await fetch(searchURL);
		const userData = await response.json();
		if (!userData) {
			setIsError(true);
		} else {
			setUser(userData);
			setSearchString("");
		}
	};

	if (isLoading) return <h2>Loading...</h2>;
	else {
		return (
			<main className={isLight ? "lm" : "dm"}>
				<Header isLight={isLight} setIsLight={setIsLight} />
				<SearchForm
					setSearchString={setSearchString}
					searchString={searchString}
					isLight={isLight}
					isError={isError}
					setIsError={setIsError}
					setUser={setUser}
				/>
				<UserInfo user={user} isLight={isLight} />
			</main>
		);
	}
}

export default App;
