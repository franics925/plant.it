import React, { Component } from 'react';
import style from './User.module.css';
import UserPlants from './UserPlants/UserPlants';
import UserWishList from './UserWishList/UserWishList';

class User extends Component {
    state = {
        UserPlants: [],
    };

    render() {
        return(
            <div className={style.User}>
                User
                <div>
                    < UserPlants />
                    < UserWishList />
                </div>
            </div>
        )
    };
};

export default User;
