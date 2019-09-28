import React, { Component } from 'react';
import style from './User.module.css';

class User extends Component {
    state = {
        UserPlants: [],
    };

    render() {
        return(
            <div className={style.User}>
                User
            </div>
        )
    };
};

export default User;
