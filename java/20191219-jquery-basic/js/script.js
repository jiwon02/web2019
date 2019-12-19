
$(document).ready(function(){

$(".class_sel").css("font-size", "40px");
$(".el_selector p").css("color", "#00ff00");
$(".contain_selector h4.contain").css("background", "#ffffaa");
$("#child").parent().css("background", "#ffaaff");
$(".children_selector .parent").children().css("color", "red");
$(".children_selector .parent").children("#child").css("background", "#aaffaa");
$(".my_sel").prev().css("border-bottom", "2px dashed #00ffff");
$(".my_sel").prev().prev().css("background", "#aaffff");
$(".my_sel").next().children().css("color", "#0000ff");
$(".my_sel").prevAll().css("font-size", "24px");
$(".my_sel").nextAll().css("background", "#aaaaff");
$(".my_sel").siblings().css("border-left", "8px solid #ff0000");  //본인을 제외한 모든 형제들을 선택
$(".my_sel").siblings(".last_brother").css("border-bottom", "8px solid #ffff00");
//형제 중에서 특정적인 요소만을 선택 가능
$(".my_unit").prevUntil(".prev").css("color", "#ff0000");
$(".my_unit").nextUntil(".next").css("color", "#0000ff");
$(".my_menu").closest("li").css("background", "#aaffaa");
$(".my_span").closest("li").next().children().css("color", "red");

$(".first_sel p").first().css("color", "red");
$(".first_sel p:first").css("background", "#aaa");
$(".first_sel p").last().css("color", "purple");
$(".first_sel p:last").css("background", "#aaa");
$(".first_sel p").eq(2).css("color", "yellow");
$(".first_sel p:lt(4)").css("font-size", "28px");
$(".first_sel p:gt(4)").css("font-size", "12px");

$("#wrap a[href]").css("color", "green");
$("#wrap a[target='_blank']").css("background", "#ffff00");
$("#wrap a[href$='net']").css("font-style", "italic");
$("#wrap a[href*='go']").css("color", "blue");
$("#wrap a[href^=http]").css("border", "2px solid green");

var $val_in = $("#wrap input[type='text']").val();
//input 요소 중 typ=text인 입력상자가 갖고 있는 value 값을 가져오겠다
console.log($val_in);

var $sel_in=$("#fav_region option:selected").val();
console.log($sel_in);

var $sel_chk=$("#wrap input[type='checkbox']:checked").val();
console.log($sel_chk);

//내부 텍스트 탐색
$("#cont_search p:contains('콘텐츠-02')").css("color", "red");
$("#cont_search p.cont01").has("span").css("border-bottom", "4px solid #0000ff");
$("#cont_search p.cont01").not(":last").css("font-style", "italic");



});