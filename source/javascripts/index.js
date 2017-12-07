var bespoke = require('bespoke'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  hash = require('bespoke-hash'),
  nebula = require('bespoke-theme-nebula');

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  if (document.getElementById('presentation')) {
    var deck = bespoke.from('#presentation', [nebula(), keys(), touch(), hash()]);
  }
});

if (__DEVELOPMENT__) {
  console.log('Running in development mode!');
}

$(function() {
  $('ul a')
    .click(function(e) {
      var link = $(this);

      var item = link.parent('li');

      if (item.hasClass('active')) {
        item
          .removeClass('active')
          .children('a')
          .removeClass('active');
      } else {
        item
          .addClass('active')
          .children('a')
          .addClass('active');
      }

      if (item.children('ul').length > 0) {
        var href = link.attr('href');
        link.attr('href', '#');
        setTimeout(function() {
          link.attr('href', href);
        }, 300);
        e.preventDefault();
      }
    })
    .each(function() {
      var link = $(this);
      if (link.get(0).href === location.href) {
        link
          .addClass('active')
          .parents('li')
          .addClass('active');
        return false;
      }
    });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          250
        );
        return false;
      }
    }
  });
});

$('.first-section').height($('.section-1').outerHeight());

// Cards
// $(document).ready(function() {
//   $('.card--click').on('click', function() {
//     $(this)
//       .find('.card-content')
//       .slideToggle();
//     $(this)
//       .find('.fa')
//       .toggleClass('fa-caret-down fa-caret-up');
//   });
// });

// Cards animation
$(document).ready(function() {
  $(window).scroll(function() {
    var position = $(window).scrollTop();
    console.log(position);

    if (position >= 5) {
      $('#1')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#1')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
      setTimeout(function() {
        $('#1')
          .find('.animate-second')
          .addClass('is-animated');
      }, 700);
      setTimeout(function() {
        $('#1')
          .find('.animate-text-second')
          .addClass('is-animated');
      }, 1000);
    }

    if (position >= 735) {
      $('#2')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#2')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
      setTimeout(function() {
        $('#2')
          .find('.animate-second')
          .addClass('is-animated');
      }, 700);
      setTimeout(function() {
        $('#2')
          .find('.animate-text-second')
          .addClass('is-animated');
      }, 1000);
    }

    if (position >= 1480) {
      $('#3')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#3')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
      setTimeout(function() {
        $('#3')
          .find('.animate-second')
          .addClass('is-animated');
      }, 700);
      setTimeout(function() {
        $('#3')
          .find('.animate-text-second')
          .addClass('is-animated');
      }, 1000);
    }

    if (position >= 2265) {
      $('#4')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#4')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
      setTimeout(function() {
        $('#4')
          .find('.animate-second')
          .addClass('is-animated');
      }, 700);
      setTimeout(function() {
        $('#4')
          .find('.animate-text-second')
          .addClass('is-animated');
      }, 1000);
    }

    if (position >= 3035) {
      $('#5')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#5')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
      setTimeout(function() {
        $('#5')
          .find('.animate-second')
          .addClass('is-animated');
      }, 700);
      setTimeout(function() {
        $('#5')
          .find('.animate-text-second')
          .addClass('is-animated');
      }, 1000);
    }

    if (position >= 3855) {
      $('#6')
        .find('.animate-first')
        .addClass('is-animated');
      setTimeout(function() {
        $('#6')
          .find('.animate-text')
          .addClass('is-animated');
      }, 300);
    }
  });
});
