import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectId } from "../../redux/actions/projectActions";
import style from "./jobOffer.module.css";

export default function JobOfferDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const jobOfferState = useSelector((state) => state.project);
  const { oneProject } = jobOfferState;
  const categoriesState = useSelector((state) => state.categories);
  const { categories } = categoriesState;
  const jobCategory = categories.find(
    (categ) => categ.id === oneProject.category
  );
  console.log(jobCategory);
  console.log(oneProject);
  useEffect(() => {
    dispatch(getProjectId(id));
  }, []);

  return (
    <article className='container'>
      {!oneProject ? (
        <h1>Page not Found</h1>
      ) : (
        <>
          <h1>{jobCategory.name}</h1>
          <h4>Descripción del puesto:</h4>
          <p>{oneProject.description}</p>
          <section className={`${style["container-features"]}`}>
            <div className={`${style["div-budget"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/9420/9420018.png'
                alt='budget'
              />
              <h4>Remuneración:</h4>
              <p>$ {oneProject.budget}</p>
            </div>
            <div className={`${style["div-agreement"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/4878/4878245.png'
                alt='agreement'
              />
              <h4>Negociable:</h4>
              {oneProject.agreement ? <p>Si.</p> : <p>No.</p>}
            </div>
            {/* <div className={`${style["div-address"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3082/3082383.png'
                alt='address'
              />
              <h4>Ubcación:</h4>
              <p>{}.</p>
            </div> */}
          </section>
        </>
      )}
    </article>
  );
}
