import React from "react";
import { useHistory } from "react-router-dom";
import FormJobOffer from "../../components/FormJobOffer/FormJobOffer";
import validationsCreateJobOffer from "../../components/FormJobOffer/helpers/validationsCreateJobOffer";

const CreateJobOffer = () => {
  //initial State Form & hooks
  const history = useHistory();
  const initialForm = {
    owner: "user",
    address: "",
    agreement: false,
    budget: 0,
    category: "Selecciona una categoría",
    description: "",
    // estimated: 0,
    // tasks: [],
  };

  //Submit handler & post function
  const submitHandler = async (event, form, errors, setErrors) => {
    event.preventDefault();
    try {
      setErrors(validationsCreateJobOffer(form));
      if (Object.keys(errors).length === 0) {
        await post({
          address: form.address,
          agreement: form.agreement,
          budget: parseInt(form.budget),
          description: form.description,
          category: form.category,
        });
        alert("Tu oferta fue publicada con éxito");
        history.goBack();
      }
    } catch (error) {
      console.log(error, error.message);
      setErrors({ ...errors, form: error.message });
    }
  };
  const post = async (data) => {
    const JSONdata = JSON.stringify(data);
    const endpoint = "http://localhost:3001/project";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    return await response.json();
  };

  //view
  return (
    <div className="container">
      <FormJobOffer
        initialForm={initialForm}
        submitHandler={submitHandler}
        closeHandler={false}
      />
    </div>
  );
};

export default CreateJobOffer;
