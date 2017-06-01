var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    let snippet = this.model.attributes.snippet;
    this.$('.video-list-entry-title').text(snippet.title);
    this.$('.video-list-entry-detail').text(snippet.description);
    this.$('.media-object').attr('src', snippet.thumbnails.default.url);

    return this.el;
  },

  events: { 'click .video-list-entry-title': 'handleClick'},
  
  handleClick: function() {
    this.model.select();
  },
    
  template: templateURL('src/templates/videoListEntry.html')

});
