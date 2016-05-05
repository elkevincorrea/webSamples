window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var card1 = document.getElementById('card1')

var scrollheight = document.body.scrollHeight
var windowheight = window.innerHeight
var parallaxElements = []
var fansElements = []

$(document).ready(function(){
	$('.parallax-card').each(function(){
		$elm = $(this);
		var id = $elm.data('id');
		parallaxElements[id] = {
			id: $elm.data('id'),
			start: $elm.data('start'),
			stop: $elm.data('stop'),
			elm: $elm[0]
			//initialOffsetY: $elm.offset().top
		};
	});
	$('.fan-crowd').each(function(){
		$elm = $(this);
		var id = $elm.data('id');
		fansElements[id] = {
			id: $elm.data('id'),
			type: $elm.data('type'),
			elm: $elm[0]
			//initialOffsetY: $elm.offset().top
		};
	});
});


/*$(window).load(function(){
	$('.fan-crowd').mousemove(function(e){
		var moveX = (e.pageX * -1 / 6);
		var moveY = (e.pageY * -1 / 6);
		//$(this).css('background-position', moveX + 'px ' + moveY + 'px');
		$(this).style.right = moveX + 'px';
		$(this).style.bottom = moveY + 'px';
	});
});*/



function parallaxCards(){
	var scrolltop = window.pageYOffset
 	var scrollamount = scrolltop / (scrollheight - windowheight) * 100
 	var i = 0;
	for(var id in parallaxElements){
 		//var viewportOffsetTop = parallaxCards[id].initialOffsetY - scrolltop;
 		if (scrolltop >= parallaxElements[id].start) {
 			//$(parallaxElements[id].elm).style.right = -30 + scrollamount + '%';
 			//$(parallaxElements[id].elm).style.right = -30 + scrollamount + '%';
 			//card1.style.right = -30 + scrollamount + '%'
 			var card = document.getElementById(id);
 			scrollamount = (scrolltop - parallaxElements[id].start) / (parallaxElements[id].stop - parallaxElements[id].start) * 100;
 			var porcentaje = -30 - (i * 5) + scrollamount;
 			if(porcentaje <= (70 - i * 5)){
 				card.style.right = porcentaje + '%'
 			}
 			else{
 				card.style.right = 70 - (i * 5) + '%'
 			}
 		}
 		i++;
	}
 	/*var scrolltop = window.pageYOffset
 	var scrollamount = scrolltop / (scrollheight - windowheight) * 100*/
 	//card1.style.right = -30 + scrollamount + '%'
 	//card2.style.right = -35 + scrollamount + '%'
 }

 window.addEventListener('scroll', function(){
 	requestAnimationFrame(parallaxCards)
 }, false)

 window.addEventListener('mousemove', function(e){
 	var moveX = ((e.pageX - window.innerWidth / 2) * -1 / 6) ;
	var moveY = (e.pageY * -1 / 6);
	document.getElementById('moveX').innerHTML = e.pageX;
	document.getElementById('moveY').innerHTML = e.pageX - window.innerWidth / 2;
 	for(var id in fansElements){
 		var fan = document.getElementById(id);
 		fan.style.left = 100 + moveX + 'px';
 	}

 	/*var fan = document.getElementById('fan');
 	var moveX = (e.pageX * -1 / 6);
	var moveY = (e.pageY * -1 / 6);
	document.getElementById('moveX').innerHTML = moveX + 'px';
	fan.style.right = moveX + 'px';
	fan.style.bottom = moveY + 'px';*/
 })

/*window.addEventListener('resize', function(){
 	var scrolltop = window.pageYOffset
 	var scrollamount = scrolltop / (scrollheight - windowheight) * 100
 	card1.style.right = -30 + scrollamount + '%'
 }, false)*/
