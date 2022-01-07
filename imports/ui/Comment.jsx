import React from 'react';

export const Comment = ({ comment }) => {


    return (

        <li>

            {`${comment.email}: ${comment.comment}`}

        </li>

    )

};