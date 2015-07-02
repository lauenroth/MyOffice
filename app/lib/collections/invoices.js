Invoices = new Mongo.Collection('invoices');


/* Schema */
ItemSchema = new SimpleSchema({

  description: {
    type: String,
    label: 'Description',
    editable: true
  },

  amount: {
    type: Number,
    label: 'Amount',
    min: 0,
    editable: true
  },

  price: {
    type: Number,
    label: 'Price',
    min: 0,
    decimal: true,
    editable: true
  }

});


InvoiceSchema = new SimpleSchema({

  client: {
    type: Object,
    label: 'Client',
    editable: true
  },

  summary: {
    type: String,
    label: 'Summary',
    editable: true
  },

  description: {
    type: String,
    label: 'Description',
    editable: true,
    optional: true,
    autoform: {
      rows: 4
    }
  },

  date: {
    type: Date,
    label: 'Date',
    editable: true
  },

  items: {
    type: [ItemSchema],
    editable: true
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

Invoices.attachSchema(InvoiceSchema);


/* Access */
var whitelist = _.filter(_.keys(InvoiceSchema), function (property) {
  return InvoiceSchema[property].editable;
});


Invoices.allow({
  update: function (userId, doc, fields, modifier) {
    if (userId && doc.userId === userId && _.difference(fields, whitelist).length === 0) {
      return true;
    }
  }
});