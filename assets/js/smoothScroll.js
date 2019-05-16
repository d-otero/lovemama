// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.nav-link').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top + 0,
    }, 700);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();