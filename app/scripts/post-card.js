'use strict';
// var lib = require('./components/components');
(function(scope){
  var polymer,
      headerImgSrc = 'http://lorempixel.com/400/300';

  polymer = scope.Polymer('post-card', {
    image: 'url(' + headerImgSrc + ');',
    day: '4',
    month: 'May',
    year: '2015',
    toPost: 'link',
    postTitle: 'CSS3 Animation',
    postPreview: 'bla bla bla'
  });

    return polymer;
})(window);
