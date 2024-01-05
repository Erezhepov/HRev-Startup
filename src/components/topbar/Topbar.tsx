// Topbar.tsx

import React, { useState } from 'react';
import s from './Topbar.module.scss';
import toggle from '../../assets/toggle.svg';
import search from '../../assets/topbar/search-icon.svg';
import notification from '../../assets/topbar/notif-icon.svg';
import profile from '../../assets/topbar/profile-icon.png';

type TopbarProps = {
    title: string;
};

const Topbar: React.FC<TopbarProps> = ({ title }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`${s.topbar} ${isSidebarOpen ? '' : s.sidebarClosed}`}>
            <div className={s.toggle} onClick={handleToggleClick}>
                <img src={toggle} alt="toggle"/>
                <h1>{title}</h1>
            </div>

            <div className={s.icons}>
                <img src={search} alt="search" />
                <img src={notification} alt="notification" />
                <img src={profile} alt="profile" />
            </div>
        </div>
    );
};

export default Topbar;
