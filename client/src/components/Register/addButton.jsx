'use client'

import style from './buttons.module.css'

export default function AddButton() {
  const addImageHandler = () => {
    console.log('addImageHandler')
  }

  return (
    <button
      className={`${style['add-photo']}`}
      onClick={addImageHandler}>
        +
    </button>
  )
}