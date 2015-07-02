Meteor.publish('myTasks', function() {
  return Tasks.find({userId: this.userId});
});