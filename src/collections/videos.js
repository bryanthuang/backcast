var Videos = Backbone.Collection.extend({
  
  model: Video,

  currentVideo: '',

  modelId: function(model) {
    return model.id;
  },
  
  initialize: function() {
    this.on('select', function(event) {
      this.currentVideo = this.get(event.id);
      new VideoPlayerView({
        collection: this,
        el: $('.player')
      }).render(event);
    }, this);
  }
});
