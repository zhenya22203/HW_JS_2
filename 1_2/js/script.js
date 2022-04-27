const area = document.querySelector(".area");
const input = document.querySelector("#phone");

const codesOfCountries = [
	{
		country: 'KG',
		code: "+996",
	},
	{
		country: 'RU',
		code: "+7",
	},
	{
		country: 'UZ',
		code: "+998",
	},
	{
		country: 'KZ',
		code: "+380",
	},
];

input.addEventListener("input", () => {
	phoneMatched = input.value.match(/[+0-9]+/);
	for(key in codesOfCountries) {
		if(codesOfCountries[key].code === phoneMatched[0]) {
			area.innerHTML = codesOfCountries[key].country;
		}
	};
});