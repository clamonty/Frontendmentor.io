const showBtn = document.querySelector(".show-btn");
const hideBtn = document.querySelector(".hide-btn");
showBtn.addEventListener("click", (e) => {
	const width = window.screen.availWidth;
	const shareModal = document.querySelector(".share-modal");
	const shareModalClassList = shareModal.classList;
	if (width < 1400) {
		if (shareModalClassList.contains("hidden")) {
			shareModalClassList.toggle("hidden");
		}
	}
	if (width >= 1400) {
		shareModalClassList.toggle("hidden");
		const icon = showBtn.childNodes[1];
		const iconClassList = icon.classList;
		const btnClassList = showBtn.classList;
		if (shareModalClassList.contains("hidden")) {
			if (btnClassList.contains("dark-btn")) btnClassList.remove("dark-btn");
			if (iconClassList.contains("share-icon-dark"))
				iconClassList.remove("share-icon-dark");
		} else {
			if (!btnClassList.contains("dark-btn")) btnClassList.add("dark-btn");
			if (!iconClassList.contains("share-icon-dark"))
				iconClassList.add("share-icon-dark");
		}
	}
	console.log(width);
});

hideBtn.addEventListener("click", (e) => {
	const shareModal = document.querySelector(".share-modal");
	const shareModalClassList = shareModal.classList;
	if (!shareModalClassList.contains("hidden")) {
		shareModalClassList.toggle("hidden");
	}
});
