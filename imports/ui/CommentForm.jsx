import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import '../api/CommentMethods'


export const CommentForm = () => {
    const [comment, setComment] = useState("");
    const user = Meteor.user()
    const email = user.emails ? user.emails[0].address : 'unknown'

    const handleSubmit = e => {
        e.preventDefault();
        if (!comment) return;

        try {
            Meteor.call('comments.insert',{comment,email})
        } finally {
            setComment("");
            document.querySelector("#comment-input").value = ''
        }
    };


    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                id="comment-input"
                type="text"
                placeholder="Say something!"
                onChange={({ target }) => setComment(target.value)}
            />

            <button type="submit">Comment</button>
        </form>
    );
};