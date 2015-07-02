/*****************************************************************************/
/* Calendar: Event Handlers */
/*****************************************************************************/
Template.Calendar.events({
  'click .add-btn': function(e) {
    e.preventDefault();
    $('.add-form').addClass('show');
  },
  'click .add-form': function(e) {
    $('.add-form').removeClass('show');
  },
  'click .add-form form': function(e) {
    e.stopPropagation();
  },
  'submit form': function(e) {
    $('.add-form').removeClass('show');
  }
});

/*****************************************************************************/
/* Calendar: Helpers */
/*****************************************************************************/
Template.Calendar.helpers({
});

/*****************************************************************************/
/* Calendar: Lifecycle Hooks */
/*****************************************************************************/
Template.Calendar.created = function () {
};

Template.Calendar.rendered = function () {
};

Template.Calendar.destroyed = function () {
};
