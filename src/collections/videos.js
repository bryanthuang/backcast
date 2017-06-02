var Videos = Backbone.Collection.extend({
  
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  parse: function(response) {
    return response.items;
  },

  modelId: function(model) {
    return model.id;
  },
  
  initialize: function() {
    this.on('select', function(model) {
      new VideoPlayerView({
        collection: this,
        el: $('.player')
      }).render(this.get(model));
    }, this);

    this.search();
  },

  search: function(searchString = '') {
    this.fetch({ 
      success: function(collection, response) {
        if (response.items.length === 0) {
          console.log('DO YOU EVEN YOUTUBE?');
        } 
      },

      data: {
        part: 'snippet',
        q: searchString,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY
      },

      reset: true
    });
  }
});
