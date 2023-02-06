import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../../../redux/actions/alertMessageActions";
import {
  getProjectId,
  putProjects,
} from "../../../redux/actions/projectActions";
import {
  getUserId,
  saveIdBid,
  updateApplicationStatus,
} from "../../../redux/actions/userActions";
import style from "./postulateCard.module.css";

export default function PostulateCard({
  project,
  bid,
  image,
  name,
  category,
  biography,
}) {
  //dispatch
  const dispatch = useDispatch();
  //State
  const [visible, setVisible] = useState("visible");
  const [moreInformation, setMoreInformation] = useState("none");
  const userState = useSelector((state) => state.user);
  const { user, idBid } = userState;
  const jobOfferState = useSelector((state) => state.project);
  const { oneProject } = jobOfferState;
  //show full biography
  const moreInformationHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (moreInformation === "none") {
      setMoreInformation("more-information");
    } else {
      setMoreInformation("none");
    }
  };

  //change status to rejected
  const rejectedHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      dispatch(saveIdBid(bid));
      dispatch(updateApplicationStatus({ id: idBid, status: "Rechazado" }));
      dispatch(getUserId(user.id));
      setVisible("invisible");
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  //change status to accepted
  const matchHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // try {
    //   dispatch(saveIdBid(bid));
    //   dispatch(getProjectId(project));
    //   dispatch(updateApplicationStatus({ id: idBid, status: "Match" }));
    //   dispatch(
    //     putProjects({
    //       id: oneProject.id,
    //       status: false,
    //     })
    //   );
    //   dispatch(getUserId(user.id));
    //   setVisible("invisible");
    // } catch (error) {
    //   console.log(error);
    //   dispatch(newMessage(error.message, "error"));
    // }
    dispatch(saveIdBid(bid))
      .then(() => dispatch(getProjectId(project)))
      .then(() =>
        dispatch(updateApplicationStatus({ id: idBid, status: "Match" }))
      )
      .then(() =>
        dispatch(
          putProjects({
            id: oneProject.id,
            status: false,
          })
        )
      )
      .then(() => {
        dispatch(getUserId(user.id));
        setVisible("invisible");
      })
      .catch((error) => {
        console.log(error);
        dispatch(newMessage(error.message, "error"));
      });
  };

  return (
    <article
      className={`${style[visible]} ${style["card-container"]}`}
      onClick={moreInformationHandler}
    >
      <div className={`${style["photo-container"]}`}>
        <img
          className={`${style["photo-profile"]}`}
          src={image}
          alt='Photo profile'
        />
      </div>
      <h4 className={`${style["name"]}`}>{name}</h4>
      <h4 className={`${style["category"]}`}>{category}</h4>
      <p className={`${style["biography"]} ${style[moreInformation]}`}>
        {biography}
      </p>
      <div
        className={`buttons-container ${
          moreInformation === "none" && "invisible"
        } ${style["actions"]}`}
      >
        <button className='button-red' onClick={rejectedHandler}>
          Descartar
        </button>
        <button className='button-green' onClick={matchHandler}>
          Match!
        </button>
      </div>
    </article>
  );
}
