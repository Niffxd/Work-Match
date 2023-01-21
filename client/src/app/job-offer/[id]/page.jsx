import style from "./page.module.css";

// ESTA simulacionApi DEBE ELIMINARSE Y TRAER LAS CATEGORIAS DE LA API.
const simulacionApi = [
  {
    id: 1,
    category: "Jardinería",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    tasks: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"],
    time: 6,
    remuneration: 20,
    negotiable: false,
    location: "Mendoza, Argentina",
  },
  {
    id: 2,
    category: "Carpintería",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    tasks: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"],
    time: 8,
    remuneration: 30,
    negotiable: true,
    location: "Caracas, Venezuela",
  },
  {
    id: 3,
    category: "Pintura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    tasks: ["Tarea 1", "Tarea 2", "Tarea 3"],
    time: 7,
    remuneration: 25,
    negotiable: false,
    location: "Lima, Perú",
  },
];

export default function JobOffer({ params }) {
  const { id } = params;
  // EN jobOffer SE DEBEN GUARDAR DEL TRABAJO, TRAIDOS DE LA API (lo demás no cambia)
  const jobOffer = simulacionApi.find((job) => `${job.id}` === `${id}`);
  return (
    <>
      {!jobOffer ? (
        <h1>Page not Found</h1>
      ) : (
        <div className='container'>
          <h1>{jobOffer.category}</h1>
          <p>{jobOffer.description}</p>
          <h4 className={`${style["h4-task"]}`}>Tareas a realizar:</h4>
          <ul className={`${style["ul-task"]}`}>
            {jobOffer.tasks.map((task, index) => {
              return (
                <li key={`task-${index}`} className={`${style["li-task"]}`}>
                  {task}
                </li>
              );
            })}
          </ul>
          <div className={`${style["container-features"]}`}>
            <div className={`${style["div-time"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/5561/5561832.png'
                alt='Time'
              />
              <h4>Duración estimada:</h4>
              <p>{jobOffer.time} hs</p>
            </div>
            <div className={`${style["div-remuneration"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/9420/9420018.png'
                alt='Remuneration'
              />
              <h4>Remuneración:</h4>
              <p>$ {jobOffer.remuneration}</p>
            </div>
            <div className={`${style["div-negotiable"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/4878/4878245.png'
                alt='Negotiable'
              />
              <h4>Negociable:</h4>
              {jobOffer.negotiable ? <p>Si.</p> : <p>No.</p>}
            </div>
            <div className={`${style["div-location"]}`}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3082/3082383.png'
                alt='Location'
              />
              <h4>Ubcación:</h4>
              <p>{jobOffer.location}.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
