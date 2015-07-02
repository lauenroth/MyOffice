Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  "click .toggle-menu": function() {
    $('body').toggleClass('show-menu');
  },
  'click .search i': function(e) {
    var searchBox = $(e.currentTarget).parent();

    if (searchBox.hasClass('open')) {
      searchBox.removeClass('open');
    }
    else {
      searchBox.addClass('open').find('input').focus();
    }
  },
  'blur .search input': function(e) {
    $(e.currentTarget).parent().removeClass('open');
  },
  'click #modal': function() {
    $('body').removeClass('show-modal');
  },
  'click .logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
