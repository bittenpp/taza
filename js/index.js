

let scrollTop,bbbb=true;
let cccc=true;

$(window).on('scroll',function(){

    console.log( $('.visual').offset().top )
    scrollTop = $(this).scrollTop();
    
    console.log( $(window).height() )

    if(scrollTop > 910){
        if(bbbb){
            bbbb=false;
            cccc=true;
            $('header').load('inc.html header .head',noforget);
            $('header').css({marginLeft:'0px'});
        }
    }
    else if(scrollTop < 910){
        if(cccc){
            cccc=false;
            bbbb=true;
            $('header').load('inc.main.html header',noforget);
            // $('header').css('background-color','');
        }
    }
});
//  bbbb가 ??  cccc 가 ??? 내릴떄는 900보다 커지면 로드는 한번되는데 900안에 들어올때는 로드가 여러번 되고있다
// 조건문은 true일떄만 실행을 한다 

function noforget(){

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
}
    noforget()


        $('.Bottom_btn').on('click',pageMove);
        
        function pageMove(){
        
            event.preventDefault();
            let conTop = $('.content_01').offset().top;
            $('html').animate({ scrollTop: conTop }, 600);
            

        } 





$('footer').load('inc.html footer');
$('footer').load('inc.html footer .ft');
