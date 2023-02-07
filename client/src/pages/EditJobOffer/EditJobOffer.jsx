import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormJobOffer from "../../components/FormJobOffer/FormJobOffer";
import { putProjects } from "../../redux/actions/projectActions";
import validationsCreateJobOffer from "../../utils/helpers/validationsCreateJobOffer";
import { newMessage } from "../../redux/actions/alertMessageActions";

export default function EditJobOffer() {
  // Variables
  const dispatch = useDispatch();
  const jobOfferState = useSelector((state) => state.project);
  const { oneProject } = jobOfferState;
  const stateState = useSelector((state) => state.address);
  const { states } = stateState;
  const jobState = states.find((element) => element.id === oneProject.state);
  const history = useHistory();

  //   Initial State Form
  const initialForm = {
    address: jobState.name || "",
    addressId: oneProject.state || "",
    agreement: oneProject.agreement ,
    budget: oneProject.budget , 
    category: oneProject.Category.name ,
    categoryId: oneProject.Category.id ,
    description: oneProject.description ,
    estimated: oneProject.estimated ,
    information: oneProject.information ,
  };
  console.log(oneProject)
  console.log(states)

  //Submit
  const submitHandler = (event, form, errors, setErrors) => {
    event.preventDefault();
    try {
      setErrors(validationsCreateJobOffer(form));
      if (Object.keys(errors).length === 0) {
        dispatch(
          putProjects({
            id: oneProject.id,
            agreement: form.agreement,
            budget: form.budget,
            category: form.categoryId,
            description: form.description,
            estimated: form.estimated,
            information: form.information,
            state: form.addressId,
          })
        );
        dispatch(newMessage("Tu oferta fue actualizada con éxito", "success"));
        history.goBack();
      }
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };
  return (
    <div className='container'>
      <FormJobOffer
        initialForm={initialForm}
        submitHandler={submitHandler}
        closeHandler={false}
      />
    </div>
  );
}
