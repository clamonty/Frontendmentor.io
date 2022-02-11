const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const firstName = getValue("firstName");
	const lastName = getValue("lastName");
	const password = getValue("password");
	const email = getValue("email");

	if (!firstName) {
		document.querySelector(".firstname-error-img").classList.toggle("hidden");
		document.querySelector(".firstname-error").classList.toggle("hidden");
		document.querySelector(".firstname").classList.toggle("error");
		document.getElementsByName("firstName")[0].placeholder = "";
	}
	if (!lastName) {
		document.querySelector(".lastname-error-img").classList.toggle("hidden");
		document.querySelector(".lastname-error").classList.toggle("hidden");
		document.querySelector(".lastname").classList.toggle("error");
		document.getElementsByName("lastName")[0].placeholder = "";
	}
	if (!email) {
		document.querySelector(".email-error-img").classList.toggle("hidden");
		document.querySelector(".email-error").classList.toggle("hidden");
		document.querySelector(".email").classList.toggle("error");
		document.getElementsByName("email")[0].placeholder = "";
	}
	if (!password) {
		document.querySelector(".password-error-img").classList.toggle("hidden");
		document.querySelector(".password-error").classList.toggle("hidden");
		document.querySelector(".password").classList.toggle("error");
		document.getElementsByName("password")[0].placeholder = "";
	}

	// Email validation
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (email && regex.test(email) === false) {
		document.querySelector(".email-error-img").classList.toggle("hidden");
		document.querySelector(".email-error").classList.toggle("hidden");
		document.querySelector("#email").classList.toggle("error-text");
		document.querySelector(".email-error").textContent =
			"Looks like this is not an email";
		document.querySelector(".email").classList.toggle("error");
		document.getElementsByName("email")[0].placeholder = "";
	}
});

const getValue = (id) => {
	const value = document.getElementById(id).value;
	return value;
};
