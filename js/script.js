$(document).ready(function(){
  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
  });
  $(".typed-name").typed({
    strings: ["<h2 class='name'>Hi, I'm Dhaval</h2>"],
    typeSpeed: 15,
    startDelay: 1500,
    onStringTyped: function(){
      $(".typed-occupation").css('display','inline-block');
      $(".typed-name").css('display','block');
      $(".typed-cursor").addClass('hidden');
      $(".typed-occupation").typed({
        strings: ["^500<h2 class='occupation'>I live off code, ^350music ^1000 and pizza</h2>"],
        typeSpeed: 15,
        startDelay: 0,
        onStringTyped: function(){
          setTimeout(function() {
            $('.avatar').removeClass('hidden');
            $(".typed-cursor").addClass('hidden');
            $('.info').css('margin-top','-75px');
          },1000);
          setTimeout(function() {
            $('.contact').removeClass('hidden');
            $('.info').css('margin-top','0px');
          },2000);
        }
      });
    }
  });
});
