
Template.addTeam.events({
  'submit form': function(e) {
    e.preventDefault();
    var name = $('#name').val();

    if (name.length > 0) {
      var team = {
        name: name,
        admin: Meteor.userId(),
        members: []
      };
      team.members.push(Meteor.userId());

      var team = Teams.insert(team);

      // forward to team page
      Router.go('/teams/' +  team);
    }
  }
});