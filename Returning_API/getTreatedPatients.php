<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$patients_array = array();

	$succ = array (
		"success" => true,
		"patients" => [],
		"message" => "Treated patients list fetched successfully!!",
		"http code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "",
		"http code"=> 500
	);

	$query = "SELECT * FROM patient WHERE is_delete=0 AND treatment_complete=1";
	$result = $con-> query($query);
	while($row = $result-> fetch_array()) {
		$tempArray = array(
			"patient_id"=> $row[0],
			"first_name"=> $row[1],
			"last_name"=> $row[2],
			"age"=> $row[3],
			"gender"=> $row[4],
			"contact"=> $row[5],
			"email_id"=> $row[6],
		);
		array_push($patients_array, $tempArray);
	}
	$succ['patients'] = $patients_array;
	echo json_encode($succ);
?>