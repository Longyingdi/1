<?php
header("content-type:text/html;charset=utf-8");
$id=$_GET['id'];
$link=mysqli_connect('localhost','root','','abc');
mysqli_set_charset($link,"utf8");
$sql="select*from xiangqing1 where id=$id";
$result=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($result);
echo json_encode($row);
?>