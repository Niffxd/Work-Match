import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormJobOffer from "../../components/FormJobOffer/FormJobOffer";
import { newMessage } from "../../redux/actions/alertMessageActions";
import { postProject } from "../../redux/actions/projectActions";
import validationsCreateJobOffer from "../../utils/helpers/validationsCreateJobOffer";

const CreateJobOffer = () => {
  //Variables
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const stateState = useSelector((state) => state.address);
  const { states } = stateState;
  const stateName = user.Address
    ? states.find((element) => element.id === user.Address.state)
    : false;
  const jobState = stateName ? stateName.name : "Selecciona una dirección";

  //initial State Form
  const initialForm = {
    address: jobState,
    addressId: (user.Address && user.Address.state) || 1,
    agreement: false,
    budget: "",
    category: "Selecciona una categoría",
    categoryId: 0,
    description: "",
    estimated: 0,
    information: "",
  };

  //Submit handler & post function
  const submitHandler = (event, form, errors, setErrors) => {
    event.preventDefault();
    try {
      setErrors(validationsCreateJobOffer(form));
      if (Object.keys(errors).length === 0) {
        dispatch(
          postProject({
            agreement: form.agreement,
            bidder: user.id,
            budget: form.budget,
            category: form.categoryId,
            description: form.description,
            estimated: form.estimated,
            information: form.information,
            state: form.addressId,
            owner: user.id,
            ownerName: user.name,
          })
        );
        dispatch(newMessage("Tu oferta fue publicada con éxito", "success"));
        history.push(`/`);
      }
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  //view
  return (
    <div className='container'>
      <FormJobOffer
        initialForm={initialForm}
        submitHandler={submitHandler}
        closeHandler={false}
      />
    </div>
  );
};

export default CreateJobOffer;
