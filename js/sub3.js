let data;

$.ajax({
    url:'./js/sub3.json',
    success:function(json){
        console.log('성공');
        data=json;

        let elData = '';


        $('.btn a').each(function(k,v){
            
            $(v).on('click',function(){
            
                
                event.preventDefault()
                elData = `<div class="text active">
                    <div class="text1_2">
                        <div class="text1">
                            <h3>
                                대기상태
                            </h3>
                            <p>${data.weather[k].pollution}</p>    
                        </div>

                        <div class="text2">
                            <h3>
                                자외선
                            </h3>
                            <p>
                            ${data.weather[k].sun}
                            </p>
                        </div>

                        <div class="text3_4">
                            <div class="text3">
                                <h3>
                                    풍속
                                </h3>
                                <p>
                                ${data.weather[k].wind}
                                </p>

                            </div>

                            <div class="text4">
                                <h3>
                                    강우
                                </h3>
                                <p>
                                ${data.weather[k].rain}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;

                $('.text').html(elData);

                console.log(elData)
            });
        });
    }
    
}); 


$('.btn a').each(function(k,v){
    $(v).on('click',function(){
        $('.btn a').removeClass('active')
        $(v).addClass('active')
    });
});