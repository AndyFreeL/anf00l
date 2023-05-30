import React from 'react';
import s from './Works.module.scss'
import Work from "./Work/Work";
import works from '../../works'
import AnimatedLayout from "../AnimatedLayout";

const Works = () => {
    return (
        <AnimatedLayout>
            <div className={s.wrapper}>
                <div className={s.works}>
                    {works.map(w => <Work key={w.id} description={w.description} img={w.img} link={w.link}/>)}
                </div>
            </div>
        </AnimatedLayout>
    );
};

export default Works;