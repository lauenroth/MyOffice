Meteor.subscribe('myClients');

/*****************************************************************************/
/* Clients: Event Handlers */
/*****************************************************************************/
Template.Clients.events({
  'click .add-btn': function(e) {
    e.preventDefault();
    $('body')
      .addClass('show-add-form')
      .removeClass('show-update-form');
  },
  'click .close': function() {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  },
  'submit form': function() {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  }
});

/*****************************************************************************/
/* Clients: Helpers */
/*****************************************************************************/
Template.Clients.helpers({
  clients: function() {
    return Clients.find({}, {sort: {id: 1} });
  }
});

/*****************************************************************************/
/* Clients: Lifecycle Hooks */
/*****************************************************************************/
Template.Clients.created = function () {
};

Template.Clients.rendered = function () {
};

Template.Clients.destroyed = function () {
};
