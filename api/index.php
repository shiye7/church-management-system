<?php
sleep(3);
$uname = $_POST['uname'];
$pass = $_POST['pass'];
$response = [];
$response['status'] = 200;
$response['success'] = false;

if(strtolower($uname) == 'admin' && strtolower($pass) == 'admin') {
    $response['success'] = true;
}   

echo json_encode($response);
?>