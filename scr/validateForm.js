import { getInputs } from "./inputs";
import { renderResults } from "./render";
import { VALIDATOR } from "./validator";

export function onFormSubmit(e) {
  e.preventDefault();

  if (validateForm(e.target)) {
    console.log("form is valid");
    const values = getValues(e.target);

    fetch("./../JSON_MOCK/MOCK_DATA.json")
      .then((response) => {
        if (response.ok) {
          const data = response.json();
          data.then((value) => {
            const filteretData = value.filter((el) => {
              if (values.type === "hotelsEditForm") {
                return (
                  new Date(el.date) >= new Date(values.firstDate) &&
                  new Date(el.date) <= new Date(values.secondDate) &&
                  el.countryFrom.toLowerCase() === values.countryFrom.toLowerCase() &&
                  el.amenities == values.amenities
                );
              }
              return (
                new Date(el.date) >= new Date(values.firstDate) &&
                new Date(el.date) <= new Date(values.secondDate) &&
                el.countryFrom.toLowerCase() === values.countryFrom.toLowerCase()
              );
            });
            renderResults(values.type, filteretData, values);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });

    let myStorage = window.localStorage.getItem("history");
    if (myStorage) {
      const array = JSON.parse(myStorage);
      array.push(values);
      localStorage.setItem("history", JSON.stringify(array));
    } else {
      localStorage.setItem("history", JSON.stringify([values]));
    }
  } else {
    console.log("form is not valid");
  }
}

function getValues($form) {
  const $inputs = $form.querySelectorAll(".form-input");

  const valuesObject = {};
  valuesObject.id = generateID();
  valuesObject.type = $form.id;

  $inputs.forEach((element) => {
    valuesObject[element.name] = element.value;
  });

  return valuesObject;
}

function generateID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function validateForm($form) {
  const $inputs = getInputs($form);

  let isFormValid = true;

  $inputs.forEach(($input) => {
    const isInputValid = validateInput($input);

    if (!isInputValid) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

function validateInput($input) {
  const $container = $input.closest(".form-group");
  const value = $input.value;

  let inputMessage = "valid";

  if ($input.dataset.validators) {
    $input.validators.forEach((validator) => {
      if (VALIDATOR[validator.name](value)) {
        inputMessage = `error--${validator.name}`;
      }
    });
  }

  if (inputMessage !== "valid") {
    $container.classList.add("has-error");
    $container.classList.add(inputMessage);
  } else {
    $container.classList.remove("has-error");
  }

  return inputMessage === "valid";
}
