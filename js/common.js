// common.js
if(!$('body').hasClass('mainPage')){
    $('header').load('inc.html header');
    $('header').load('inc.html header .head',navi);
    //  load는 비동기 함수이다. 그래서 콜백함수를 써줘야 클릭문이 들어간다 
    // 즉 로드가 맨위에서 실행하고 있는경우 밑에 있는 클릭문이 안먹을 경우 콜백함수를 사용해주어야한다
    //  load 에 콜백함수 사용해주어야함
    console.log('main')
}


$('footer').load('inc.html footer');
$('footer').load('inc.html footer .ft');

function navi(){

    // 검색창
    $('.seach_icon').on('click',function(){
        $('body').css({overflow:'hidden'})
        $('.cover_search').addClass('active');
        
        $('.close_btn').on('click',function(){
            $('.cover_search').removeClass('active');
            $('body').css({overflow:'auto'})
        });
    });
    
    //  로그인
    $('.user_icon').on('click',function(){
    
        $('body').css({overflow:'hidden'})
        $('.cover_login').addClass('active');
    
        $('.closed_btn').on('click',function(){
            $('.cover_login').removeClass('active');
            $('body').css({overflow:'auto'})
        });
    });
    
    // 메뉴
    $('.bauer_icon').on('click',function(){
    
        $('body').css({overflow:'hidden'})
        $('.cover_menu').addClass('active');
    
        $('.closed_btn').on('click',function(){
            $('.cover_menu').removeClass('active');
            $('body').css({overflow:'auto'})
        });
    });
    //  사이드 TOP메뉴 클릭하면 맨위로 올라갑니다.
    move();
}


function move(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#Move_Top_btn').fadeIn();
        }else{
            $('#Move_Top_btn').fadeOut();
        }
    });
    
    $("#Move_Top_btn").click(function(){
        event.preventDefault();
        $('html').animate({
            scrollTop:0
        },400)
        return false;
    });
}


// let scrollTop;
// $(window).on('scroll',function(){

//     console.log( $('.visual').offset().top )
    
//     let scrollTop = $(this).scrollTop();
//     if(scrollTop > 910){
//         $('header').css('background-color','red');
//     }else{
//         $('header').css('background-color','');
//     }
// });