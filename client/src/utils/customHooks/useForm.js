"use client";

import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useForm = (initialForm, validationForm) => {
  const [form, setForm] = useLocalStorage("form", initialForm);
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validationForm(form));
  };

  const checkedHandler = (event) => {
    const { name, checked } = event.target;
    setForm({
      ...form,
      [name]: checked,
    });
    setErrors(validationForm(form));
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setForm(initialForm);
  };

  return {
    form,
    errors,
    setForm,
    setErrors,
    resetHandler,
    changeHandler,
    checkedHandler,
  };
};

export default useForm;
