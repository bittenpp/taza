// common.js
if(!$('body').hasClass('mainPage')){
    $('header').load('inc.html header');
    $('header').load('inc.html header .head');
    console.log('main')
}


$('footer').load('inc.html footer');
$('footer').load('inc.html footer .ft');



