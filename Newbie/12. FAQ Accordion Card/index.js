const buttons = document.getElementsByClassName("faq-icon");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", (e) => {
		// Get parent img header
		const imgHeader = buttons[i].parentElement;
		const listItem = buttons[i].parentElement.parentElement;

		const title = imgHeader.children[0];
		title.classList.toggle("bold");

		const text = listItem.children[1];
		text.classList.toggle("hidden");
		buttons[i].classList.toggle("icon-active");
	});
}
