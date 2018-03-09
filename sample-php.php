<?php 	sleep(1);

		$value = $_POST['value'];
		if($value){
			return $value;
		}else{
			 header('HTTP/1.0 400 Bad Request', true, 400);
        	 echo "This field is required!";
		}
 ?>