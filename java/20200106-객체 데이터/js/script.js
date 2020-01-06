$(document).ready(function(){
	var $member_arr = [
		{$name:"홍길동", $age:"19", $location:"서울"},	
		{$name:"홍길순", $age:"24", $location:"부산"},
		{$name:"홍길영", $age:"40", $location:"춘천"},
		{$name:"홍길만", $age:"26", $location:"대전"}
	];

	var $info_html='<p class="info">이름 : <span class="name">000</span>, 나이 : <span class="age">00</span>세, 지역 : <span class="location">00</span></p>';
	for(i=0; i<=$member_arr.length-1; i++){
		$("#objData").append($info_html);
	}
	
	$("#objData .info").each(function(index){
		$(this).find(".name").text($member_arr[index].$name);
		$(this).find(".age").text($member_arr[index].$age);
		$(this).find(".location").text($member_arr[index].$location);
	});


	var $content_arr=[
	{$bg:"img/kakao_01.jpg", $name:"카카오 귀환"},	
	{$bg:"img/kakao_02.jpg", $name:"카카오 개설"},	
	{$bg:"img/kakao_03.jpg", $name:"카카오 나들이"}	
	]

	var $info_html='<li><div class="img"></div><div class="title"></div></li>'
	for(i=0; i<=$content_arr.length-1; i++){
		$("#ex_05 ul").append($info_html);
	}
	
	$("#ex_05 ul li").each(function(index){
		$(this).find(".img").css("background-image", "url("+$content_arr[index].$bg+")");
		$(this).find(".title").text($content_arr[index].$name);
	});

	
	$(".data_method span").data("name", "홍길동");  //내부에 데이터로 축적 "name"="홍길동"
	$(".data_method span").data({"age":18, "location":"서울"});
	
	var $dataName=$(".data_method span").data("name");
	var $dataAge=$(".data_method span").data("age");
	var $dataLocation=$(".data_method span").data("location");

	console.log($dataName);
	console.log($dataAge);
	console.log($dataLocation);

	
	$(".removeData_method span").data("name", "홍길영"); 
	$(".removeData_method span").data({"age":25, "location":"부산"});

	var $dataName=$(".removeData_method span").data("name");
	var $dataAge=$(".removeData_method span").data("age");
	var $dataLocation=$(".removeData_method span").data("location");

	console.log($dataName);
	console.log($dataAge);
	console.log($dataLocation);

	var $dataAge=$(".removeData_method span").removeData("age");
	var $result_dataAge=$(".removeData_method span").data("age");
	console.log($result_dataAge);
	
	
	var $ex02_pr_arr=[
		{$dataSrc : "img/logo-01.jpg", $dataType : "PIXAR"},
		{$dataSrc : "img/logo-02.jpg", $dataType : "DISNEY"}
	];

	var $ex02_p_arr=[
		{$dataSrc : "img/anmation-01.jpg", $dataType : "CAR"},	
		{$dataSrc : "img/anmation-02.jpg", $dataType : "TOYSTORY"},	
		{$dataSrc : "img/anmation-03.jpg", $dataType : "COCO"}	
	];

	var $ex02_d_arr=[
		{$dataSrc : "img/d-ani-01.jpg", $dataType : "COW"},	
		{$dataSrc : "img/d-ani-02.jpg", $dataType : "DESTINY"},	
		{$dataSrc : "img/d-ani-03.jpg", $dataType : "TINKER BELL"}
	];

	$("#ex_02 .logo li").each(function(index){
		$(this).css("background-image", "url("+$ex02_pr_arr[index].$dataSrc+")");
		$(this).data("data-brand", $ex02_pr_arr[index].$dataType);
	});

	$("#ex_02 .animation-p li").each(function(index){
		$(this).css("background-image", "url("+$ex02_p_arr[index].$dataSrc+")");
		$(this).data("data-name",$ex02_p_arr[index].$dataType);
	});

	$("#ex_02 .animation-d li").each(function(index){
		$(this).css("background-image", "url("+$ex02_d_arr[index].$dataSrc+")");
		$(this).data("data-name",$ex02_d_arr[index].$dataType);
	});

	$("#ex_02 .logo li").click(function(){
		var $b_index=$(this).index();
		var $brand_name=$(this).data("data-brand");
		$(".brand").text($brand_name);
		$(".sub-box ul[class^='animation-']").removeClass("active");
		$(".sub-box ul[class^='animation-']").eq($b_index).addClass("active");
		$(".detail").text("000");  //초기화
	});
	
	$("#ex_02 .sub-box li").click(function(){
		var $movie_name=$(this).data("data-name");
		$(".detail").text($movie_name);
	});


	var $sel_01="";  //여행 지역
	var $sel_02="";  //여행 타입
	
	$(".sel_btn").click(function(){
		$(".category_01 input:checked").each(function(){
			$sel_01=$(this).val();
		});
		$(".category_02 input:checked").each(function(){
			$sel_02=$(this).val();
		});
		$(".img-txt").slideUp().slideDown().text("내가 선택한 여행 지역은 "+$sel_01+"이며, 여행 타입은 "+$sel_02+"입니다.");

		//or 검색(둘 중에 하나라도 존재한다면 모두 보여준다.)
	/*	$(".img-cont").hide();
		$(".img-box div[data-region*='"+$sel_01+"']").show();
		$(".img-box div[data-type*='"+$sel_02+"']").show();
*/
		//and 검색(둘 다 일치하는 항목만 보여준다)
		$(".img-cont").hide();
		$(".img-box div[data-region*='"+$sel_01+"'][data-type*='"+$sel_02+"']").show();
	});



















});