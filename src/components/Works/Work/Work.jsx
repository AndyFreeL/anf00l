import React from 'react';
import s from './Work.module.scss'

const Work = ({description,img, link}) => {
    return (
        <div className={s.work}>
            <img className={s.work__img} src={img} alt="#"/>
            <div className={s.work__description}>
                <div className={s.work__title}>{description}</div>
                <a className={s.work__button} rel="noreferrer" target="_blank" href={link}>Подробнее</a>
            </div>
        </div>
    );
};

export default Work;