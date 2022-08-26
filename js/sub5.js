



// var swiper = new Swiper('.swiper', {
//   slidesPerView: 2,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//   return direction;
// }













// 자바 다시 해봐라 야@@@@@@@@

function init(){

  $('.img_Text').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
  });
  
}
  

  window.onload = init;