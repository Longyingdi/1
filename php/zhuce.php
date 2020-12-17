<?php
header('content-type:text/html;charset=utf-8');
$link=mysqli_connect("localhost",'root','','abc');
//abc是我存储账号、密码的数据库名称
mysqli_set_charset($link,'utf8');
$u=$_GET['username'];
$p=$_GET['password'];
$sql="insert into user(name,pass) values('$u','$p')";
$result=mysqli_query($link,$sql);
?>