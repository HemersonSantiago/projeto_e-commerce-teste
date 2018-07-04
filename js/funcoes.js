$(".button").click(function(){
    $('.article_banner_principal').css({'opacity': '0.3'});    
});
$("button").focusout(function(){
    $('.article_banner_principal').css({'opacity': '1.0 '});     
});