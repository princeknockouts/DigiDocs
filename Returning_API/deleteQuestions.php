<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$succ = array (
		"status" => 200,
		"success" => true,
		"message" => "Question deleted successfully!!",
	);

	$err = array(
		"status" => 500,
		"success" => false,
		"message" => "Some error occured, please try again!!",
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