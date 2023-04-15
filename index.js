// dialog
$(document).ready(function() {
  $('map').imageMapResize();
  $('area').on('click', function(e) {
    e.preventDefault();
    var content = $(this).attr('title');
    var modalHtml = '<div class="modal-overlay modal-open">' +
                    '<div class="modal-content">' +
                    '<img src="./img/modal/' + content + '.jpg"/>' +
                    '<p class="title">' + content + '</p>' +
                    '<span class="modal-close"></span>' +
                    '</div></div>';
    $('body').append(modalHtml);
    $('.modal-close').on('click', function() {
      $('.modal-overlay').remove();
    });
    $('.modal-overlay').on('click', function(e) {
      if (!$(e.target).closest('.modal-content').length) {
        $('.modal-overlay').remove();
      }
    });
  });
});

// Scroll to top
$(document).ready(function() {
  $('.scroll-top').hide();
});
$(window).scroll(function() {
  if ($(this).scrollTop() >= 1000) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});
$('.scroll-top').click(function() {
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

// accordion
$(document).ready(function() {
  $(".accordion").click(function() {
    $(this).next(".panel").slideToggle("fast");
  });
});
