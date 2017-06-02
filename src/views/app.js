var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.on('sync', function() {
      this.videos.currentVideo = this.videos.models[0];
      this.render();
    }, this);
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
    
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
