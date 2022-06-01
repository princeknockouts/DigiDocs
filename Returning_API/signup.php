<?php
	include("dbcon.php");

	header("Content-Type: application/json");
	date_default_timezone_set("Asia/Calcutta");

	$data = json_decode(file_get_contents("php://input"));
	$data = json_decode(file_get_contents("php://input"));

	$first_name = $data-> first_name;
	$last_name = $data-> last_name;
	$contact = $data-> contact;
	$email_id = $data-> email_id;
	$password = $data-> password;

	function generateRandomString($length) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}

	function checkToken($token, $connection) {
		while (true) {
			$query2 = "SELECT COUNT(id) FROM user_details WHERE user_token=$token";
			$result2 = $connection-> query($query2);
			if($result2) {
				$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
				$charactersLength = strlen($characters);
				$randomString = '';
				for ($i = 0; $i < $length; $i++) {
					$randomString .= $characters[rand(0, $charactersLength - 1)];
				}
				checkToken($randomString, $connection);
			} else {
				return $token;
			}
		}
	}

	$succ = array (
		"status" => 200,
		"success" => true,
		"user_id" => "",
		"user_token" => "",
		"user_name" => "",
		"contact" => "",
		"email" => "",
		"message" => "User Signed Up successfully",
	);

	$err = array(
		"status" => 500,
		"success" => false,
		"message" => "Some error occured please try again",
	);

	$token = generateRandomString(16);
	$final_token = checkToken($token, $con);

	$query = "SELECT COUNT(id) FROM user_details WHERE email_id='$email_id'";
	$result = $con-> query($query);
	$row = $result-> fetch_row();

	if ($row[0] > 0) {
		$err["status"] = 502;
		$err["message"] = "Email id already exists, please try with some other email!";
		echo json_encode($err);
	} else {
		$query2 = "INSERT INTO user_details (user_token, first_name, last_name, contact, email_id, password) VALUES ('$final_token', '$first_name', '$last_name', $contact, '$email_id', '$password')";
		if ($con-> query($query2)) {
			$query3 = "SELECT id, user_token, first_name, last_name, contact, email_id FROM user_details WHERE email_id='$email_id' AND is_delete=0";
			$result3 = $con-> query($query3);
			while($row3 = $result3-> fetch_row()) {
				$succ['user_id'] = $row3[0];
				$succ['user_token'] = $row3[1];
				$succ['user_name'] = $row3[2]." ".$row3[3];
				$succ['contact'] = $row3[4];
				$succ['email'] = $row3[5];
			}
			echo json_encode($succ);
		} else {
			echo json_encode($err);
		}
	}

?>