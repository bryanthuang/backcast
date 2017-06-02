var VideoListView = Backbone.View.extend({

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
