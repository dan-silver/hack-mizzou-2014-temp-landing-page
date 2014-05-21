    $(function() {
      var objDistance = $('#navigation').offset().top;
      $(window).scroll(function() {
        var myDistance = $(window).scrollTop();
        if (myDistance > objDistance){
          $('#navigation').addClass('navbar-fixed-top');
        }
        if (objDistance > myDistance){
          $('#navigation').removeClass('navbar-fixed-top');
        }
      });

    })
      //smooth scrolling
      $("a[href^='#']").on('click', function(e) {

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