$(function(){
	$(".mobile-daohang").click(function(){
		if($(".mobile-nav-list").css("display") == 'none'){
			$(".mobile-nav-list").css("display","block");
		}else if($(".mobile-nav-list").css("display") == 'block'){
			$(".mobile-nav-list").css("display","none");
		}
		
	});
	$('#gotop').click(function() {

		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;

	});
})
