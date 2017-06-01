var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoEntry = new VideoListEntryView({model: video});
    this.$el.append(videoEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
