Template.login.events({
  'submit form': function(e, test) {
    e.preventDefault();

    var name     = $('input[type="text"]').val();
    var email    = $('input[type="email"]').val();
    var password = $('input[type="password"]').val();

    var firstname = name.indexOf(' ') !== -1 ? name.substr(0, name.lastIndexOf(' ') ) : name;
    var lastname = name.substr(firstname.length);

    switch ($('form').attr('class') ) {

      case 'login':
        Meteor.loginWithPassword(email, password, function(error) {
          if (error && error.reason === "Incorrect password") {
            alert('Wrong password. Did you forget it?')
          }
          else if (error) {
            alert('You don\'t seem to have an account yet :(');  
          }
        });
        break;
      case 'register':
        var account = {
          username: email,
          email: email,
          password: password,
          profile: {
            name: name,
            firstname: firstname,
            lastname: lastname
          }
        };
        Accounts.createUser(account, function(error) {
          if (error) {
            console.log(error);
            alert('Account could not be created!     ' + error.reason);
          }
          else {
            alert('Successfully created account :)');
          }
        });
        break;
      default: 
        Accounts.forgotPassword({email: email}, function(error) {
          if (error) {
            alert(error.reason);
          }
          else {
            alert('We\'ve just sent you an email for resetting your password.');
          }
        });
        break;
    }

    
    
  },

  'click #no-account': function(e) {
    e.preventDefault();

    $('#login').removeClass().addClass('register');
    $('input[type="text"]').prop('disabled', false);
    $('input[type="password"]').prop('disabled', false).prop('placeholder', 'Choose a password');
    $('#forgot-password').hide();
    $('#no-account').hide();
    $('#back-to-login').show();
    $('button').html('Create account');
  },

  'click #back-to-login': function(e) {
    e.preventDefault();

    $('#login').removeClass().addClass('login');
    $('input[type="text"]').prop('disabled', true);
    $('input[type="password"]').prop('disabled', false).prop('placeholder', 'Your password');
    $('#forgot-password').show();
    $('#no-account').show();
    $('#back-to-login').hide();
    $('button').html('Sign in');
  },

  'click #forgot-password': function(e) {
    e.preventDefault();

    $('#login').removeClass();
    $('input[type="text"]').prop('disabled', true);
    $('input[type="password"]').prop('disabled', true);
    $('#forgot-password').hide();
    $('#no-account').show();
    $('#back-to-login').show();
    $('button').html('Send reset link');
  }
});