<?php
	$con = new mysqli(
		"localhost",
		"root",
		"",
		"copd"
	);

	if($con-> connect_errno) {
		echo "Faild to connect to mysqli because".$con-> connect_error;
	}
?>