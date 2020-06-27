<?php

$recepient = "work.alvor.it@gmail.com";
$siteName = "Portfolio";

$_POST = json_decode(file_get_contents("php://input"), true);

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$subject = "=?utf-8?B?".base64_encode("Request from the site: \"$siteName\"")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

mail($recepient, $subject, $message, $headers);

?>
