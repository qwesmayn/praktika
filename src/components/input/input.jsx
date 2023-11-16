import React from 'react';
import s from "./input.module.css"
import { NavLink } from "react-router-dom";


const Input = (props) => {
    return (
        <input className={s.input} onChange={(event)=> props.setValue(event.target.value)} 
        value={props.value}  type={props.type} placeholder={props.placeholder}/>
    )
}

export default Input