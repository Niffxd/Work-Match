import Loader from './Loading'
import style from './buttons.module.css'

export default function AddButton({ handlerImage, uploadPhoto, states }) {
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
        <h3>Elige una imagen de perfil</h3>
        <input type="file" name="upload-image" className={style['upload-image']} onChange={handlerImage}/>
        {states.load ? <Loader width={true} preview={'preview'}/> : <img src={states.image} width='300' alt='profile'/>}
        <div className={style['buttons-container']}>
        <button
          className={`${style['exit-modal']}`}
          onClick={exitModal}>
            Cerrar
        </button>
        <button
          className={`${style['success-upload']}`}
          onClick={uploadPhoto}>
            Cargar
        </button>
        </div>
      </dialog>
      <button
        className={`${style['add-photo']}`}
        onClick={addImageHandler}>
          +
      </button>
    </>
  )
}