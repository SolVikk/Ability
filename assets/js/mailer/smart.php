<?php

$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$info = $_POST['info'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'v.solopina@inbox.ru';                 // Наш логин
$mail->Password = 'K2460489';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('v.solopina@inbox.ru', 'Ability');   // От кого письмо
$mail->addAddress('v.solopina@inbox.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новое сообщение пользователя';
$mail->Body    = '
        Пользователь оставил данные <br>
    Имя: ' . $fname . ' <br>
    Фамилия: ' . $lname . ' <br>
    Номер телефона: ' . $phone . '<br>
    E-mail: ' . $email . '<br>
    Сообщение: ' . $info . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
