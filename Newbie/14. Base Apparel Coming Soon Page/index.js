const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const email = document.querySelector(".email").value;
	const errorHidden = document
		.querySelector(".error-icon")
		.classList.contains("hidden");
	if (!validateEmail(email)) {
		if (errorHidden) {
			toggleFormError();
			toggleErrorMessage();
		}
	} else {
		if (!errorHidden) {
			toggleFormError();
			toggleErrorMessage();
		}
	}
});

const validateEmail = (email) => {
	const regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	return regex.test(email);
};

const toggleFormError = () => {
	document.querySelector(".form-control").classList.toggle("error");
	document.querySelector(".error-icon").classList.toggle("hidden");
};
const toggleErrorMessage = () => {
	document.querySelector(".error-text").classList.toggle("hidden");
};
