<?php
header("content-type:text/html;charset=utf-8");
$u=$_GET['username'];
$p=$_GET['password'];
$link=mysqli_connect('localhost','root','','abc');
mysqli_set_charset($link,"utf8");
$sql="select * from user where name='$u' and pass='$p'";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
    // setcookie('name',$u,time()+600);
    echo 1;
}else{
    echo 0;
}

?>