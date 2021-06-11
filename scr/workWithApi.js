import { backToMainWithParameters, createOptionsForSelecters } from "./functions.js";

let countries = [];

export const fillCountiesProm = new Promise((resolve, reject) => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.ok) {
        const data = response.json();
        data.then((value) => {
          let countries = value.map((el) => el.name);
          resolve(countries);
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

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
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.ok) {
        const data = response.json();
        data.then((value) => {
          countries = value.map((el) => el.name);
          renderCountries(array, countries);
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function renderCountries(array, countries) {
  array.forEach(($picker) => ($picker.innerHTML = createOptionsForSelecters(countries)));
}

function renderCyties(cyties, $element) {
  $element.forEach(($picker) => ($picker.innerHTML = createOptionsForSelecters(cyties)));
}
