const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const emailValue = document.querySelector(".email").value;
	const errorShowing = document
		.querySelector(".email")
		.classList.contains("error");
	const errorTextHidden = document
		.querySelector(".error-text")
		.classList.contains("hidden");
	if (!emailValue) {
		if (!errorShowing) {
			toggleError();
		}
		if (errorTextHidden) {
			toggleErrorText();
			setErrorText("Whoops! It looks like you forgot to provide your email!");
		} else {
			setErrorText("Whoops! It looks like you forgot to provide your email!");
		}
		return;
	}

	if (!validateEmail(emailValue)) {
		if (!errorShowing) toggleError();
		if (errorTextHidden) {
			toggleErrorText();
			setErrorText("Please provide a valid email address");
		} else {
			setErrorText("Please provide a valid email address");
		}
		return;
	}

	// If successful
	if (errorShowing) toggleError();
	if (!errorTextHidden) toggleErrorText();
});

const toggleError = () => {
	const email = document.querySelector(".email");
	email.classList.toggle("error");
};

const toggleErrorText = (txt) => {
	const errorText = document.querySelector(".error-text");
	errorText.classList.toggle("hidden");
};

const setErrorText = (txt) => {
	const errorText = document.querySelector(".error-text");
	errorText.textContent = txt;
};

const validateEmail = (email) => {
	const regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	return regex.test(email);
};
