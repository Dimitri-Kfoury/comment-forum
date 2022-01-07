import React from "react";
import { CommentsCollection } from "../db/CommentsCollection";
import { useTracker } from 'meteor/react-meteor-data';
import { Comment } from './Comment'
import {Meteor} from 'meteor/meteor'

export const Feed = () => {

    const { comments, isLoading } = useTracker(() => {
        const noDataAvailable = { comments: [] };
        if (!Meteor.user()) {
            return noDataAvailable;
        }

        
        const handler = Meteor.subscribe('comments');

        if (!handler.ready()) {
            return { ...noDataAvailable, isLoading: true };
        }

        const comments = CommentsCollection.find(
            {

            },

            {
                sort: { createdAt: 1 },
            }
        ).fetch();

        return {comments};
    });
    return (

        <>
            <ul id="comments-list">

                
                {comments.map(comment => <Comment key={comment._id} comment={comment} />)}

            </ul>
        </>



    );


}