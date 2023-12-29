import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <nav className={styles.nav}>

            <div className={styles.logo}>
               LOGO
            </div>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/main" className={styles.link}>
                        Главная
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/recommendation" className={styles.link}>
                        Рекомендации
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/chat" className={styles.link}>
                        Сообщения
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/friends" className={styles.link}>
                        Друзья
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/statistics" className={styles.link}>
                        Статистика
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/certification" className={styles.link}>
                        Сертификация
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/sfia" className={styles.link}>
                        SFIA
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/settings" className={styles.link}>
                        Настройки
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/help" className={styles.link}>
                        Помощь
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;