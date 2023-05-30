import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";

import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/works' element={<Works/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/' element={<About/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;