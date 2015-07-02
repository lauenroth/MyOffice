Meteor.subscribe('myTasks');

/*****************************************************************************/
/* Tasks: Event Handlers */
/*****************************************************************************/
Template.Tasks.events({
  'click .add-btn': function(e) {
    e.preventDefault();
    $('body')
      .addClass('show-add-form')
      .removeClass('show-update-form');
  },
  'click .close': function() {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  },
  'submit #new-task': function(e) {
    e.preventDefault();
    var newTask = $('#new-task input');
    var summary = newTask.val();
    newTask.val('');
    Tasks.insert({summary: summary, done: false});
  },
  'submit #insertTaskForm': function() {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  },
  'submit #updateTaskForm': function() {
    $('body')
      .removeClass('show-add-form')
      .removeClass('show-update-form');
  },
  'click .tasks li': function() {
    Session.set('editTask', this);
    $('body')
      .removeClass('show-add-form')
      .addClass('show-update-form');
  },
  'click .tasks .done': function(e) {
    e.stopPropagation();
    Tasks.update({_id: this._id}, {$set: {done : !this.done} });
  },
  'click .delete-task': function() {
    
    var task = Session.get('editTask')
    if (window.confirm('Are you sure you wanna delete the task \'' + task.summary + '\'?') ) {
      Tasks.remove({_id: task._id});
      $('body')
        .removeClass('show-add-form')
        .removeClass('show-update-form');
    }
  }
});

/*****************************************************************************/
/* Tasks: Helpers */
/*****************************************************************************/
Template.Tasks.helpers({
  dueDateTasks: function() {
    return Tasks.find({done: false, dueDate: {$exists: true}}, {sort: {dueDate: 1} });
  },
  otherTasks: function() {
    return Tasks.find({done: false, dueDate: {$exists: false}}, {sort: {createdAt: -1} });
  },
  doneTasks: function() {
    return Tasks.find({done: true});
  },
  formatDate: function(date) {
    if (date) {
      date = moment(date);
      return date.calendar();
    }
    return '';
  },
  numCompletedTasks: function() {
    return Tasks.find({done: true}).count();
  },
  editTask: function() {
    return Session.get('editTask');
  }
});

/*****************************************************************************/
/* Tasks: Lifecycle Hooks */
/*****************************************************************************/
Template.Tasks.created = function () {
};

Template.Tasks.rendered = function () {
};

Template.Tasks.destroyed = function () {
};
