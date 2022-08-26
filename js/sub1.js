let data;

$.ajax({
    url:'./js/sub1.json',
    success:function(json){


        //  slick 는 인디게이터가 dots : true 이다 
        //  스와이퍼는 인디게이터가 pagination:  el: ".swiper-pagination" 이다
        dataChange(0);
        
        
        $('.btn a').on('click',function(){
            event.preventDefault();
            let idx = $(this).index();
            dataChange(idx);

        })
        function dataChange(i){
            $('.btn a').removeClass('active')
            $('.btn a').eq(i).addClass('active')

            let txt = $('.btn a').eq(i).text();
            let tag='';
            json.place.forEach(function(data){
                if(data.region ==  txt){
                    tag += `<div class="sub_slide">
                                <div class="slide-wrap">
                                    <div class="text">
                                        <h2>${data.title}</h2>
                                        <p> 
                                            ${data.text}
                                        </p>
                                    </div>
                                    <figure><img src = ${data.img}></figure>
                                    
                                </div>
                            </div>`;
                }
            });

            
            $('.content_sub').fadeOut(500);
            
            //  눌렀을때 끊기게 안하는 명령어 fade Out / fadeIN 
            setTimeout(function(){
                $('.content_sub').html(    `<div class="your-class"> ${tag} </div>`   );
                $('.content_sub').fadeIn(500);

                
                $('.your-class').slick({
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                });
            },500)
            // 새로고침해도 a 태그 샾으로 안가게끔 하는 명령어 event preventaDefault
        }

    }
    
});



// =================================버튼 누르면 배경 색 변경 ===================

// =================================버튼이 여래개라서 each 문 사용 / 
// 제이쿼리라서 each 문 사용  클릭했을때 효과를 주고 뺴고 