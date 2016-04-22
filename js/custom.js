$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	})

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

var body = document.body,
        overlay = document.querySelector('.overlay'),
        overlayBtts = document.querySelectorAll('button[class$="overlay"]');
        
    [].forEach.call(overlayBtts, function(btt) {

      btt.addEventListener('click', function() { 
         
         /* Detect the button class name */
         var overlayOpen = this.className === 'open-overlay';
         
         /* Toggle the aria-hidden state on the overlay and the 
            no-scroll class on the body */
         overlay.setAttribute('aria-hidden', !overlayOpen);
         body.classList.toggle('noscroll', overlayOpen);
         
         /* On some mobile browser when the overlay was previously
            opened and scrolled, if you open it again it doesn't 
            reset its scrollTop property */
         overlay.scrollTop = 0;

      }, false);

    });