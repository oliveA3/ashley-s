"use strict";

document.getElementById("pollito-btn").addEventListener("click", () => {
	let answers = [];
	let vago = 0;
	let inteligente = 0;
	let aventurero = 0;
	let cariñoso = 0;

	for (let i = 0; i < 4; i++) {
		answers[i] = document.querySelector(
			`input[name="question${i + 1}"]:checked`
		);
	}

	for (let answer of answers) {
		if (answer.value == "vago") {
			vago++;
		} else if (answer.value == "inteligente") {
			inteligente++;
		} else if (answer.value == "cariñoso") {
			cariñoso++;
		} else {
			aventurero++;
		}
	}

	const img = document.querySelector(".result-img");
	const text = document.querySelector(".result-text");
	let max = Math.max(vago, cariñoso, inteligente, aventurero);

	if (max == vago) {
		img.src = `media/pollitos/pollito_vago.jpg`;
		text.innerHTML =
			"Eres un pollito relajado (vago), lo tuyo es no meterte en nada y vivir la vida por vivirla.";
	} else if (max == inteligente) {
		img.src = `media/pollitos/pollito_inteligente.jpg`;
		text.innerHTML =
			"Eres un pollito muy inteligente y curioso, vives para aprender.";
	} else if (max == cariñoso) {
		img.src = `media/pollitos/pollito_cariñoso.jpg`;
		text.text.innerHTML =
			"Eres un pollito virtuoso al que le gusta el arte, amas a todos a tu alrededor (Hufflelpuff).";
	} else {
		img.src = `media/pollitos/pollito_aventurero.jpg`;
		text.innerHTML =
			"Eres un pollito aventurero y valiente, sin miedo a arriesgar y ganar.";
	}

	img.style.display = "block";
	text.style.display = "block";
});
