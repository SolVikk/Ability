<?php
                    /**
                *isset() - проверяет на наличие переменной/значения (равно NULL или нет)
                *empty() - проверяет переменную на пустоту. Обращаю внимание, 0 - для нее тоже пустота!
                    **/
if( isset($_POST['firstname'],$_POST['lastname'],$_POST['phone'],$_POST['email'],$_POST['info']) ) {
 $firstname = trim($_POST['firstname']); #убираем пробелы по краям, если они есть
 $lastname = trim($_POST['lastname']); #убираем пробелы по краям, если они есть
 $phone = trim($_POST['phone']); #убираем пробелы по краям, если они есть
 $email = trim($_POST['email']); #убираем пробелы по краям, если они есть
 $info = trim($_POST['info']); #убираем пробелы по краям, если они есть

  if(empty($email) ) { //если что то не ввели
   echo 'Вы заполнили не все поля!';
  }
  else { //все поля заполнены, отправляем
   $mailto = 'v.solopina@inbox.ru';
   $subject = 'Сообщение с сайта';
//формируем текст сообщения
   $message  = 'Имя: <b>'.$firstname.'</b><br />';
   $message .= 'Фамилия: <b>'.$lastname.'</b><br />';
   $message .= 'Телефон: <b>'.$phone.'</b><br />';
   $message .= 'Email: <a href="mailto:' . $email . '">' . $email . '</a><br />';
   $message .= 'Дополнительная информация: <b>'.$info.'</b><br />';



/* //формируем заголовки (кодировку только, остальное сами добавите по желанию) */
   $headers = 'Content-type: text/html; charset=utf-8';
//отправляем письмо
   $mail = mail($mailto, $subject, $message, $headers);
//проверяем отправку
    if(TRUE === $mail) echo '<div id="mail-send" style="opacity: 0.998695;">Thank you for your message</div>';
    else echo '<h2>Произошла ошибка при отправке сообщения.</h2>';
 //проверку можно записать короче при помощи тернарного оператора, вот так:
//  echo (TRUE === $mail) ? 'Ваше сообщение успешно отправлено!' : 'Произошла ошибка при отправке сообщения.' ;
//тогда нужно будет раскомментировать строчку выше и закомментировать строчки выше с проверкой
  }


}
?>
