import React from 'react';
import s from './About.module.scss'
import ava from '../../assets/logos/ava.png'
import AnimatedLayout from "../AnimatedLayout";

const About = () => {
    return (
        <AnimatedLayout>
            <div className={s.about}>
                <div className={s.about__title}>
                    <div className={s.about__avatar}>
                        <img src={ava} alt='#'/>
                    </div>
                    <div className={s.about__name}>
                        <h1>Андрей Меркульев</h1>
                        <h2>Веб-разработчик</h2>
                    </div>
                </div>
                <div className={s.about__text}>
                    <p>
                        Приветствую! Меня зовут Андрей — я веб-разработчик. Я занимаюсь разработкой
                        сайтов с нуля. Выполняю верстку и программирование сайтов, клиент-серверных приложений.
                    </p>
                    <p>
                        Изучать front-end разработку начал около 2 лет назад, за это время освоил
                        HTML, CSS, JS (ES5 и ES6), TS. Развиваюсь как fullstack. Работаю с базами, пишу серверную
                        логику.
                        Так же есть опыт работы с Vue, Angular. Технологии, в целом, не принцыпиальны.
                    </p>
                    <p>Мой стек:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS (Sass)</li>
                        <li>JavaScript (ES5 и ES6)</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>MobX</li>
                        <li>PostgresSql</li>
                        <li>Mongo</li>
                        <li>Node.js(Express)</li>
                        <li>Next.js</li>
                    </ul>
                </div>
            </div>
        </AnimatedLayout>
    );
};

export default About;