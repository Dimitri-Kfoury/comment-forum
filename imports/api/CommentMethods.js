import { check } from 'meteor/check';
import {CommentsCollection} from '../db/CommentsCollection'
import { Meteor } from 'meteor/meteor';

 
Meteor.methods({
  'comments.insert'({comment,email}) {
    check(comment, String);
    check(email,String)

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    CommentsCollection.insert({
      comment,
      createdAt: new Date,
      userId: this.userId,
      email,
    })
  },

  'comment.remove'(commentId) {
    check(commentId, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    CommentsCollection.remove(commentId);
  }
});