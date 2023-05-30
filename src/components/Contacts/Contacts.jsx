import React from 'react';
import s from './Contacts.module.scss'
import background from '../../assets/images/contactsbg.jpg'
import telegram from '../../assets/icons/contacts/telegram.svg'
import mail from '../../assets/icons/contacts/mail.svg'
import git from '../../assets/icons/contacts/github.svg'
import linkedin from '../../assets/icons/contacts/linkedin.svg'
import AnimatedLayout from "../AnimatedLayout";

const Contacts = () => {
    return (
        <AnimatedLayout>
            <div className={s.contacts}>
                <div className={s.contacts__background}><img src={background} alt='background'/></div>
                <div className={s.contacts__items}>
                    <ul className={s.contacts__list}>
                        <li className={s.contacts__item}>
                            <a className={s.contacts__link} title='Ссылка на Github' rel="noreferrer" target="_blank"
                               href='https://github.com/AndyFreeL'>
                                <img src={git} alt='git'/>
                            </a>
                        </li>
                        <li className={s.contacts__item}>
                            <a className={s.contacts__link} title='Ссылка на Email' href='mailto:zer13o@mail.ru'>
                                <img src={mail} alt='mail'/>
                            </a>
                        </li>
                        <li className={s.contacts__item}>
                            <a className={s.contacts__link} title='Ссылка на LinkedIn' rel="noreferrer" target="_blank"
                               href='https://www.linkedin.com/in/andeefreel/'>
                                <img src={linkedin} alt='linkedin'/>
                            </a>
                        </li>
                        <li className={s.contacts__item}>
                            <a className={s.contacts__link} title='Ссылка на Telegram' rel="noreferrer" target="_blank"
                               href='https://t.me/AndyFree00'>
                                <img src={telegram} alt='telegram'/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </AnimatedLayout>
    );
};

export default Contacts;