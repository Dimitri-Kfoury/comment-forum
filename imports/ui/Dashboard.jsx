import React from "react";
import {Meteor} from 'meteor/meteor'
import { CommentForm } from "./CommentForm";
import { Feed } from "./Feed";
import { LoginForm } from "./LoginForm";


export const Dashboard = () => {

const handleClick = (e) => {


Meteor.logout()

}

return (<>

<CommentForm ></CommentForm>
<Feed></Feed>

<button onClick={handleClick}>Logout</button>


</>)


}