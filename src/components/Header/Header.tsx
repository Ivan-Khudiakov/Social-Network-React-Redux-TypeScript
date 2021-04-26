import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img
                src='https://freevector-images.s3.amazonaws.com/uploads/vector/preview/39183/FreeVectorOfTheDay141GlobeLogoConcept.jpg'
                alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
            </div>

        </div>
    )
}

