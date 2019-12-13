var $num01 = 36;
var $num02 = 12;
var $sum =  $num01+$num02;
document.write("sum = "+ $sum, "<br>");
var $substract = $num01 - $num02;
document.write("substract = "+$substract, "<br>");
var $multiply = $num01*$num02;
document.write("multiply = "+$multiply, "<br>");

var $num03 = 36;
var $num04 = 12;
var $result = $num03+=$num04;
document.write("$result(+=) = "+$result, "<br>");
var $result = $num03-=$num04;
document.write("$result(-=) = "+$result, "<br>");
var $result = $num03*=$num04;
document.write("$result(*=) = "+$result, "<br>");
var $result = $num03/=$num04;
document.write("$result(/=) = "+$result, "<br>");
var $result = $num03%=$num04;
document.write("$result(%=) = "+$result, "<br>");

/*
var $width = Number(prompt("브라우저의 가로 값(px)"));
var $height = Number(prompt("브라우저의 세로 값(px)"));
var $multi = $width*$height;
document.write("브라우저의 총 면적(px) : "+$multi, "<br>");
*/

/*
덧셈의 경우 문제가 될 수 있으니 Number로 빼줘야 한다.
var $width = Number(prompt("브라우저의 가로 값(px)"))
var $height = Number(prompt("브라우저의 세로 값(px)"))
var $multi = $width*$height
document.write("브라우저의 총 면적(px) : "+$multi)
*/

var $t = "<table border='1'>";
$t+="<tr><td>1</td><td>2</td><td>3</td></tr>";
$t+="<tr><td>4</td><td>5</td><td>6</td></tr>";
$t+="</table>";
document.write($t);

/*
var $num_in = prompt("네 자리 이상의 수를 입력하세요");
 if($num_in%7 ==0 ){
 	document.write("입력한 "+$num_in+"은(는) 7의 배수입니다.")
 }else{
 	document.write("입력한 "+$num_in+"은(는) 수는 7의 배수가 아닙니다.")
 }
 */

 for($bx_num=1;$bx_num<=10;$bx_num++){ 
	document.write("<div class='bx_num'></div>");
 }

document.write("<div style='clear:both'></div>")  
 var $bx_limit = prompt("보여줄 박스의 개수를 입력하세요");   
 for($m=1; $m<=$bx_limit; $m++){  //$bx_limit=0;$bx_limit<4
	document.write("<div style='width:100px;height:100px;background:#aaffff;margin:5px;float:left;'></div>")
 }