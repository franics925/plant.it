import React from 'react';
import style from './UserPlants.module.css';

const UserPlants = (props) => (
    <div className={style.UserPlants}>
        <h3>Your Plants:</h3>
        <ul>
            <li>Ficcus</li>
            <li>Fern</li>
            <li>Rubber Tree</li>
            <li>Sider Plant</li>
        </ul>
    </div>
)

export default UserPlants;