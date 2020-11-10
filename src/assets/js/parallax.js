$(function () {
    $(window).scroll(function(e)
	{
		$(".img-1").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 1.3) + 'px, 0px)');
		$(".img-2").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 2.3) + 'px, 0px)');
		$(".img-3").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 3.3) + 'px, 0px)');
	});

	window.onload = function(){
		var wrapper = document.querySelector('.wrapper'),
				layerOne = document.querySelector('.img-1'),
				layerTwo = document.querySelector('.img-2'),
				layerThree = document.querySelector('.img-3');
			
		wrapper.addEventListener('mousemove',function(e){
			var pageX = e.clientX - window.innerWidth/2,
					pageY = e.clientY - window.innerHeight/2;
		  layerOne.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
		  layerTwo.style.transform = 'translateX(-' + (50 + pageX/1000) + '%) translateY(-' + (50 + pageY/1000) +  '%)';
		  layerThree.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) +  '%)';
		  layerFour.style.transform = 'translateX(-' + (50 + pageX/25) + '%) translateY(-' + (50 + pageY/25) + '%)';
		});
	}
})




// window.onload = function(){
// 	var wrapper = document.querySelector('#wrapper'),
// 			layerOne = document.querySelector('#layer-1'),
// 			layerTwo = document.querySelector('#layer-2'),
// 			layerThree = document.querySelector('#layer-3'),
// 			layerFour = document.querySelector('#layer-4');

// 	wrapper.addEventListener('mousemove',function(e){
// 		var pageX = e.clientX - window.innerWidth/2,
//                 pageY = e.clientY - window.innerHeight/2;
//   	layerOne.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
//   	layerTwo.style.transform = 'translateX(-' + (50 + pageX/1000) + '%) translateY(-' + (50 + pageY/1000) +  '%)';
//   	layerThree.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) +  '%)';
//   	layerFour.style.transform = 'translateX(-' + (50 + pageX/25) + '%) translateY(-' + (50 + pageY/25) + '%)';
// 	});
// }