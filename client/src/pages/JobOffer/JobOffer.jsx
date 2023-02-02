import { use, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  deleteProjects,
  getOwner,
  getProjectId,
} from "../../redux/actions/projectActions";
import {
  getPublication,
  getUserId,
  userApplication,
} from "../../redux/actions/userActions";

import style from "./jobOffer.module.css";

export default function JobOfferDetail() {
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

  useEffect(() => {
    dispatch(getProjectId(id));
    dispatch(getPublication(id));
  }, []);

  useEffect(async () => {
    dispatch(getOwner(oneProject.owner));
  }, [oneProject]);

  const editHandler = (event) => {
    event.preventDefault();
    history.push(`/create-job-offer`);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    dispatch(deleteProjects(id));
    history.push(`/`);
  };

  const applicationHandler = async (event) => {
    event.preventDefault();
    dispatch(
      userApplication({
        project: id,
        user: user.id,
        owner: owner.id,
      })
    );
    // dispatch(getUserId(user.id));
    dispatch(getPublication(id));
  };

  console.log(user, userPublication);
  return (
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
                  src='https://i.pinimg.com/736x/b5/49/41/b5494197b2d462c940f88988b203d290.jpg'
                  alt='Photo profile.'
                />
                {/* <img
              className={`${style["photo-profile"]}`}
              src={owner.image}
              alt='Photo profile'
            /> */}
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
            <h4>{oneProject.Category && oneProject.Category.name}</h4>
            <p>{oneProject.description}</p>
            {oneProject.information && (
              <>
                <h4>Detalles:</h4>
                <p>{oneProject.information}</p>
              </>
            )}

            <section className={`${style["container-features"]}`}>
              {oneProject.estimated && (
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
              <img
                className={`${style["image-budget"]}`}
                src='https://cdn-icons-png.flaticon.com/512/9420/9420018.png'
                alt='budget'
              />
              <div className={`${style["div-budget"]}`}>
                <h4>Remuneración:</h4>
                <p>{oneProject.budget} ARS</p>
              </div>
              <img
                className={`${style["image-agreement"]}`}
                src='https://cdn-icons-png.flaticon.com/512/4878/4878245.png'
                alt='agreement'
              />
              <div className={`${style["div-agreement"]}`}>
                <h4>Negociable:</h4>
                {oneProject.agreement ? <p>Si.</p> : <p>No.</p>}
              </div>
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
          {user.Projects &&
            userPublication &&
            userPublication.Bid.owner === userPublication.Bid.user && (
              <div className='buttons-container'>
                <button className='button-green' onClick={editHandler}>
                  Editar
                </button>
                <button className='button-red' onClick={deleteHandler}>
                  Eliminar
                </button>
              </div>
            )}
          {user.Projects &&
            userPublication &&
            userPublication.Bid.owner !== userPublication.Bid.user && (
              <div className={`${style["application"]}`}>
                <img
                  className={`icon-green ${style["check-icon"]}`}
                  src='https://cdn-icons-png.flaticon.com/512/87/87932.png'
                  alt='Check'
                />
                <h3>Postulado</h3>
              </div>
            )}
          {user.Projects && !userPublication && (
            <button className='button-green' onClick={applicationHandler}>
              Postularme
            </button>
          )}
        </>
      )}
    </article>
  );
}
