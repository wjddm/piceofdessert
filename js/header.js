// top butten 
    $(".top_butten").click(function(){
        $("body,html").animate({
            scrollTop: 0
        },1500)
    });

//  header scroll 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("header_scroll")
        }else{
            $(".header").removeClass("header_scroll")
        }
    });
