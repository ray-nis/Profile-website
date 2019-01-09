$("#menuIcon").click(function(){
    $("#nav-bar").slideToggle();
  });

$( document ).ready(function() {
    $(window).scroll(function() {
        var Scroll = $(window).scrollTop() + 1;
        var aboutSection = $('#about').offset().top + 1;
        var experienceSection = $('#experience').offset().top;
        var educationSection = $('#education').offset().top;
        var skillsSection = $('#skills').offset().top;

        if (Scroll >= aboutSection && Scroll < experienceSection) {
            $("#m1").addClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        }
        else if (Scroll >= experienceSection && Scroll < educationSection) {
            $("#m2").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        }
        else if (Scroll >= educationSection && Scroll < skillsSection) {
            $("#m3").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        }
        else if(Scroll >= skillsSection) {
            $("#m4").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
        }

        console.log("scro = " + Scroll);
        console.log("sk = " + skillsSection)
    });
});

$(document).ready(function(){
    $("a").on('click', function(event) {
  
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700, function(){
          window.location.hash = hash;
        });
      }
    });
});