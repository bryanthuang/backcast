var VideoPlayerView = Backbone.View.extend({
  render: function(model) {
    this.$el.html(this.template);
 
    var url = 'https://www.youtube.com/embed/' + model.collection.currentVideo.id;
    this.$('iframe').attr('src', url);
    let snippet = model.collection.currentVideo.attributes.snippet;
    this.$('.video-player-details h3').text(snippet.title);
    this.$('.video-player-details div').text(snippet.description);

    return this.el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
