import React, { useState } from 'react';
import s from "./login.module.css"
import { NavLink } from "react-router-dom";
import Input from '../input/input';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className={s.main}>
        <div className={s.registration_page}>
            <div className={s.input_data}>
                <div className={s.info_all}>
                    <div>
                        <p className={s.info}>
                            Логин
                        </p>
                    </div>

                    <div className={s.info2}>
                        <NavLink to='/' className={navData => navData.isActive ? s.actives : s.item}>Вернуться на главную</NavLink> 
                    </div>
                </div>
                <div>
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                </div>
                <div className={s.dop}>
                    <input type="checkbox" checked="checked" name="remember" /> <span className={s.dop_sogl}>при регистрации вы принимаете наши <a href="#" class="accept">условия</a> и <a href="#" class="accept">политику конфиденциальности</a></span>

                </div>
                <div className={s.confirm}>
                    <button type="submit" name="submit" className={s.submit}>Зарегестрироваться</button>

                </div>
                <div className={s.end}>
                    <NavLink to='/login/registration' className={navData => navData.isActive ? s.actives : s.item}>Не зарегестрированы?</NavLink>

                </div>
            </div>
        </div>
    </div>
    )
}


export default Login