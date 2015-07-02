Meteor.subscribe('myNotes');

/*****************************************************************************/
/* Notes: Event Handlers */
/*****************************************************************************/
Template.Notes.events({
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
  'submit form': function(e) {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  },
  'click .notes .card': function() {
    Session.set('editNote', this);
    $('body')
      .removeClass('show-add-form')
      .addClass('show-update-form');
  }
});

/*****************************************************************************/
/* Notes: Helpers */
/*****************************************************************************/
Template.Notes.helpers({
  notes: function() {
    return Notes.find({}, {sort: {createdAt: -1} });
  },
  editNote: function() {
    return Session.get('editNote');
  }
});

/*****************************************************************************/
/* Notes: Lifecycle Hooks */
/*****************************************************************************/
Template.Notes.created = function () {
};

Template.Notes.rendered = function () {
};

Template.Notes.destroyed = function () {
};
