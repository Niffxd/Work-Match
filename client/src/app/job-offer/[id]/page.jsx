import { getProject } from '@/utils/api/project';
import style from './page.module.css';

export default async function JobOffer({ params }) {
  const { id } = params;
  const jobOffer = await getProject(parseInt(id));
  return (
    <article className="container">
      {!jobOffer ? (
        <h1>Page not Found</h1>
      ) : (
        <>
          <h1>{jobOffer.title}</h1>
          <h4>Descripción del puesto:</h4>
          <p>{jobOffer.description}</p>
          {/* <h4 className={`${style['h4-task']}`}>Tareas a realizar:</h4>
          <ul className={`${style['ul-task']}`}>
            {jobOffer.tasks.map((task, index) => {
              return (
                <li key={`task-${index}`} className={`${style['li-task']}`}>
                  {task}
                </li>
              );
            })}
          </ul> */}
          <section className={`${style['container-features']}`}>
            {/* <div className={`${style['div-time']}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5561/5561832.png"
                alt="Time"
              />
              <h4>Duración estimada:</h4>
              <p>{jobOffer.time} hs</p>
            </div> */}
            <div className={`${style['div-budget']}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9420/9420018.png"
                alt="budget"
              />
              <h4>Remuneración:</h4>
              <p>$ {jobOffer.budget}</p>
            </div>
            <div className={`${style['div-agreement']}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4878/4878245.png"
                alt="agreement"
              />
              <h4>Negociable:</h4>
              {jobOffer.agreement ? <p>Si.</p> : <p>No.</p>}
            </div>
            <div className={`${style['div-address']}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                alt="address"
              />
              <h4>Ubcación:</h4>
              <p>{jobOffer.address}.</p>
            </div>
          </section>
        </>
      )}
    </article>
  );
}
