$('.buttons a').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('.container ul').removeClass('list').addClass('grid');
        $('.buttons a.list').removeClass('active');
        $(this).addClass('active');
    }
    else if($(this).hasClass('list')) {
        $('.container ul').removeClass('grid').addClass('list');
        $('.buttons a.grid').removeClass('active');
        $(this).addClass('active');
    }
    
});

if ($('#content ul').hasClass('grid')){
    $('.buttons a.grid').addClass('active');
}
else if ($('#content ul').hasClass('list')){
    $('.buttons a.list').addClass('active');
}
