import React from 'react';
import s from './Skills.module.scss'

import skillsImg from "../../skillsImg";
import AnimatedLayout from "../AnimatedLayout";

let imageArr = []

skillsImg.map(img => imageArr.push(
    <div key={img} className={s.skills__item}>
        <img src={img} alt="img#"/>
    </div>
))

const Skills = () => {
    return (
        <AnimatedLayout>
            <div className={s.wrapper}>
                <div className={s.skills}>
                    {imageArr}
                </div>
            </div>
        </AnimatedLayout>
    );
};


export default Skills;