/*메인 슬라이드 */
$(document).ready(function(){
    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     dats: false,
     fade: true,
     autoplay : true,
     autoplaySpeed : 2500,
     pauseOnHover : true,
     asNavFor: '.slider-nav'
   });
   $('.slider-nav').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     arrows: false,
     focusOnSelect: true,
     pauseOnHover : true,
   });
/*컬렉션 슬라이드 */
  $('.slider-cho2').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-cho1'
       });
    $('.slider-cho1').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.slider-cho2',
       dots: true,
       arrows: false,
       centerMode: false,
       focusOnSelect: true,
       infinite : true,
       });
/*best 아이템 슬라이드 */
       $('.best').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      });
      /*이벤트 슬라이드 */
      $('.event').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      });    
      /* 공지 슬라이드 */
      $('.notice_s').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      });    
    });