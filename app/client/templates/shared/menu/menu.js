Template.menu.events({

  'click .menu-overlay': function(e) {
    $('body').removeClass('show-menu');
  },

  'click a': function(e) {
    $('body').removeClass('show-menu');
  }
  
});

Template.menu.helpers({

  active: function(path) {
    var currentPath = Iron.Location.get().path;

    return currentPath === path ? 'active' : '';
    }
});


Template.menu.rendered = function() {
  
};