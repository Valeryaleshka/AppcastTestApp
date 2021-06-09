import { getInputs } from "./inputs";
import { VALIDATOR } from "./validator";

export function onFormSubmit(e) {
  e.preventDefault();

  if (validateForm(e.target)) {
    console.log("form is valid");
    const values = getValues(e.target);

    //create some fetch to submit form

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
