Meteor.publish('myTeams', function() {
  return Teams.find({members: this.userId});
});
Meteor.publish('myInvitedTeams', function() {
  
  var user = Meteor.users.findOne(this.userId);
  var teams = Teams.find({invited: user.emails[0].address});
  return teams;
})