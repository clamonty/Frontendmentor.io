document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	const email = document.querySelector(".email");
	const emailValue = email.value;
	const errorText = document.querySelector(".error-text");
	if (!validateEmail(emailValue)) {
		console.log(errorText.classList);
		if (errorText.classList.contains("hidden")) {
			errorText.classList.toggle("hidden");
			errorText.classList.toggle("show");
		}
	} else {
		if (!errorText.classList.contains("hidden")) {
			errorText.classList.toggle("show");
			errorText.classList.toggle("hidden");
		}
	}
});

const validateEmail = (email) => {
	const regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	return regex.test(email);
};
