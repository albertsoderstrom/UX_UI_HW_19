console.log("your index.js file is loaded correctly");

ScrollReveal().reveal('.me');
ScrollReveal().reveal('.project');

$(".menuDrop").hide();

$("#menu").on("click", function(){
    $(".menuDrop").toggle();
    console.log("active menu");
});
////
$(".logo").css("opacity" , "0.3")

$(".logo").hover(function(handlerIn, handlerOut){
    $(this).css("opacity" , "1");
    }, function(){
    $(this).css("opacity" , "0.3");
  });