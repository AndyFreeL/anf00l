import React from 'react';
import s from './Navbar.module.scss'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import cn from 'classnames'


const Navbar = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const routes = ['/', '/works', '/skills', '/contacts']

    const handleScroll=(e)=>{
        let element=e.deltaY
        if(element>0){
        navigate(routes[routes.indexOf(pathname)+1])
        }
        if(element<0){
            navigate(routes[routes.indexOf(pathname)-1])
        }
    }

    return (
        <ul className={s.navbar} onWheel={(e)=>handleScroll(e)}>
            <li className={cn(s.navbar__item, s.item1, {[s.active]:pathname==='/'})}><NavLink to='/' className={s.navbar__link}>Обо мне</NavLink>
            </li>
            <li className={cn(s.navbar__item, s.item2, {[s.active]:pathname==='/works'})}><NavLink className={s.navbar__link}
                                                                  to='/works'>Работы</NavLink></li>
            <li className={cn(s.navbar__item, s.item3, {[s.active]:pathname==='/skills'})}><NavLink className={s.navbar__link}
                                                                  to='/skills'>Навыки</NavLink></li>
            <li className={cn(s.navbar__item, s.item4, {[s.active]:pathname==='/contacts'})}><NavLink className={s.navbar__link}
                                                                  to='/contacts'>Контакты</NavLink></li>
        </ul>
    );
};

export default Navbar;