var SearchView = Backbone.View.extend({

  events: { 'submit': 'handleSubmit'},

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.collection.search(this.$('input').val());
  },


  template: templateURL('src/templates/search.html')

});
