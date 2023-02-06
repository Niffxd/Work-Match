import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";
import { newMessage } from "../../redux/actions/alertMessageActions";
import { confirmationOpen } from "../../redux/actions/confirmationMessageActions";
import {
  deleteProjects,
  getOwner,
  getProjectId,
  putProjects,
} from "../../redux/actions/projectActions";
import {
  getPublication,
  getUserId,
  userApplication,
} from "../../redux/actions/userActions";

import style from "./jobOffer.module.css";

export default function JobOfferDetail() {
  //Variables
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const jobOfferState = useSelector((state) => state.project);
  const { oneProject, owner } = jobOfferState;
  const userState = useSelector((state) => state.user);
  const { user, userPublication } = userState;
  const addressState = useSelector((state) => state.address);
  const { states } = addressState;
  const addressJob = states.find(
    (state) => state.id === parseInt(oneProject.state)
  );
  const [visible, setVisible] = useState("visible");

  //Use Effects
  useEffect(() => {
    dispatch(getProjectId(id));
    dispatch(getPublication(id));
  }, []); //eslint-disable-line 

  useEffect(async () => { //eslint-disable-line 
    dispatch(getOwner(oneProject.owner));
  }, [oneProject]);//eslint-disable-line

  //Edit Publication
  const editHandler = (event) => {
    event.preventDefault();
    history.push(`/edit-job-offer`);
  };

  //Open confirmation message
  const confirmationHandler = async (event) => {
    event.preventDefault();
    dispatch(confirmationOpen());
  };

  //delete publication
  const deleteHandler = () => {
    try {
      dispatch(deleteProjects(id));
      dispatch(newMessage("Tu oferta fue eliminada con éxito", "success"));
      history.push(`/`);
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  //reactive publication
  const reactivateHandler = (event) => {
    event.preventDefault();
    try {
      dispatch(
        putProjects({
          id: oneProject.id,
          deleted: false,
        })
      );
      dispatch(getPublication(id));
      history.push(`/`);
      dispatch(newMessage("Tu oferta fue reactivada con éxito", "success"));
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };
  //new application
  const applicationHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(
        userApplication({
          project: id,
          user: user.id,
          owner: owner.id,
        })
      );
      setVisible("invisible");
      dispatch(getUserId(user.id));
      dispatch(getPublication(id));
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  return (
    <>
      <ConfirmationMessage
        message='¿Quieres eliminar esta oferta de trabajo?'
        handler={deleteHandler}
      />
      <article className={`container ${style["job-offer-container"]}`}>
        {!oneProject && !owner ? (
          <h1>Page not Found</h1>
        ) : (
          <>
            <section className={`${style["info-container"]}`}>
              <div className={`${style["data-container"]}`}>
                {/* Photo profile */}
                <div className={`${style["photo-container"]}`}>
                  <img
                    className={`${style["photo-profile"]}`}
                    src={owner.image}
                    alt='profile'
                  />
                </div>
                {/* Name */}
                <p className={`${style["user-name"]}`}>{owner.name}</p>
                {/* Date */}
                <p className={`${style["date"]}`}>
                  {new Date(oneProject.updatedAt).getDate()}/
                  {new Date(oneProject.updatedAt).getMonth()}/
                  {new Date(oneProject.updatedAt).getFullYear()}
                </p>
              </div>
              {/* Category */}
              <h4>{oneProject.Category && oneProject.Category.name}</h4>
              {/* Description */}
              <p>{oneProject.description}</p>
              {/* Details */}
              {oneProject.information && (
                <>
                  <h4>Detalles:</h4>
                  <p>{oneProject.information}</p>
                </>
              )}

              <section className={`${style["container-features"]}`}>
                {/* Time */}
                {(oneProject.estimated || oneProject.estimated > 0) && (
                  <>
                    <img
                      className={`${style["image-time"]}`}
                      src='https://cdn-icons-png.flaticon.com/512/3936/3936550.png'
                      alt='time estimated'
                    />
                    <div className={`${style["div-time"]}`}>
                      <h4>Duración estimada:</h4>
                      <p>{oneProject.estimated}h</p>
                    </div>
                  </>
                )}
                {/* budget */}
                <img
                  className={`${style["image-budget"]}`}
                  src='https://cdn-icons-png.flaticon.com/512/9420/9420018.png'
                  alt='budget'
                />
                <div className={`${style["div-budget"]}`}>
                  <h4>Remuneración:</h4>
                  <p>{oneProject.budget} ARS</p>
                </div>
                {/* agreement */}
                <img
                  className={`${style["image-agreement"]}`}
                  src='https://cdn-icons-png.flaticon.com/512/4878/4878245.png'
                  alt='agreement'
                />
                <div className={`${style["div-agreement"]}`}>
                  <h4>Negociable:</h4>
                  {oneProject.agreement ? <p>Si.</p> : <p>No.</p>}
                </div>
                {/* address */}
                <img
                  className={`${style["image-address"]}`}
                  src='https://cdn-icons-png.flaticon.com/512/3082/3082383.png'
                  alt='address'
                />
                <div className={`${style["div-address"]}`}>
                  <h4>Ubcación:</h4>
                  <p>{addressJob && addressJob.name}, Argentina.</p>
                </div>
              </section>
            </section>
            {(oneProject.deleted || !oneProject.status) &&
              user.Projects &&
              userPublication &&
              userPublication === "user" && (
                <p className={`${style["not-available"]}`}>No disponible.</p>
              )}
            {(oneProject.deleted || !oneProject.status) &&
              user.Projects &&
              userPublication &&
              userPublication === "owner" && (
                <button className='button-green' onClick={reactivateHandler}>
                  Activar publicación
                </button>
              )}
            {!oneProject.deleted &&
              oneProject.status &&
              user.Projects &&
              userPublication &&
              userPublication === "owner" && (
                <div className='buttons-container'>
                  <button className='button-green' onClick={editHandler}>
                    Editar
                  </button>
                  <button className='button-red' onClick={confirmationHandler}>
                    Eliminar
                  </button>
                </div>
              )}
            {!oneProject.deleted &&
              oneProject.status &&
              user.Projects &&
              userPublication &&
              userPublication === "user" && (
                <div className={`${style["application"]}`}>
                  <img
                    className={`icon-green ${style["check-icon"]}`}
                    src='https://cdn-icons-png.flaticon.com/512/87/87932.png'
                    alt='Check'
                  />
                  <h3>Postulado</h3>
                </div>
              )}
            {!oneProject.deleted &&
              oneProject.status &&
              user.Projects &&
              !userPublication && (
                <>
                  <div
                    className={`${visible === "visible" && "invisible"} ${
                      style["application"]
                    }`}
                  >
                    <img
                      className={`icon-green ${style["check-icon"]}`}
                      src='https://cdn-icons-png.flaticon.com/512/87/87932.png'
                      alt='Check'
                    />
                    <h3>Postulado</h3>
                  </div>
                  <button
                    className={`${visible} button-green`}
                    onClick={applicationHandler}
                  >
                    Postularme
                  </button>
                </>
              )}
          </>
        )}
      </article>
    </>
  );
}
