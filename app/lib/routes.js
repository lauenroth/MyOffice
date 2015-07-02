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
  console.log(client);
  this.render('client', {data: client});
});

Router.route('/tasks');
Router.route('/calendar');
Router.route('/notes');
Router.route('/invoices');

Router.route('/profile');