
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
