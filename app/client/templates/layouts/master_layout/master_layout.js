Tracker.autorun(function () {
  Meteor.subscribe('userProfiles');
});

Meteor.subscribe('myTeams');


Template.MasterLayout.helpers({
  myTeams: function() {
    return Teams.find({members: Meteor.userId()}, {sort: {name: 1}});
  },
  currentTeam: function() {
    var user = Meteor.user();
    if (user.profile.defaultTeam) {
      return user.profile.defaultTeam;
    }
  }
});

Template.MasterLayout.events({
  'click .toggle-menu': function() {
    $('body').toggleClass('show-menu');
  },
  'click .change-team': function() {
    $('header.main .teams').slideToggle('fast');
  },
  'click .teams a': function() {
    $('header.main .teams').hide();
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
