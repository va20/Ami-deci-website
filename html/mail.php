<?php
$name = $_POST['name'];
$mailto = $_POST['mail'];
$mobile = $_POST['mobile'];
require '../PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer();
$mail ->IsSmtp();
$mail ->SMTPDebug = 1;
$mail ->SMTPAuth = true;
$mail ->SMTPSecure = 'ssl';
$mail ->Host = "smtp.gmail.com";
$mail ->Port = 465; // or 587
$mail ->IsHTML(true);
$mail ->Username = "yourmail@gmail.com";
$mail ->Password = "yourpassword";
$mail ->SetFrom("yourmail@gmail.com");
$mail ->Subject = "sub";
$mail ->Body = "message";
$mail ->AddAddress($mailto);

if(!$mail->Send())
{
    echo "Mail Not Sent";
}
else
{
    echo "Mail Sent";
}
