$(window).load(function() {

  var imgCoversSrc = [];

  $('.collection-cover img').each(function (item, i) {
    imgCoversSrc[$(this).attr('data-gallery')] = $(this).attr('src');
  });

  $('.image-gallery').on('mouseenter', 'img', function(){
    galleryId = $(this).attr('data-gallery');
    coverContainer = $('#' + galleryId).find('div.collection-cover');
    coverContainer.find('img').attr('src', $(this).attr('src'));
  });

  var initLightbox = function() {
    if( $(".lightbox-switch").length && $(".lightbox-switch").css('display').toLowerCase() == 'block') {
      $('.image-gallery').on('mouseleave', function(){
        galleryId = $(this).attr('id');
        coverContainer = $(this).find('div.collection-cover');
        coverContainer.find('img').attr('src', imgCoversSrc[galleryId]);
      })

      $('.image-gallery').on('click', 'a',  function(e) {
        e.preventDefault();
        $('.lightbox-img').attr('src', $(this).attr('href'));
        $('.lightbox').attr('data-state','visible');
      });

      $('.btn-close').on('click', function(e){
        $('.lightbox').attr('data-state','hidden');
      });

    } else {
      $('.image-gallery').unbind('click');
      $('.image-gallery').unbind('mouseleave');
    }
  }

  initLightbox();

  $(window).resize(function() {
    initLightbox();
  });

});
