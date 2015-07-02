Meteor.publish('myNotes', function() {
  return Notes.find({userId: this.userId});
});