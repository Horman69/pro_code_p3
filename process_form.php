<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    
    // Адрес, на который будут отправляться сообщения
    $to = "web3.3dew@gmail.com";
    
    // Тема письма
    $subject = "Новая заявка с сайта";
    
    // Текст сообщения
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";
    
    // Заголовки письма
    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["message" => "Заявка успешно отправлена!"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Ошибка при отправке заявки"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Метод не разрешен"]);
}