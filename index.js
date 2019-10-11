$(function() {

    // $('.description-me').hide();
    // $('.description-pro').hide();

    $('.interests').mouseenter(function(){
        $('.about-me').hide();
        $('.description-me').show();
    })

    $('.interests').mouseleave(function(){
        $('.about-me').show();
        $('.description-me').hide();
    })

    $('.prog-interest').mouseenter(function(){
        $('.about-pro').hide();
        $('.description-pro').show();
    })

    $('.prog-interest').mouseleave(function(){
        $('.about-pro').show();
        $('.description-pro').hide();
    })
});

    //this will be where I add the functionality that will
    //allow me to hover over an area and the content will change.
    //will either be the bio are or the project area. Though
    //I might do the image for the project also but keep the area
    //that displays the description for it completeyly visible
