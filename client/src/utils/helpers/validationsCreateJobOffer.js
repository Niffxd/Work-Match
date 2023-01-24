const validationsCreateJobOffer = (form) => {
  const errors = {};
  const regexNumber = /^[0-9]+$/;

  if (form.category === 'Selecciona una categoría') {
    errors.category = 'Por favor ingrese una categoría';
  } else if (!form.description) {
    errors.description = 'Por favor, ingrese una descripción.';
  } else if (form.tasks.length === 0) {
    errors.tasks = 'Por favor, agregue al menos una tarea.';
  } else if (form.tasks.length > 0) {
    for (let task of form.tasks) {
      if (!task.description) {
        errors.task = 'Por favor, no deje tareas sin información.';
      }
    }
  }
  if (!form.time || parseInt(form.time) === 0) {
    errors.time = 'Por favor, ingresa el duración estimada del trabajo.';
  } else if (
    !regexNumber.test(form.time) ||
    parseInt(form.time) <= 0 ||
    parseInt(form.time) > 8
  ) {
    errors.time = 'El tiempo de trabajo debe durar entre cero y ocho horas.';
  } else if (!form.remuneration || parseInt(form.remuneration === 0)) {
    errors.remuneration = 'Por favor, ingresa la remuneración pretendida.';
  } else if (
    !regexNumber.test(form.remuneration) ||
    parseInt(form.remuneration) <= 0
  ) {
    errors.remuneration =
      'La remuneración monetaria debe ser un número entero positivo, mayor que cero.';
  } else if (!form.location) {
    errors.location = 'Por favor, ingresa tu ubicación.';
  }

  return errors;
};
export default validationsCreateJobOffer;
