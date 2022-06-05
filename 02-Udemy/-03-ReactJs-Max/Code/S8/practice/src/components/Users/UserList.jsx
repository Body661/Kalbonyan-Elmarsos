import React from "react";
import classes from './styles/UserList.module.css'

import Card from "../UI/Card";

const UserList = (props) => {

    const returUser = props.users.map((user) => {
        return ( 
            <li key={user.id}>{user.name} : {user.age} years old</li>
        )
    })

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.length > 0 ? returUser : <span>No Users Found</span>}
            </ul>
        </Card>
    )
}

export default UserList