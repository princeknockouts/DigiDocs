<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));
	$question = $data-> question;

	$succ = array (
		"status" => 200,
		"success" => true,
		"message" => "Question added successfully!!",
	);

	$err = array(
		"status" => 500,
		"success" => false,
		"message" => "Some problem occurred, please try again after some time!!!",
	);

	$query = "INSERT INTO cat_quest (question) VALUES ($question)";
	if($con-> query($query)) {
		echo json_encode($succ);
	} else {
		echo json_encode($err);
	}
?>