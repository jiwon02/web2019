var $date = new Date();
var year=$date.getFullYear();
var month=$date.getMonth()+1;
var date=$date.getDate();
var day=$date.getDay();
var $arr_day=["일", "월", "화", "수", "목", "금", "토"];
var $y=$arr_day[day];
var hour=$date.getHours();
var minute=$date.getMinutes();
var second=$date.getSeconds();

var $result=document.getElementById("result_01");
$result.innerHTML=year+"년 "+month+"월 "+date+"일 "+$y+"요일, "+hour+" : "+minute+" : "+second;

var $str= "welcome to my home";
var $txt= $str.substring(0, $str.length-4);
var $result_02=document.getElementById("result_02");
$result_02.innerHTML=$txt+"homepage";

var $arr_01=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $result_03=document.getElementById("result_03");
$result_03.innerHTML="<img src='img/"+$arr_01[0]+"'></img>"+"<img src='img/"+$arr_01[1]+"'></img>"+"<img src='img/"+$arr_01[2]+"'></img>"

var $kakao_01=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $kakao_02=["카카오 소풍", "카카오 나들이", "카카오 휴가"];
var $result_04=document.getElementById("result_04");
$result_04.innerHTML="<div class='kakao_bx'><img src='img/"+$kakao_01[0]+"'></img><span>"+$kakao_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[1]+"'></img><span>"+$kakao_02[1]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[2]+"'></img><span>"+$kakao_02[2]+"</span></div>, <br>";

var $img_01=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"]
var i=0;
var $result_05=document.getElementById("result_05");
$result_05.innerHTML="<img id='img' src='img/"+$img_01[i]+"'></img>";
function click_01(){
	var $img_05=document.getElementById("img");
	i++;  //1, 2, 3,4,5,6,7,8
	$img_05.setAttribute("src", "img/"+$img_01[i]);
	if(i>=8){
		i= -1;
	}
}

var k=1;
var $res_06=document.getElementById("res_06");
function subNext(){
	$res_06.setAttribute("src", "img/sub_0"+k+".jpg");
	k++;
	if(k>3){
		k=1;
	}
}
