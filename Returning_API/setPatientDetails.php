<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));

	$first_name = $data-> first_name;
	$last_name = $data-> last_name;
	$age = $data-> age;
	$contact = $data-> contact;
	$email = $data-> email;

	$succ = array (
		"success" => true,
		"message" => "Patient added successfully!!",
		"http code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "Some error occured please try again after sometime!!",
		"http code"=> 500
	);

	$current_time = date("Y-m-d H:i:s");

	$query = "INSERT INTO patient (first_name, last_name, age, contact, email_id, created) VALUES ('$first_name', '$last_name', $age, $contact, '$email', '$current_time')";
	if ($con-> query($query)) {
		echo json_encode($succ);
	} else {
		echo json_encode($err);
	}

?>