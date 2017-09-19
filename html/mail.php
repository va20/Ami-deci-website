<?php
$redirect="http://localhost:63342/ami-decoration/html/mail.php";
$client_id="690912620362-tq8bu8brs4o4fhstv0g6qp0hkqe3e5ec.apps.googleusercontent.com";
$client_secret="8qwmFH5Wp_-DS4a8hL6mgEJK";
$postdata = file_get_contents("php://input");
echo $_POST['name'];
echo $_POST['total'];
$data=array();
parse_str($postdata,$data);
$name = $data["name"];
$mailto = $data["mail"];
$mobile = $data["mobile"];
$message='Bonjour '.$name.',<br/> 
        <br/>
        Le montant estimé est de '.$total.' € .Attention, ce devis est à titre indicatif et ne peut être 
        en aucun cas considéré comme officiel.<br/> 
        <br/>
        Pour plus d\'information veuillez nous contacter.<br/>
        <br/>
        <br/>
        Cordialement,<br/>
        <br/>
        AMI DECO<br/>
        72, rue de Rome 75008 Paris<br/>
        06 20 71 74 08<br/>
        06 69 77 37 86<br/>
        ami.deco2@gmail.com<br/>
        ';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer-6.0/src/PHPMailer.php';
require '../PHPMailer-6.0/src/Exception.php';
require '../PHPMailer-6.0/src/OAuth.php';
require '../PHPMailer-6.0/src/POP3.php';
require '../PHPMailer-6.0/src/SMTP.php';

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->CharSet='UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'tls://smtp.gmail.com:587';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'ami.deco.send@gmail.com';                 // SMTP username
    $mail->Password = 'N0uveauC0mpte';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('ami.deco.send@gmail.com', 'AMI DECO');
    $mail->addAddress($mailto,$name);     // Add a recipient
    $mail->addAddress($mailto);               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Devis personnalisé';
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
    //header('Location: http://localhost:63342/ami-decoration/html/devisPersonal.html');
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}