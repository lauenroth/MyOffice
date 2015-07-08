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