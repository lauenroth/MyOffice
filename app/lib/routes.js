Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction('loading');

Router.route('/', {name: 'home'});

Router.route('/clients');
Router.route('/clients/:_id', function() {
  var client = Clients.findOne({_id: this.params._id});
  this.render('client', {data: client});
});

Router.route('/tasks');
Router.route('/calendar');
Router.route('/notes');
Router.route('/invoices');

Router.route('/profile');

Router.route('/teams/join/:_id', function() {
  var team = Teams.findOne({_id: this.params._id});
  // console.log(team);
  if (team && (_.contains(team.invited, Meteor.user().emails[0].address) || _.contains(team.members, Meteor.userId() ) ) ) {
    this.render('joinTeam', {data: team});
  }
  else {
    this.render('NotFound');
  }
  
});
Router.route('/teams/:_id', function() {
  var team = Teams.findOne({_id: this.params._id});
  this.render('team', {data: team});
});