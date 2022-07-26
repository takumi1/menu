import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    const checkActiveLink = ({isActive}) =>
        (isActive ? "menu__item menu__item-active" : "menu__item")
    return (
        <div>
            <div className='menu'>
                <NavLink className={checkActiveLink} to='/'>ГЛАВНАЯ</NavLink>
                <NavLink className={checkActiveLink} to='/drift'>ДРИФТ-ТАКСИ</NavLink>
                <NavLink className={checkActiveLink} to='/timeattack'>TIME ATTACK</NavLink>
                <NavLink className={checkActiveLink} to='/forza'>FORZA KARTING</NavLink>
            </div>
        </div>
    );
};

export default Menu;