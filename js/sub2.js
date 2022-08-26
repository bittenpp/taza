
let aa = 0;

let bb = 0;



$('.a1').on('click', function () {

    if (aa <= 0) {
        aa++;
        $('.b1').eq(0).css({
            display: 'flex'
        })
    }
    else {
        aa--;
        $('.b1').eq(0).css({
            display: 'none'
        })

    }

})




$('.a2').on('click', function () {

    if (bb <= 0) {
        bb++;
        $('.b2').css({
            display: 'flex'
        })


    }
    else {
        bb--;
        $('.b2').css({
            display: 'none'
        })

    }

})

let name1 = '';

$('.b1 > button').on('click', function () {


    $(this).text()

    name1 = $(this).text();

    $('.a1>span').text(name1)

    $('.b1').css({
        display:'none'
    })

})


let name2 = '';

$('.b2 > button').on('click', function () {


    $(this).text()

    name2 = $(this).text();

    $('.a2 > span').text(name2)

    $('.b2').css({
        display:'none'
    })

})

// star select@@@@@@@@@@@@@@@@@

let cc = 0;




$('.c1').on('click', function () {


    if (cc <= 0) {
        cc++;
        $('.spot1>div').css({
            display: 'block'
        })

        // $('.spot1 > div').css({
        //     display: 'none'
        // })
        $('.spot2 > div').css({
            display: 'none'
        })
        $('.spot3 > div').css({
            display: 'none'
        })
        $('.spot4 > div').css({
            display: 'none'
        })
        $('.spot5 > div').css({
            display: 'none'
        })
        $('.spot6 > div').css({
            display: 'none'
        })

    }

    else {
        cc--;
        $('.spot1>div').css({
            display: 'none'
        })
    }
})



let dd = 0;



$('.c2').on('click', function () {


    if (dd <= 0) {
        dd++;
        $('.spot2>div').css({
            display: 'block'
        })
        $('.spot1 > div').css({
            display: 'none'
        })
        // $('.spot2 > div').css({
        //     display: 'none'
        // })
        $('.spot3 > div').css({
            display: 'none'
        })
        $('.spot4 > div').css({
            display: 'none'
        })
        $('.spot5 > div').css({
            display: 'none'
        })
        $('.spot6 > div').css({
            display: 'none'
        })
    }
    else {
        dd--;
        $('.spot2>div').css({
            display: 'none'
        })
    }
})





let ee = 0;



$('.c3').on('click', function () {


    if (ee <= 0) {
        ee++;
        $('.spot3>div').css({
            display: 'block'
        })
        $('.spot1 > div').css({
            display: 'none'
        })
        $('.spot2 > div').css({
            display: 'none'
        })
        // $('.spot3 > div').css({
        //     display: 'none'
        // })
        $('.spot4 > div').css({
            display: 'none'
        })
        $('.spot5 > div').css({
            display: 'none'
        })
        $('.spot6 > div').css({
            display: 'none'
        })
    }
    else {
        ee--;
        $('.spot3>div').css({
            display: 'none'
        })
    }
})



let ff = 0;



$('.c4').on('click', function () {


    if (ff <= 0) {
        ff++;
        $('.spot4>div').css({
            display: 'block'
        })
        $('.spot1 > div').css({
            display: 'none'
        })
        $('.spot2 > div').css({
            display: 'none'
        })
        $('.spot3 > div').css({
            display: 'none'
        })
        // $('.spot4 > div').css({
        //     display: 'none'
        // })
        $('.spot5 > div').css({
            display: 'none'
        })
        $('.spot6 > div').css({
            display: 'none'
        })
    }
    else {
        ff--;
        $('.spot4>div').css({
            display: 'none'
        })
    }
})


let gg = 0;



$('.c5').on('click', function () {


    if (gg <= 0) {
        gg++;
        $('.spot5>div').css({
            display: 'block'
        })
        $('.spot1 > div').css({
            display: 'none'
        })
        $('.spot2 > div').css({
            display: 'none'
        })
        $('.spot3 > div').css({
            display: 'none'
        })
        $('.spot4 > div').css({
            display: 'none'
        })
        // $('.spot5 > div').css({
        //     display: 'none'
        // })
        $('.spot6 > div').css({
            display: 'none'
        })
    }
    else {
        gg--;
        $('.spot5>div').css({
            display: 'none'
        })
    }
})
let hh = 0;



$('.c6').on('click', function () {


    if (hh <= 0) {
        hh++;
        $('.spot6>div').css({
            display: 'block'
        })
        $('.spot1 > div').css({
            display: 'none'
        })
        $('.spot2 > div').css({
            display: 'none'
        })
        $('.spot3 > div').css({
            display: 'none'
        })
        $('.spot4 > div').css({
            display: 'none'
        })
        $('.spot5 > div').css({
            display: 'none'
        })
        // $('.spot6 > div').css({
        //     display: 'none'
        // })
    }
    else {
        hh--;
        $('.spot6>div').css({
            display: 'none'
        })
    }
})




