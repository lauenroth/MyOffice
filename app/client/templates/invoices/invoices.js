/*****************************************************************************/
/* Invoices: Event Handlers */
/*****************************************************************************/
Template.Invoices.events({
  'click .add-btn': function(e) {
    e.preventDefault();
    $('body').addClass('show-modal');
  },
  'click .close': function() {
    $('body').removeClass('show-modal');
  },
  'submit form': function(e) {
    $('body').removeClass('show-modal');
  }
});

/*****************************************************************************/
/* Invoices: Helpers */
/*****************************************************************************/
Template.Invoices.helpers({
});

/*****************************************************************************/
/* Invoices: Lifecycle Hooks */
/*****************************************************************************/
Template.Invoices.created = function () {
};

Template.Invoices.rendered = function () {
};

Template.Invoices.destroyed = function () {
};
