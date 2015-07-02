Teams = new Mongo.Collection('teams');

/* Schema */ 
TeamSchema = new SimpleSchema({

  name: {
    type: String,
    label: 'Name'
  },

  description: {
    type: String,
    label: 'Description',
    optional: true,
    autoform: {
      rows: 6
    }
  },

  members: {
    type: Object,
    label: 'Members',
    optional: true
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },
  
  admin: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    }
  }

});

Teams.attachSchema(TeamSchema);

/* Access */
var whitelist = _.filter(_.keys(TeamSchema), function (property) {
  return TeamSchema[property].editable;
});


Teams.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && doc.userId === userId && _.difference(fields, whitelist).length === 0) {
      return true;
    }
  }
});