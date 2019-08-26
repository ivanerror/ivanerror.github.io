var userFeed = new Instafeed({
    get: 'user',
    userId: '8502878627',
    clientId: '99960c048f1342bebea364054e32123f',
    accessToken: '8502878627.99960c0.2d71e5718337477287b165280ed1064f',
    resolution: 'standard_resolution',
    orientation: 'square',
    template: '<div class="col insta-gallery"> <a href="{{link}}" target="_blank" id="{{id}}"><div class="square" style="background-image: url({{image}})"></div></a></div>',
    limit: 3,
    links: false,
    orientation: 'square'
  });
  userFeed.run();