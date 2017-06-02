var VideoPlayerView = Backbone.View.extend({
  render: function(model) {
    this.$el.html(this.template);

    let fakeVideo = { 
      id: 'dQw4w9WgXcQ', 
      attributes: {
        snippet: {
          title: 'SUCKAAAAAA',
          description: 'Please learn how to youtube valid searches and try again. Thanks.'
        }
      }};

    model ? model = model : model = fakeVideo;

    var url = 'https://www.youtube.com/embed/' + model.id;
    this.$('iframe').attr('src', url);
    let snippet = model.attributes.snippet;
    this.$('.video-player-details h3').text(snippet.title);
    this.$('.video-player-details div').text(snippet.description);

    return this.el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
