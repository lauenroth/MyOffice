Meteor.publish('myClients', function() {
  return Clients.find({userId: this.userId});
});