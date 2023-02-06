const validationsCreateJobOffer = (form) => {
  const errors = {};
  const regexNumber = /^[0-9]+$/;

  if (form.category === "Selecciona una categoría") {
    errors.category = "Por favor ingrese una categoría";
  } else if (!form.description) {
    errors.description = "Por favor, ingrese una descripción.";
  } else if (
    form.estimated &&
    (!regexNumber.test(form.estimated) || parseInt(form.estimated) < 0)
  ) {
    errors.estimated =
      "El tiempo estimado debe ser un número entero positivo, mayor que cero.";
  } else if (!form.budget || parseInt(form.budget === 0)) {
    errors.budget = "Por favor, ingresa la remuneración pretendida.";
  } else if (!regexNumber.test(form.budget) || parseInt(form.budget) <= 0) {
    errors.budget =
      "La remuneración monetaria debe ser un número entero positivo, mayor que cero.";
  } else if (form.address === "Selecciona una dirección") {
    errors.address = "Por favor ingrese una dirección";
  }

  return errors;
};
export default validationsCreateJobOffer;
