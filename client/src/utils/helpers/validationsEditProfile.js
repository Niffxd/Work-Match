const validationEditProfile = (form) => {
  const errors = {};
  const regexNumber = /^[0-9]+$/;
  const regexUsername = /^[a-z\d]+$/;
  const regexName = /^[ A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/i;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  if (!form.username) {
    errors.username = 'Por favor, agregue un nombre de usuario.';
  } else if (!regexUsername.test(form.username)) {
    errors.username =
      'El nombre de usuario sólo puede tener números y letras minúsculas.';
  } else if (!form.name) {
    errors.name = 'Por favor, agregue su nombre y apellido.';
  } else if (!regexName.test(form.name)) {
    errors.name = 'Por favor, ingrese un nombre válido.';
  } else if (!form.age) {
    errors.age = 'Por favor, ingrese su edad.';
  } else if (!regexNumber.test(form.age)) {
    errors.age = 'La edad debe ser un número entero positivo.';
  } else if (form.age < 0 || form.age > 100) {
    errors.age = 'Por favor, ingrese una edad válida.';
  } else if (form.age < 16) {
    errors.age = 'Debes tener más de 16 años, para poder registrarte.';
  } else if (!form.mail) {
    errors.mail = 'Por favor, agregue su correo electrónico.';
  } else if (!regexEmail.test(form.mail)) {
    errors.mail = 'Por favor, agregue un correo electrónico válido.';
  } else if (!form.phone) {
    errors.phone = 'Por favor, agregue su número de teléfono.';
  } else if (!regexNumber.test(form.phone)) {
    errors.phone = 'El teléfono debe ser un número.';
  } else if (form.phone.length < 7 || form.phone.length > 18) {
    errors.phone = 'Por favor ingrese un número de teléfono válido.';
  } else if (!form.address) {
    errors.address = 'Por favor, agregue su dirección.';
  } else if (form.password && !form.repeatPassword) {
    errors.repeatPassword = 'Por favor, repita la contraseña.';
  } else if (form.password !== form.repeatPassword) {
    errors.repeatPassword = 'Las contraseñas deben ser iguales.';
  }

  return errors;
};

export default validationEditProfile;
