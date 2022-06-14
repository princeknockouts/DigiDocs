<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$questions_array = array();

	$succ = array (
		"success" => true,
		"questions" => [],
		"message" => "Questions list fetched successfully!!",
		"http code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "",
		"http code"=> 500
	);

	$query = "SELECT * FROM cat_quests WHERE is_delete=0";
	$result = $con-> query($query);
	while($row = $result-> fetch_array()) {
		$tempArray = array();
		$tempArray['question_id'] = $row[0];
		$tempArray['question'] = $row[1];
		array_push($questions_array, $tempArray);
	}
	$succ['questions'] = $questions_array;
	echo json_encode($succ);
?>