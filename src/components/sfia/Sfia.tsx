// Sfia.tsx

import React from 'react';
import s from './Sfia.module.css';
import Topbar from '../topbar/Topbar';
import sfiaImage from '../../assets/sfia/SFIA image.png';

const Sfia = () => {
    return (
        <div className={s.sfia}>
            <Topbar title="SFIA" />
            <div className={s.sfiaContent}>
                <div className={s.textContent}>
                    <h2>SFIA Оценка навыков</h2>
                    <p>
                        Узнайте свой уровень квалификации и оцените свою рыночную стоимость, чтобы стать востребованным
                        специалистом. Мы предлагаем вам уникальную возможность получить персональные рекомендации для
                        развития вашей карьеры и достижения новых высот.
                        <br/>
                        <br/>
                        С помощью нашей интуитивно понятной системы оценки вы получите точное представление о вашем
                        интеллектуальном капитале работника. Наш алгоритм анализирует ваши навыки, проекты, сертификаты
                        и образование, чтобы определить ваши сильные стороны и области для роста.
                        <br/>
                        <br/>
                        Присоединяйтесь к нам сегодня и придайте своей карьере новый импульс! Вместе мы достигнем новых
                        высот в мире информационных технологий.
                    </p>
                    <button className={`primary`}>Начать тестирование</button>
                </div>
                <div className={s.imageContent}>
                    <img src={sfiaImage} alt='sfia' />
                </div>
            </div>
        </div>
    );
};

export default Sfia;
