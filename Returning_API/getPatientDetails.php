<?php
	include "dbcon.php";

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$succ = array (
		"status" => 200,
		"success" => true,
		"patient" => [],
		"message" => "User Logged in successfully",
	);

	$err = array(
		"status" => 500,
		"success" => false,
		"message" => "Some error occured, please try agian after some time!!",
	);

	$data = file_get_contents("php://input");
	$patient_id = $data-> patient_id;

	$patients_data = array();

	$query = "SELECT * FROM patient";
	$result = $con-> query($query);
	while($row = $result-> fetch_row()) {
		$patients_data ->id = $row[0];
		$patients_data ->name = $row[1]." ".$row[2];
		$patients_data ->age = $row[3];
		$patients_data ->contact = $row[5];
		$patients_data ->email_id = $row[6];
		$patients_data ->treatment_complete = $row[7];

		
		$query1 = "SELECT * FROM patient_spirometry_details WHERE patient_id=$row[0]";
		$result1 = $con-> query($query1);
		
		while($row1 = $result2-> fetch_row()) {
			$spirometry_details = array();
			if($row1[8] == 1) {
				$spirometry_details-> fev1 = $row1[2];
				$spirometry_details-> fev_score = $row1[3];
				$spirometry_details-> fvc = $row1[4];
				$spirometry_details-> fef = $row1[5];
				$spirometry_details-> spiro_gold_grade = $row1[6];
				$spirometry_details-> type = $row1[7];
				$patients_data-> pre_spiro = $spirometry_details;
			}else {
				$spirometry_details-> fev1 = $row1[2];
				$spirometry_details-> fev_score = $row1[3];
				$spirometry_details-> fvc = $row1[4];
				$spirometry_details-> fef = $row1[5];
				$spirometry_details-> spiro_gold_grade = $row1[6];
				$spirometry_details-> type = $row1[7];
				$patients_data-> post_spiro = $spirometry_details;
			}
		}

		$query2 = "SELECT * FROM severity WHERE patient_id=$row[0]";
		$result2 = $con-> query($query2);
		
		while($row2 = $result2-> fetch_row()) {
			$severity = array();
			$severity-> method = $row2[2];
			$severity-> excerbation = $row2[3];
			$severity-> hospitalization = $row2[4];
			$severity-> gold_grade = $row2[5];
			$severity-> wbc_count = $row2[6];
			$severity-> xray_findings = $row2[7];
			$severity-> ecg = $row2[8];
			$severity-> echo2d = $row2[9];
			$severity-> pasp = $row2[10];
			$severity-> other_investigation = $row2[11];
			$severity-> eos_count = $row2[12];
			$severity-> initial_treatment = $row2[13];
			$patients_data-> severity = $severity;
		}

		$query3 = "SELECT * FROM cat_ans WHERE patient_id=$row[0]";
		$result3 = $con-> query($query3);

		$ans_list = array();
		while($row3 = $result3-> fetch_row()) {
			$ans = array();
			$ans-> quest_id = $row3[2];
			$ans-> ans = $row3[3];

			array_push($ans_list, $ans);
		}
		$patients_data-> cat_ans = $ans_list;
	}

	$succ-> patient = $patients_data;
	echo json_encode($succ);
?>