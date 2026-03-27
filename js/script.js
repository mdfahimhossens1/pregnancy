//Home Header Slide
$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
})
// Clip Video Toggle
  function toggle(){
    let clip = document.querySelector('.clip');
    clip.classList.toggle('vdactive')
    let video = document.querySelector('video');
    video.play();
}
// Working Slide
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  items:3,
  loop:true,
  autoplay:true,
  margin:10,
  autoplayTimeout:3000,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    768:{
        items:2,
        nav:false
    },
    1024:{
        items:3,
        nav:true,
        
    }
}
});
});
// Working Count
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 20,
    time: 5000
});
});
// Testimonial Slide
$(document).ready(function(){
  $('.testimonial').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});
})


$(document).ready(function(){
  $('.blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    margin: 10,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
})

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

window.addEventListener('scroll', function(){
  let header = this.document.querySelector('.main-menu');
  header.classList.toggle('sticky', this.window.scrollY > 0);
});

// scroll up top button
$(document).ready( function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#scrollUp').fadeIn();
    }else{
      $('#scrollUp').fadeOut();
    }
  });

  $('#scrollUp').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
  });
});

// dots menu bar js
let menuBar = document.querySelector(".menu-bars");
let threeDots = document.querySelector(".three-dots");

threeDots.addEventListener('click', () => {
  menuBar.classList.toggle('activeBar');
  threeDots.classList.toggle('activeBar');
  console.log(threeDots);
})
// // menu bar
// let menu = document.querySelector('.menu');
// let rsToggle = document.querySelector('.rs_menu_toggle');

// rsToggle.addEventListener('click', () => {
//   menu.classList.toggle('activeBar');
//   rsToggle.classList.toggle('activeBar');
// })