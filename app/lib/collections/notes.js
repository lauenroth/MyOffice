Notes = new Mongo.Collection('notes');

/* Schema */

NoteSchema = new SimpleSchema({

  title: {
    type: String,
    label: 'Title',
    optional: true,
  },

  note: {
    type: String,
    label: 'Note',
    autoform: {
      rows: 4
    }
  },

  client: {
    type: Object,
    label: 'Client',
    optional: true
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


Notes.attachSchema(NoteSchema);


/* Access */
var whitelist = _.filter(_.keys(NoteSchema), function (property) {
  return NoteSchema[property].editable;
});


Notes.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && doc.userId === userId && _.difference(fields, whitelist).length === 0) {
      return true;
    }
  }
});