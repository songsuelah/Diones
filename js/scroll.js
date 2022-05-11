/*컬렉션 스크롤 다운 */
$(function(){
	$(window).scroll(function(){
        var	windowTop =$(document).scrollTop()+600;
		$(".q_m").stop().animate({top:windowTop+"px" },300);
       // alert($('.coll').position().top)
		/********SECOND SECTION**************/
		if ($(document).scrollTop() >= $('.coll').position().top +3000) {
           // alert()
    		$('.coll1').removeClass('show-animation');
		    $('.coll1').addClass('show-animation');
		}
		else{
			$('.coll1').removeClass('show-animation');
		}


		/********THIRD SECTION**************/
		if ($(document).scrollTop() >= $('.coll').position().top +3000) {
    		$('.coll2').removeClass('show-animation');
		    $('.coll2').addClass('show-animation');
		}

		else{
			$('.coll2').removeClass('show-animation');
		}


		/********FOURTH SECTION**************/

        if ($(document).scrollTop() >= 800) {
              
            $('header').addClass('fix');

          }else{

            $('header').removeClass('fix');
            
          }
        });

    $('.menui').click(function(){

           $('body').addClass('on');   
           $('.box1').slideDown(500);
           $('.menu34').removeClass('closs');
           $('.nomal').slideUp(500);
           $('.menui').slideUp(500);
           $('.menu2').addClass('closs');
           $('.q_m').removeClass('open');
           


      });
      $('.menu2').click(function(){
          $('body').removeClass('on');
          $('.box1').slideUp(500);
          $('.menu34').addClass('closs');
          $('.nomal').slideDown(500);
          $('.menui').slideDown(500);
          $('.menu2').removeClass('closs');

          
      });

      $('.click .open').click(function(){
        $('.q_m').addClass('open');
        });
        
      $('.closs12').click(function(){
            $('.q_m').removeClass('open');
        });

        var a = 1 
      
    
jQuery('.menui a').click(function (event) {
    event.preventDefault();
});
jQuery('.menu2 a').click(function (event) {
    event.preventDefault();
});
jQuery('.listq a').click(function (event) {
    event.preventDefault();
});
})

