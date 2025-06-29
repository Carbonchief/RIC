<?php
/*
Name: 			Contact Form
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.3.0
*/

namespace PortoContactForm;

session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));

header('Content-type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/src/PHPMailer.php';
require 'php-mailer/src/SMTP.php';
require 'php-mailer/src/Exception.php';

//Recaptcha validation
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
	'secret' => '6Lcu9h0oAAAAAAI5H83cAChi1IHHg5vZwjOx2tXv',
	'response' => $_POST["g-recaptcha-response"]
);
$options = array(
	'http' => array(
		'method' => 'POST',
		'content' => http_build_query($data)
	)
);
$context = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success = json_decode($verify);

if ($captcha_success->success == false) {
	echo "<p>Please complete the captcha</p>";
} else if ($captcha_success->success == true) {

	// Step 1 - Enter your email address below.
	$email = 'admin@ricdevelopment.co.za';

	// If the e-mail is not working, change the debug option to 2 | $debug = 2;
	$debug = 0;

	// If contact form don't has the subject input change the value of subject here
	$subject = (isset($_POST['subject'])) ? $_POST['subject'] : 'Define subject in php/contact-form.php line 29';

	$message = '';

	foreach ($_POST as $label => $value) {
		$label = ucwords($label);

		// Use the commented code below to change label texts. On this example will change "Email" to "Email Address"

		// if( $label == 'Email' ) {               
		// 	$label = 'Email Address';              
		// }

		// Checkboxes
		if (is_array($value)) {
			// Store new value
			$value = implode(', ', $value);
		}

		$message .= $label . ": " . nl2br(htmlspecialchars($value, ENT_QUOTES)) . "<br>";
	}

	$mail = new PHPMailer(true);

	try {

		$mail->SMTPDebug = $debug; // Debug Mode

		// Step 2 (Optional) - If you don't receive the email, try to configure the parameters below:

		$mail->IsSMTP(); // Set mailer to use SMTP
		$mail->Host = 'smtp.sendgrid.net'; // Specify main and backup server
		$mail->SMTPAuth = true; // Enable SMTP authentication
		$mail->Username = 'apikey'; // SMTP username
		$mail->Password = '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'; // SMTP password
		$mail->SMTPSecure = 'ssl'; // Enable encryption, 'ssl' also accepted
		$mail->Port = 465; // TCP port to connect to

		$mail->AddAddress($email); // Add another recipient

		//$mail->AddAddress('person2@domain.com', 'Person 2');     // Add a secondary recipient
		//$mail->AddCC('person3@domain.com', 'Person 3');          // Add a "Cc" address. 
		//$mail->AddBCC('person4@domain.com', 'Person 4');         // Add a "Bcc" address. 

		// From - Name
		$fromName = (isset($_POST['name'])) ? $_POST['name'] : 'Website User';
		$mail->SetFrom($email, $fromName);

		// Repply To
		if (isset($_POST['email']) && !empty($_POST['email'])) {
			$mail->AddReplyTo($_POST['email'], $fromName);
		}

		$mail->IsHTML(true); // Set email format to HTML

		$mail->CharSet = 'UTF-8';

		$mail->Subject = $subject;
		$mail->Body = $message;

		$mail->Send();
		$arrResult = array('response' => 'success');

	} catch (Exception $e) {
		$arrResult = array('response' => 'error', 'errorMessage' => $e->errorMessage());
	} catch (\Exception $e) {
		$arrResult = array('response' => 'error', 'errorMessage' => $e->getMessage());
	}

	if ($debug == 0) {
		echo json_encode($arrResult);
	}
}