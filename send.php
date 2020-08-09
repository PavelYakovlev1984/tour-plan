<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'pavel.iakovlev.1984@gmail.com'; // Логин на почте
    $mail->Password   = 'jkzjkzjkz'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('pavel.iakovlev.1984@gmail.com', 'Павел Яковлев'); // Адрес самой почты и имя отправителя

    // Получатель письма 
    $mail->addAddress('pavel.yakovlev.1984@bk.ru'); 


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');



const maskPhone = (
    selector,
    defaultBorderColor,
    masked = '+7 (___) ___-__-__',
    clearLength = 5
  ) => {
    const elem = document.querySelector(selector);
  
    const addStyle = () => {
      const style = document.createElement('style');
      style.textContent = `
        .mask__error-input {
          border: 2px solid red !important;
        }   
        .mask__default-input {
          border: 1px solid ${defaultBorderColor} !important;
        }   
        .mask__success-input {
          border: 2px solid green !important;
        }   
      `;
  
      document.head.appendChild(style);
    };
  
    const error = () => {
      event.target.classList.add('mask__error-input');
      event.target.classList.remove('mask__default-input');
      event.target.classList.remove('mask__success-input');
      //event.target.style.border = '2px solid red'
    };
  
    const defaultStyle = () => {
      event.target.classList.remove('mask__error-input');
      event.target.classList.add('mask__default-input');
      //event.target.style.border = `1px solid ${defaultBorderColor}`;
    };
  
    const success = () => {
      event.target.classList.remove('mask__error-input');
      event.target.classList.add('mask__success-input');
      //event.target.style.border = '2px solid green'
    };
  
    const focus = () => {
      const indexOfUnderscores = masked.indexOf('_');
      if (elem.value < 1) {
        elem.value = masked.slice(0, indexOfUnderscores);
      }
    };
  
    const input = () => {
      const lastSimbol = event.target.value.slice(-1);
  
      const getActualValue = () => {
        let indexOfUnderscores = 0,
          template = masked,
          countryCode = template.replace(/\D/g, ""),
          numberValue = elem.value.replace(/\D/g, "");
  
        let actualValue = template.replace(/[_\d]/g, function (e) {
          return indexOfUnderscores < numberValue.length ? numberValue[indexOfUnderscores++] || countryCode[indexOfUnderscores] : e;
        });
  
        indexOfUnderscores = actualValue.indexOf("_");
  
        indexOfUnderscores !== -1 ? actualValue = actualValue.slice(0, indexOfUnderscores) : success();
  
        return actualValue;
      };
  
      elem.value = getActualValue();
  
      elem.value.length !== masked.length ?
        /\D/g.test(lastSimbol) ? error() : defaultStyle() :
        success();
    };
  
    const blur = () => {
      if (elem.value.length !== masked.length) {
        error();
        if (elem.value.length < clearLength) {
          elem.value = "";
        }
      }
    };
  
    const eventListeners = () => {
      elem.addEventListener('focus', focus);
      elem.addEventListener('input', input);
      elem.addEventListener('blur', blur);
    };
  
    addStyle();
    eventListeners();
  };
  
  maskPhone('.input', '#000');





  


