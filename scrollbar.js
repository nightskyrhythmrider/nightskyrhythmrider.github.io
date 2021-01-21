let scrollBar = document.getElementById('scrollbar');

scroll();

window.addEventListener('scroll', function() {
    scroll();
});

function scroll() {
	var body = document.body,
    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
       html.clientHeight, html.scrollHeight, html.offsetHeight );
    height = height - window.innerHeight;
    var width = Math.max( body.scrollWidth, body.offsetWidth, 
       html.clientWidth, html.scrollWidth, html.offsetWidth );
    let y = window.scrollY;
    let scrollBarPosY = y/height;
    let scrollBarPosX = scrollBarPosY * width;
    scrollBar.style.width = Math.floor(scrollBarPosX) + 'px';
}