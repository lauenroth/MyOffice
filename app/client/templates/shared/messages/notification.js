
notification = function(message, timeout) {

  if (timeout === undefined) {
    timeout = 5000;
  }

  var notifications = $('#notifications');

  if (!notifications.length) {
    notifications = $('<div id="notifications"></div>')
    $('body').append(notifications);
  }
  
  var notification = $('<div/>')
    .addClass('notification')
    .text(message);
  
  notifications.append(notification);
  notification.fadeIn();

  if (timeout) {
    setTimeout(function() {
      notification.fadeOut();
    }, timeout);
  }
  

};