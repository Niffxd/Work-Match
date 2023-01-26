const validationsCreateJobOffer = (form) => {
  const errors = {};
  const regexNumber = /^[0-9]+$/;

  if (form.category === 'Selecciona una categoría') {
    errors.category = 'Por favor ingrese una categoría';
  } else if (!form.description) {
    errors.description = 'Por favor, ingrese una descripción.';
    /* } else if (form.tasks.length === 0) {
    errors.tasks = 'Por favor, agregue al menos una tarea.';
  } else if (form.tasks.length > 0) {
    for (let task of form.tasks) {
      if (!task.description) {
        errors.task = 'Por favor, no deje tareas sin información.';
      }
    }
  }
  if (!form.estimated || parseInt(form.estimated) === 0) {
    errors.estimated = 'Por favor, ingresa el duración estimada del trabajo.';
  } else if (
    !regexNumber.test(form.estimated) ||
    parseInt(form.estimated) <= 0 ||
    parseInt(form.estimated) > 8
  ) {
    errors.estimated = 'El tiempo de trabajo debe durar entre cero y ocho horas.';
  */
  } else if (!form.budget || parseInt(form.budget === 0)) {
    errors.budget = 'Por favor, ingresa la remuneración pretendida.';
  } else if (!regexNumber.test(form.budget) || parseInt(form.budget) <= 0) {
    errors.budget =
      'La remuneración monetaria debe ser un número entero positivo, mayor que cero.';
  } else if (!form.address) {
    errors.address = 'Por favor, ingresa tu ubicación.';
  }

  return errors;
};
export default validationsCreateJobOffer;
