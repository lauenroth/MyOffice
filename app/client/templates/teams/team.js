/*****************************************************************************/
/* Teams: Event Handlers */
/*****************************************************************************/
Template.team.events({
});

/*****************************************************************************/
/* Teams: Helpers */
/*****************************************************************************/
Template.team.helpers({
  isAdmin: function(admin) {
    return ( admin === Meteor.userId() );
  },
  isMember: function(members) {
    return _.contains(members, Meteor.userId() );
  },
  joinLink: function() {
    return window.location.origin + '/teams/join/' + this._id;
  }
});

/*****************************************************************************/
/* Teams: Lifecycle Hooks */
/*****************************************************************************/
Template.team.created = function () {
};

Template.team.rendered = function () {
};

Template.team.destroyed = function () {
};
