import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';

import logo from './../../assets/navbar/logo.svg';
import homeIcon from './../../assets/navbar/home-icon.svg';
import recIcon from '../../assets/navbar/like-icon.svg';
import chatIcon from '../../assets/navbar/chat-icon.svg';
import friendsIcon from '../../assets/navbar/friends-icon.svg';
import statIcon from '../../assets/navbar/statistics-icon.svg';
import certIcon from '../../assets/navbar/certification-icon.svg';
import sfiaIcon from '../../assets/navbar/sfia-icon.svg';
import settingsIcon from '../../assets/navbar/settings-icon.svg';
import helpIcon from '../../assets/navbar/help-icon.svg';


const Sidebar = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);

    const handleMouseOver = (index: number) => {
        setActiveLink(index);
    };

    const handleMouseOut = () => {
        setActiveLink(null);
    };


    const isLinkActive = (index: number) => (activeLink === index ? s.hovered : '');

    const menuItems = [
        { id: 1, label: 'Главная', link: '/', icon: homeIcon },
        { id: 2, label: 'Рекомендации', link: '/recommendations', icon: recIcon },
        { id: 3, label: 'Сообщения', link: '/messages', icon: chatIcon },
        { id: 4, label: 'Друзья', link: '/friends', icon: friendsIcon },
        { id: 5, label: 'Статистика', link: '/statistics', icon: statIcon },
        { id: 6, label: 'Сертификация', link: '/certification', icon: certIcon },
        { id: 7, label: 'SFIA', link: '/sfia' , icon: sfiaIcon},
        { id: 8, label: 'Настройки', link: '/settings' , icon: settingsIcon},
        { id: 9, label: 'Помощь', link: '/help' , icon: helpIcon},
    ];

    return (
        <nav className={s.nav}>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>

            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`${isLinkActive(item.id)}`}
                        onMouseOver={() => handleMouseOver(item.id)}
                        onMouseOut={handleMouseOut}
                    >
                        <NavLink to={item.link} className={s.link}>
                            <img src={item.icon} alt={item.label.toLowerCase()} className={s.icon} />
                            <span className={s.title}>{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
