Teams = new Mongo.Collection('teams');

/* Schema */ 
TeamSchema = new SimpleSchema({

  name: {
    type: String,
    label: 'Name'
  },

  members: {
    type: [String],
    label: 'Members'
  },

  invited: {
    type: [String],
    label: 'Email addresses of people who are invited to join the team',
    optional: true
  },

  requested: {
    type: [String],
    label: 'User Ids of people who requested to join the team',
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