import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div>
                <a href='/' >News</a>
            </div>
            <div>
                <a href='/' >Music</a>
            </div>
            <div>
                <a href='/' >Settings</a>
            </div>
        </div>
    )
}
export default Navbar;
