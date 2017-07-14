import React from 'react';
import {Link} from 'react-router-dom';

const UserRow = (props) => {
    return (
        <div>
            <span>Name:{props.user.name} </span>
            <span>id:{props.user.id}</span>
            <Link to={`/articles/${props.user.id}/edit`} className="btn btn-primary btn-sm">
                <i className="glyphicon glyphicon-pencil" /> Edit
            </Link>
        </div>

    )
};

export default UserRow;
