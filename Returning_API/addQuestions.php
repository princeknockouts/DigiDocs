<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));
	$question = $data-> question;

	$succ = array (
		"success" => true,
		"message" => "Question added successfully!!",
		"http code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "Some problem occurred, please try again after some time!!!",
		"http code"=> 500
	);

	$query = "INSERT INTO cat_quest (question) VALUES ($question)";
	if($con-> query($query)) {
		echo json_encode($succ);
	} else {
		echo json_encode($err);
	}
?>