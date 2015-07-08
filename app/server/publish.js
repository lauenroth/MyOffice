
// make user profiles public
Meteor.publish('userProfiles', function() {

  // todo: only for users of the same teams as the current user
  return Meteor.users.find({}, {fields: {profile: 1}});
});