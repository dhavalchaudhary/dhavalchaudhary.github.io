$(document).ready(function () {
    var lightOff = false;
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    function nameTimer() {
        var names = ["Bonjour, je suis Dhaval", "Hallo, ich bin Dhaval", "Hola, soy Dhaval", "Hej, jag är Dhaval", "Hi, I'm Dhaval"];
        var index = 0;

        function displayName() {
            $("#type-name").animateCss('fadeInUp');
            $("#type-name").html(names[index]);
            index = (index + 1) % names.length;
        };
        setInterval(displayName, 2500);
    };
    nameTimer();

    function lightsOff(str) {
        function swapStyleSheet(sheet) {
            document.getElementById('pagestyle').setAttribute('href', sheet);
        };
        swapStyleSheet(str)
    };
    
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'work', 'contact'],
        menu: '#menu',
        navigation: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        autoScrolling: true,
        afterLoad: function (anchorLink, index) {

            if (index == 3 && $(window).width() > 481) {
                $('#fp-nav').hide();
            }

        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 3 && $(window).width() > 481) {
                $('#fp-nav').show();
            }
        }
    });
    
    $("#home-buttons button:nth-child(1)").click(function () {
        $.fn.fullpage.moveTo('work', 1);
    });
    
    $("#home-buttons button:nth-child(2)").click(function () {
        $.fn.fullpage.moveTo('contact');
    });
    
    $("#nav-toggle-on").click(function () {
        $("#nav-toggle-on").addClass("hidden");
        $("#nav-toggle-off").removeClass("hidden");
        $("#menu").removeClass("hidden");
        $("#menu li").animateCss("bounceInDown");
        $("#header").css("background-color", " ");
        $("#header").addClass("menu-style");
        $("#fp-nav").addClass("hidden");
        $("#footer").addClass("hidden");
    });
    
    $("#nav-toggle-off").click(function () {
        $("#nav-toggle-off").addClass("hidden");
        $("#menu").addClass("hidden");
        $("#nav-toggle-on").removeClass("hidden");
        $("#header").removeClass("menu-style");
        $("#fp-nav").removeClass("hidden");
        $("#footer").removeClass("hidden");
    });
    
    $("#menu li").click(function () {
        $("#menu").addClass("hidden");
        $(this).addClass("active");
        $("#nav-toggle-off").addClass("hidden");
        $("#nav-toggle-on").removeClass("hidden");
        $("#header").removeClass("menu-style");
        $("#fp-nav").removeClass("hidden");
        $("#footer").removeClass("hidden");
    });
    
    $("#touch-navigation-next").click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    
    $("#touch-navigation-previous").click(function () {
        $.fn.fullpage.moveSectionUp();
    });

    $("#night-mode").click(function () {
        if (lightOff === false) {
            $("#night-mode b").html("Lights On");
            lightsOff('css/style-dark.css');
            lightOff = true;
        } else {
            $("#night-mode b").html("Lights Off");
            lightsOff('css/style-light.css');
            lightOff = false;
        }

    });
});