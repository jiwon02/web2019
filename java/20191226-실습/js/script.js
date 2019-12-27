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
	$(".test_12 select").change(function(){
		var $result=$(this).val();
		console.log($result);
		$(".test_12 .result").text($result);
	});
	$(window).resize(function(){
		var $width=$(window).width();
		console.log($width);
		$(".widthTxt").text($width);
	});
	$(window).resize(function(){
		var $height=$(window).height();
		console.log($height);
		$(".heightTxt").text($height);
	});
	$(window).scroll(function(){
		var $scrollTop=$(this).scrollTop();
		console.log($scrollTop);
		$(".scroll_location").text($scrollTop);
	});
	$(".test_15 .hide-btn").click(function(){
		$(".test_15 p").hide();
	});
	$(".test_15 .show-btn").click(function(){
		$(".test_15 p").show();
	});
	$(".test_16 p").hide();
	$(".test_16 .hide-btn").click(function(){
		$(".normal").hide();
		$(".very-fast").hide(50);
		$(".fast").hide('fast');
		$(".slow").hide('slow');
		$(".very-slow").hide(2000);
	});
	$(".test_16 .show-btn").click(function(){
		$(".normal").show();
		$(".very-fast").show(50);
		$(".fast").show('fast');
		$(".slow").show('slow');
		$(".very-slow").show(2000);
	});
	$(".test_17 .out-btn").click(function(){
		$(".test_17 p").fadeOut();
	});
	$(".test_17 .in-btn").click(function(){
		$(".test_17 p").fadeIn();
	});
	$(".test_18 .up-btn").click(function(){
		$(".test_18 p").slideUp();
	});
	$(".test_18 .down-btn").click(function(){
		$(".test_18 p").slideDown();
	});
	var $animate=0;
	$(".test_19 button").click(function(){
		$(".test_19 img").animate({"margin-left":$animate+=200}, 1000);
	});
	$(".test_20 img").click(function(){
		var $title=$(".test_20 img").attr("title");
		console.log($title);
		$(".img_name").text($title);
	});
	$(".test_21 button").click(function(){
		$(".test_21 img").attr("src", "img/kakao_img2.jpg")
	});
	$(".test_22 .left_add").click(function(){
		$(".img_frame").prepend("<img src='img/wall_img1.jpg'></img>")
	});
	$(".test_22 .right_add").click(function(){
		$(".img_frame").append("<img src='img/wall_img3.jpg'></img>")
	});
	$(".test_23 .before_add").click(function(){
		$(".test_23 .img_frame #kakao").before("<img src='img/wall_img4.jpg'></img>")
	});
	$(".test_23 .after_add").click(function(){
		$(".test_23 .img_frame #kakao").after("<img src='img/wall_img6.jpg'></img>")
	});
	$(".test_24 .effect_add").click(function(){
		$(".test_24 #band").addClass("effect");
	});
	$(".test_24 .effect_remove").click(function(){
		$(".test_24 #band").removeClass("effect");
	});
	$(".test_25 .btn_frame").click(function(){
		var $has=$(".test_25 #refresh").hasClass("effect");
		if($has==true){
			$(".test_25 #refresh").removeClass("effect");
		}else{
			$(".test_25 #refresh").addClass("effect");
		}
	});
	$(".test_26 .img_frame img").not(".test_26 .img_frame img:eq(0)").hide();
	$(".test_26 .fadein_img").click(function(){
		$(".test_26 .img_frame img:eq(1)").fadeIn(1000, function(){
			$(".test_26 .img_frame img:eq(2)").fadeIn(1000, function(){
				$(".test_26 .img_frame img:eq(3)").fadeIn(1000, function(){
					$(".test_26 .img_frame img:eq(4)").fadeIn(1000);
				});
			});
		});
	});
	$("#txt_ch").css("font-size", "20px")
	var $txt=$("#txt_02").text();
	console.log($txt);
	$("#txt_sel span").text($txt);
	$("#ex_03 p:last").text("파리").css("color", "#f00");
	$("#ex_04").attr("src", "img/mushroom.jpg");
	$("#ex_05").attr("src", "img/image_02.jpg");
	$("#ex_06").attr("src", "img/mushroom.jpg");
	$("#ex_06").animate({"margin-left":"200px"}, 2000);
	$("#ex_07 p:eq(2)").addClass("active");
	$("#ex_08 p:last").remove();
	var $txt=$("#ex_09 .ho_04");
	$("#ex_09 .ho_01").before($txt);
	var $sel = $("#ex_10 .lo_03").val();
	console.log($sel);
	$("#ex_10 .lo_03").val("대전");
	$("#ex_11>li").hover(function(){
		var $index=$(this).index();
		$(".main>li>a").removeClass("red");
		$(".main>li>a").eq($index).addClass("red");
		$("#ex_11 .sub").removeClass("active");
		$("#ex_11 .sub").eq($index).addClass("active");
		return false;
	});
	$(".slide_num li").click(function(){
		var $index=$(this).index();
		$(".slide_num li").removeClass("active_btn");
		$(this).addClass("active_btn");
		$(".slider li").removeClass("active_img");
		$(".slider li").eq($index).addClass("active_img");
		return false;
	});
	$("#ex_01_title").click(function(){
		$(".p_01, .p_03").css("background", "#ffaaff");
	});
	



});