$(document).ready(function(){
	$("#select").css({"fontSize":"28px", "background":"#ffff00"});
	$(".test03 p:eq(0),.test03 p:eq(2)").css("color", "#00dd00");
	$(".test04 p:eq(1),.test04 p:eq(3)").css("background", "#aaffff");
	$(".test05 p:eq(3)").siblings("p").css("color", "#0000ff");
	$(".test06 li:eq(2) a").closest("ul").css("background", "#ffff77");
	$(".port").closest(".main_menu").siblings("#side_menu").css("background","#aff").find("span").css("color", "#f00");
	//$(".test07 .port").closest("ul").siblings().css("background", "#aaffff");
	//$(".test07 .port").closest("ul").siblings().find("span").css("color", "#f00");
	$(".test_08 input[type='text']").css("background", "#ffffaa");
	$(".test_09 p").text("텍스트 변경 완료").css("background", "#aaffaa");
	$(".test_10 p").click(function(){
		$(this).slideUp(1000);
	});
	$(".test_11 p").hover(function(){
		$(this).addClass("highlight");
	},function(){
		$(this).removeClass("highlight");
	});





});