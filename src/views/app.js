var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.currentVideo = this.videos.get(this.videos.models[0].id);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    }).render(this.videos.currentVideo);
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
