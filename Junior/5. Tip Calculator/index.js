/* ------------------------ Variables & DOM elements ------------------------ */
let billAmount = 0;
let numberPeople = 1;
let tipPercentage = 0;
let tipPerPerson, totalPerPerson;

const billInput = document.querySelector(".bill-input");
const billError = document.querySelector(".bill-error");
const billControl = document.querySelector(".bill-control");
const peopleInput = document.querySelector(".people-input");
const peopleError = document.querySelector(".people-error");
const peopleControl = document.querySelector(".people-control");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTip = document.querySelector(".custom-tip");
const personTip = document.querySelector(".tip-person");
const personTotal = document.querySelector(".total-person");
/* ----------------------  Reset button functionality --------------------- */
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", (e) => {
	billInput.value = 0.0;
	peopleInput.value = 1;
	amountPerPerson = 0.0;
	amountTotal = 0.0;
	tipButtons.forEach((button) => {
		if (button.classList.contains("tip-active"))
			button.classList.remove("tip-active");
		button.dataset.checked = "false";
	});
	if (peopleControl.classList.contains("input-error")) {
		peopleControl.classList.remove("input-error");
	}
	if (!peopleError.classList.contains("hidden")) {
		peopleError.classList.add("hidden");
	}
	if (billControl.classList.contains("input-error")) {
		billControl.classList.remove("input-error");
	}
	if (!billError.classList.contains("hidden")) {
		billError.classList.add("hidden");
	}
	customTip.value = "";
	customTip.dataset.percent = "0";
});

/* ------------------------ Bill change functionality ----------------------- */
billInput.addEventListener("change", (e) => {
	const billVal = +e.target.value;
	if (billVal < 0) {
		if (!billInput.classList.contains("input-error")) {
			billInput.classList.add("input-error");
		}
		if (billError.classList.contains("hidden")) {
			billError.classList.remove("hidden");
		}
	} else {
		if (billInput.classList.contains("input-error")) {
			billInput.classList.remove("input-error");
		}
		if (!billError.classList.contains("hidden")) {
			billError.classList.add("hidden");
		}
		billAmount = billVal;
	}
	updateAmounts();
});

/* ------------------------ Tip Change Functionality ------------------------ */

function applyTipStyles(id) {
	tipButtons.forEach((button) => {
		if (button.id === id) {
			if (!button.classList.contains("tip-active")) {
				button.classList.add("tip-active");
			}
			button.dataset.checked = "true";
			tipPercentage = +button.dataset.percent;
		} else {
			button.dataset.checked = "false";
			if (button.classList.contains("tip-active")) {
				button.classList.remove("tip-active");
			}
		}
	});
}

tipButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		applyTipStyles(button.id);
		updateAmounts();
	});
});

customTip.addEventListener("change", (e) => {
	const tipVal = +e.target.value;
	if (tipVal >= 0) {
		customTip.dataset.percent = tipVal;
		applyTipStyles(customTip.id);
		updateAmounts();
	}
});

/* ----------------------- People Change Functionality ---------------------- */

peopleInput.addEventListener("change", (e) => {
	const peopleVal = +e.target.value;
	if (peopleVal <= 0) {
		if (!peopleInput.classList.contains("input-error")) {
			peopleInput.classList.add("input-error");
		}
		if (peopleError.classList.contains("hidden")) {
			peopleError.classList.remove("hidden");
		}
	} else {
		if (peopleInput.classList.contains("input-error")) {
			peopleInput.classList.remove("input-error");
		}
		if (!peopleError.classList.contains("hidden")) {
			peopleError.classList.add("hidden");
		}
		numberPeople = peopleVal;
	}
	updateAmounts();
});

/* ---------------------- Tip Calculation Functionality --------------------- */

function updateAmounts() {
	const tipTotal = billAmount * (tipPercentage / 100);
	const mealTotal = billAmount + tipTotal;
	let tipPerPerson = (tipTotal / numberPeople).toFixed(2);
	let amountPerPerson = (mealTotal / numberPeople).toFixed(2);
	console.log(tipPerPerson);
	console.log(amountPerPerson);
	personTip.textContent = tipPerPerson;
	personTotal.textContent = amountPerPerson;
}
