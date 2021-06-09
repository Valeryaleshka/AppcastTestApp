export function getInputs($form) {
  const $inputs = $form.querySelectorAll(".form-input");

  $inputs.forEach(($input) => {
    if ($input.dataset.validators) {
      $input.validators = _createInputValidators($input);
    }
  });

  return $inputs;
}

function _createInputValidators($input) {
  const validators = [];

  $input.dataset.validators.split(",").map((validator) => {
    const validatorStr = validator.trim();
    const name = validatorStr.split("(")[0];

    validators.push({
      name,
    });
  });

  return validators;
}
