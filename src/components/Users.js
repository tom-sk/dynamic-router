//import libs
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import UserRow from './UserRow.js';

class Users extends Component {
        constructor(props) {
        super(props);
        this.state =  {
            users: [
                {name: 'Tom', id: 1},
                {name: 'James', id: 2},
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Users</h1>
                <p>Welcome home</p>
                { this.state.users.map((user, index) => {
                    return (
                        <UserRow key={`article-${index}`} user={user} ></UserRow>
                    )
                }) }
            </div>
        );
    }
}

export default Users
