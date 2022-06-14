<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$succ = array (
		"success" => true,
		"message" => "Question deleted successfully!!",
		"http code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "Some error occured, please try again!!",
		"http code"=> 500
	);

	$data = json_decode(file_get_contents("php://input"));
	$quest_id = $data-> question_id;

	$query = "UPDATE cat_quests SET is_delete=1 WHERE id=$quest_id";
	if($con-> query($query)) {
		echo json_encode($succ);
	} else {
		echo json_encode($err);
	}
?>