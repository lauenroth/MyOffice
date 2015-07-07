Meteor.subscribe('myInvitedTeams');

Template.joinTeam.events({
  'click button.join': function() {
    var email = Meteor.user().emails[0].address;
    var userId = Meteor.userId();
    Teams.update({_id: this._id}, {$pull: {invited: email}, $push: {members: userId} });
  }
});
