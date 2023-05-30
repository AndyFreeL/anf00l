import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import logo from '../../assets/logos/AFlogo.svg'
import cn from 'classnames'
import {NavLink} from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false)

    useEffect(()=>{
    },[])
    return (
        <div className={s.header}>
            <NavLink to='/' className={s.header__logo}>
                <img className={s.header__logo_img} src={logo} alt='logo'/>
                <span className={s.header__logo_text}>Andrey Merkuliev</span>
            </NavLink>
            <div onClick={()=>setOpen(!open)} className={cn(s.header__burger, s.burger, {[s.open] : open})}>
                <span className={s.burger__button}></span>
            </div>
            <div className={cn(s.menu, {[s.open] : open})}>
                <ul className={s.menu__list}>
                    <li className={s.menu__item}><NavLink onClick={()=>setOpen(false)} className={s.menu__link} to='/'>Обо мне</NavLink></li>
                    <li className={s.menu__item}><NavLink onClick={()=>setOpen(false)} className={s.menu__link} to='/works'>Работы</NavLink></li>
                    <li className={s.menu__item}><NavLink onClick={()=>setOpen(false)} className={s.menu__link} to='/skills'>Навыки</NavLink></li>
                    <li className={s.menu__item}><NavLink onClick={()=>setOpen(false)} className={s.menu__link} to='/contacts'>Контакты</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;