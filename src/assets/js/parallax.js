$(function () {
    $(window).scroll(function(e)
	{
		$(".img-1").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 1.3) + 'px, 0px)');
		$(".img-2").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 2.3) + 'px, 0px)');
		$(".img-3").css('transform', 'translate3d(0px, ' + ($(window).scrollTop() / 3.3) + 'px, 0px)');
	});
})