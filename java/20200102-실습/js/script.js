$(document).ready(function(){
	$("#ex_01_title").click(function(){
		$(".p_01, .p_03").css("background", "#faf");
	});
	$("#ex_02").click(function(){
		var $inputChk=$("input[name^='item_0']");
		console.log($inputChk);
		if($inputChk.attr("checked")){
			$("input[name^='item_0']").removeAttr("checked");
			$("#ex_02_tit").text("전체선택");
		}else{
			$("input[name^='item_0']").attr("checked", "checked");
			$("#ex_02_tit").text("전체해제");
		}
	});
	
	$(".ch_03_frame span").click(function(){
		$(this).closest("div").hide();
	});
	
	var $move=0;
	$(".go").click(function(){
		$(".ch_04_frame").stop().animate({"margin-left":$move-=200},1500);
	});
	$(".back").click(function(){
		$(".ch_04_frame").stop().animate({"margin-left":$move+=200},1500);
	});
/*
	$("#tab_01").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_01").fadeIn();
		$(".bg-bk").animate({"left":0}, 500);
	});
	$("#tab_02").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_02").fadeIn();
		$(".bg-bk").animate({"left":50+"%"}, 500);
	});
*/	
	$(".tab_btn div").click(function(){
		var $index=$(this).index();
		$(".tab_btn div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box div").hide();
		$(".tab_box div").eq($index).fadeIn();

		$(".bg-bk").stop().animate({"left":50*$index+"%"}, 500);
	});

	$(".less, #ex_06 p").hide();
	$(".more").click(function(){
		$(this).siblings(".less").show();
		$(this).hide();
		$(this).closest("h4").next("p").slideDown();
	});
	$(".less").click(function(){
		$(this).siblings(".more").show();
		$(this).hide();
		$(this).closest("h4").next("p").slideUp();
	});

	$(".q_box p").hide();
	$(".q_box").click(function(){
		var $cur_Opt = $(this).children("p").hasClass("open"); //가상의 클래스가 본인을 체크할 수 있는 열쇠
		console.log($cur_Opt);
		if($cur_Opt==true){  //본인을 클릭시, 현재 열려 있는지 또는 닫혀 있는 지를 체크, 열려있다면
			$(this).children("p").removeClass("open");  //본인한테 부여되 클래스를 제거 
			$(this).children("p").slideUp();  //본인을 닫는다.
		}else{  //다른 곳을 클릭시
			$(".q_box p").removeClass("open");  //강제로 클래스를 제거
			$(".q_box p").slideUp();  //강제로 닫아버린다.
			$(this).children("p").addClass("open");  //클릭한 곳에 클래스를 부여
			$(this).children("p").slideDown();  //본인만 열어준다.
		}
	});

	$(".per_bar_frame").each(function(a){
		var $data_percent=$(this).attr("data-percent");
		console.log($data_percent);	
		$(this).find(".per_bar").animate({"width":$data_percent}, 2000);
		$(this).find(".cur_per").text($data_percent);
	});

	$(".login-box").hide();
	$(".login_btn").click(function(){
		$(".dark-bg").addClass("active_bg");
		$(".login-box").show();
	});
	$(".dark-bg, .cls_btn").click(function(){
		$(".dark-bg").removeClass("active_bg");
		$(".login-box").hide();
	});
















});