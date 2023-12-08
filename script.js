const suit = ["clubs", "spades", "diamonds", "hearts"];
const pictire = ["jack", "queen", "king", "t"];
const cards = [];

for (let i = 2; i <= 10; i++) {
	for (let j = 0; j < suit.length; j++) {
		let cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

		cards.push(`<div class="card">
      ${cardInfo}
      ${cardInfo}
    </div>`);
	}
}

for (let i = 0; i < pictire.length; i++) {
	for (let j = 0; j < suit.length; j++) {
		let cardInfo = `<div class="card__info">${pictire[i][0].toUpperCase()}
      <img src="images/${suit[j]}.svg" alt="${suit[j]}">
    </div>`;

		const centerImg = pictire[i] !== "t" ? pictire[i] : suit[j];

		cards.push(`<div class="card card--person">
      ${cardInfo}
      <img class="person" src="images/${centerImg}.svg" alt="${centerImg}">
      ${cardInfo}
    </div>`);
	}
}

document.write(`<div class="wrapper">${cards.join("")}</div>`);
