/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.Profile.events({
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
  'profile': function() {
    var profile = Meteor.user().profile;
    profile.email = Meteor.user().emails[0].address;
    return profile;
  }
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.created = function () {
};

Template.Profile.rendered = function () {
};

Template.Profile.destroyed = function () {
};
