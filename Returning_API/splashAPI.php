<?php
	include "dbcon.php";

	header("Content-type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));
	$user_id = $data-> user_id;
	$user_token = $data-> user_token;

	$succ = array (
		"success" => true,
		"user_id" => "",
		"user_token" => "",
		"weeks_patients" => "",
		"months_patients" => "",
		"total_patients" => "",
		"diagnosed_patients" => "",
		"message" => "User Verified in successfully!!",
		"http_code"=> 200
	);

	$err = array(
		"success" => false,
		"message" => "",
		"http_code"=> 500
	);

	$current_date = date("Y-m-d");
	$last_week_date = date("Y-m-d", strtotime("-7 days"));
	$last_month_date = date("Y-m-d", strtotime("-30 days"));

	$query = "SELECT user_token FROM user_details WHERE id=$user_id";
	$result = $con-> query($query);
	while($row = $result-> fetch_row()) {
		if (strcmp($row[0], $user_token) == 0) {
			$query2 = "SELECT COUNT(id) FROM patient WHERE created BETWEEN $last_month_date AND $current_date AND is_delete=0";
			$result2 = $con-> query($query2);
			while($row2 = $result2-> fetch_row()) {
				$succ['months_patients'] = $row2[0];
			}
			$query3 = "SELECT COUNT(id) FROM patient WHERE created BETWEEN $last_week_date AND $current_date AND is_delete=0";
			$result3 = $con-> query($query3);
			while($row3 = $result3-> fetch_row()) {
				$succ['weeks_patients'] = $row3[0];
			}
			$query4 = "SELECT COUNT(id) FROM patient WHERE is_delete=0";
			$result4 = $con-> query($query4);
			while($row4 = $result4-> fetch_row()) {
				$succ['total_patients'] = $row4[0];
			}
			$query5 = "SELECT COUNT(id) FROM patient WHERE treatment_complete=1 AND is_delete=0";
			$result5 = $con-> query($query5);
			while($row5 = $result5-> fetch_row()) {
				$succ['diagnosed_patients'] = $row5[0];
			}
			echo json_encode($succ);
		} else {
			$err["http_code"] = 501;
			$err["message"] = "You have logged in from some other device, please login again in this device!!";
			header('HTTP/1.1 501 Token Invalid error');
			echo json_encode($err);
		}
	}
?>