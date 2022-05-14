$(document).ready(function(){
    $(window).scrol1(function(){
       if(this.scroly > 20) {
        $('.navbarar').addclass("sticky");
       }else{ 
        $('.navbarar').removeclass("sticky");
       }
    })

    });