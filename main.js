'use strict';

(function ($){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dots:true,
    smartSpeed:2000,
    autoHeight:false,
    autoplay:true, 
    responsiveClass:true,
    })

    //CountDown Timer
    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    //timerdate = "2022/04/30";
    
    jQuery("#countdown-time").countdown(timerdate, function(event){
        jQuery(this).html(event.strftime("<div class='countdown_item'><span>Month</span>"))
    })

    

})(jQuery);