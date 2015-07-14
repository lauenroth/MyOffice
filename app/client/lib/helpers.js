// Timestamp to date
Template.registerHelper('timestampToDate', function(timestamp) {
  return moment(timestamp).calendar();
});


// Username from ID
Template.registerHelper('usernameFromId', function(userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }
  return user.profile.name;
});


// Team name from ID
Template.registerHelper('teamnameFromId', function(teamId) {
  var team = Teams.findOne({_id: teamId});
  if (typeof team === "undefined") {
    return '[no team yet]';
  }
  return team.name;
});