/*****************************************************************************/
/* Teams: Event Handlers */
/*****************************************************************************/
Template.team.events({
  'click .delete': function() {
    var confirmed = confirm('Do you really wanna delete the team ' + this.name + '?');
    if (confirmed) {
      Teams.remove({_id: this._id});
      Router.go('/');
    }
  },
  'submit #invite': function(e) {
    e.preventDefault();
    var emailField = $('#invite input[type=email]');
    var email = emailField.val();

    // ToDo: check if correct email address
    if (email.length > 0) {

      // add email address to list of invited users
      Teams.update({_id: this._id}, {$addToSet: {invited: email} });

      // ToDo: send email to invited user

      emailField.val('');
      notification('The user has been invited');
    }
  }
});

/*****************************************************************************/
/* Teams: Helpers */
/*****************************************************************************/
Template.team.helpers({
  isAdmin: function() {
    return ( this.admin === Meteor.userId() );
  },
  isMember: function() {
    return _.contains(this.members, Meteor.userId() );
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
