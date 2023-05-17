import { createOptionsForSelecters } from "./functions.js";

let countries = [];

export function fillCities(countryName, citypicker) {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.ok) {
        const data = response.json();
        data.then((value) => {
          const cyties = value.filter((el) => el.name === countryName).map((el) => el.capital);
          renderCyties(cyties, citypicker);
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function fillCountries(array) {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (response.ok) {
        const data = response.json();
        data.then((value) => {
          countries = value.map((el) => el.name);
          renderCountries(array);
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function renderCountries(array) {
  array.forEach(($picker) => ($picker.innerHTML = createOptionsForSelecters(countries)));
}

function renderCyties(cyties, $element) {
  $element.forEach(($picker) => ($picker.innerHTML = createOptionsForSelecters(cyties)));
}
