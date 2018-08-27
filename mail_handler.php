<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 3;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'harrisonchenserver@gmail.com';  // sender's email address (shows in "From" field)
$mail->FromName = 'Portfolio Server';   // sender's name (shows in "From" field)
$mail->addAddress('harrison8024@gmail.com', 'Harrison');  // Add a recipient - MY ACTUAL EMAIL
//$mail->addAddress('ellen@example.com');                        // Name is optional
$mail->addReplyTo($_POST['email']);                          // Add a reply-to address - PERSON OF INTEREST'S EMAIL
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Received email from '.$_POST['name'];
$currentDate = date('Y-m-d H:i:s');

$mail->Body    = "
    <div>Name: {$_POST['name']} </div>
    <div>Email: {$_POST['email']}</div>
    <div>Subject: {$_POST['subject']}</div>
    <div>Message: {$_POST['body']}</div>
    <div>Meta data: {$_SERVER['REMOTE_ADDR']} at {$currentDate} </div>
";
$mail->AltBody = "
    Name: {$_POST['name']}
    Email: {$_POST['email']}
    Subject: {$_POST['subject']}
    Message: {$_POST['body']}
    Meta data: {$_SERVER['REMOTE_ADDR']} at {$currentDate}
";
$output = [
    'success'=>false,
    'message'=>''
];
if(!$mail->send()) {
    $output['message'] = 'Message could not be sent.';
    $output['error'] = 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $output['message'] = 'Message has been sent';
    $output['success'] = true;
}
?>
