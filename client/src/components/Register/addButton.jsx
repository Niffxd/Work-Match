import style from './buttons.module.css'

export default function AddButton() {
  const addImageHandler = () => {
    document.getElementById('modalProfile').showModal()
    document.getElementById('modalProfile').classList.add('showModal')
  }

  const exitModal = () => {
    document.getElementById('modalProfile').close()
    document.getElementById('modalProfile').classList.remove('showModal')
  }

  return (
    <>
      <dialog id='modalProfile'>
        <h3>Imagen no disponible por el momento</h3>
        <button
          className={`${style['exit-modal']}`}
          onClick={exitModal}>
            Cerrar
        </button>
      </dialog>
      <button
        className={`${style['add-photo']}`}
        onClick={addImageHandler}>
          +
      </button>
    </>
  )
}