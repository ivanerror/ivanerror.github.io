$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 300);
    $('.navbar a').toggleClass('scrolled', $(this).scrollTop() > 300);


    if ($(this).scrollTop() < 300) { 
        $('.navbar .navbar-brand img').attr('src','accel-logo.png');
    } else { 
        $('.navbar .navbar-brand img').attr('src','accel-logo-scrolled.png');
    }
});




// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar");
//       $nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
//     });
//   });