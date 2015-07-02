Tasks = new Mongo.Collection('tasks');


/* Schema */ 
TaskSchema = new SimpleSchema({

  summary: {
    type: String,
    label: 'Summary'
  },

  description: {
    type: String,
    label: 'Description',
    optional: true,
    autoform: {
      rows: 6
    }
  },

  client: {
    type: Object,
    label: 'Client',
    optional: true
  },

  dueDate: {
    type: Date,
    label: 'Due date',
    optional: true
  },

  done: {
    type: Boolean,
    label: 'Done'
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },
  
  userId: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    }
  }

});


Tasks.attachSchema(TaskSchema);


/* Access */
var whitelist = _.filter(_.keys(TaskSchema), function (property) {
  return TaskSchema[property].editable;
});


Tasks.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && doc.userId === userId && _.difference(fields, whitelist).length === 0) {
      return true;
    }
  }
});