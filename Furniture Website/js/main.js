$(document).ready(function(){
    $("nav .navbar-toggler").on('click',function(){

        $('nav .one').toggleClass('top')
        $('nav .two').toggleClass('hidden')
        $('nav .three').toggleClass('bottom')
    })

    // Mix it up 

    var mixer = mixitup('.gallary');


    // venobox
    $('.venobox').venobox(); 

    // smooth scroll

    $("nav li a").on('click',function(){

        $(this).addClass("active").parent().siblings().find("a").removeClass("active")

        $("html ,body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top - 100
        },1000)
    })


    // button up

   $(window).scroll(function(){
       if($(this).scrollTop()>= 1000)
       {
           $(".up").fadeIn(1000)
       }
       else{
        $(".up").fadeOut(1000)
       }
   })

   $(".up").on("click",function(){
       $("html,body").animate({

        scrollTop:0

       },1000)
   })
})