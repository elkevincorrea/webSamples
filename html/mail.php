<?php 
	$name = $_POST['nombre'];
	$email = $_POST['email'];
	$message = $_POST['mensaje'];
	$from="From: Website.com";
	$to = "kevinjoan16@gmail.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	$body = "From $name\n E-mail: $email\n message:\n $message";
?>

<?php
	if($_POST['submit']){
		if(mail($to, $subject, $body, $fromm)){
			echo "string";
		}else{
			echo "error";
		}
	}
?>