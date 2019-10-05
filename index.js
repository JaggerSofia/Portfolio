$('document').ready( function() {
    //this will be where I add the functionality that will
    //allow me to hover over an area and the content will change.
    //will either be the bio are or the project area. Though
    //I might do the image for the project also but keep the area
    //that displays the description for it completeyly visible
    console.log('hiddenWindow')
    $('#bio').mouseenter(function(){
        $('.about').hide();
        $('.description').show();
    })

    $('#bio').mouseleave(function(){
        $('.about').show();
        $('.description').hide();
    })
});
