$('#countdown').countdown('2014/10/03', function(event) {
      $(this).html(event.strftime('%w weeks %d days <br /> %H:%M:%S'))
    })
    $(function() {
      var objDistance = $('nav').offset().top;
      $(window).scroll(function() {
        var myDistance = $(window).scrollTop();
        if (myDistance > objDistance){
          $('nav').addClass('navbar-fixed-top');
        }
        if (objDistance > myDistance){
          $('nav').removeClass('navbar-fixed-top');
        }
      });

    })
      //smooth scrolling
      $("nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
     scrollTop: $(this.hash).offset().top-50
   }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

 });