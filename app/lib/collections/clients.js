Clients = new Mongo.Collection('clients');



/* Schema */
SimpleSchema.extendOptions({
  editable: Match.Optional(Boolean)
});

ClientSchema = new SimpleSchema({

  id: {
    type: Number,
    label: 'Client ID',
    editable: true
  },
  company: {
    type: String,
    label: 'Company name',
    editable: true,
    optional: true
  },

  firstName: {
    type: String,
    label: 'First name',
    editable: true,
    optional: true,
    autoform: {
      'class': 'firstname'
    }
  },

  lastName: {
    type: String,
    label: 'Last name',
    editable: true,
    autoform: {
      'class': 'lastname'
    }
  },

  address: {
    type: String,
    label: 'Address',
    editable: true,
    optional: true,
    autoform: {
      rows: 4
    }
  },

  phone: {
    type: String,
    label: 'Phone',
    editable: true,
    optional: true
  },

  fax: {
    type: String,
    label: 'Fax',
    editable: true,
    optional: true
  },

  email: {
    type: String,
    label: 'Email',
    editable: true,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },

  website: {
    type: String,
    label: 'Website',
    editable: true,
    optional: true,
    regEx: SimpleSchema.RegEx.Url
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

Clients.attachSchema(ClientSchema);


/* Access */
var whitelist = _.filter(_.keys(ClientSchema), function (property) {
  return ClientSchema[property].editable;
});


Clients.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && doc.userId === userId && _.difference(fields, whitelist).length === 0) {
      return true;
    }
  }
});