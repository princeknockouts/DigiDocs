<?php

	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));
	$question_ans = $data-> question_ans_array;
	$patient_id = $data-> patient_id;

	// code
?>