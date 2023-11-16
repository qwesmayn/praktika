import s from './Modal_window.module.css'
import React from 'react'

export default function Modal_window({active, setActive, children}) {
  return (
    <div className={`${s["modal"]} ${active && s["active"]}`} onClick={() => setActive(false)}>
        <div className={`${s["modal_content"]} ${active && s["active"]}`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
