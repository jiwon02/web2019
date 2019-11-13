<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>welcome</title>
	<style>
		p{color: #00f;}
	</style>
</head>
<body>
	<?
	$name = $_GET["myname"];
	$email = $_GET["email"];
	?>

	이름 : <?echo $name;?><p>님 반갑습니다.</p><br>
	이메일 : <?echo $email;?>

</body>
</html>