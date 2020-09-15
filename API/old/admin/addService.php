<?php
// Include database connection.php
include_once('../includes/connection.php');
header('Content-type: application/json');

$error=array("error_status"=>1,"error_msg"=>"");

if($_SERVER['REQUEST_METHOD'] == "POST" ){
			//decode json data
			$obj=json_decode(file_get_contents('php://input'), true);
            //var_dump($obj);
			if(
                isset($obj["serviceName"]) && isset($obj["serviceDescription"]) 
                
            ){   
                //set json data into local variables
                $serviceName=$obj["serviceName"];
                $serviceDescription=$obj["serviceDescription"];
            }
	        // Get data
			if(
                !empty($serviceName) &&  !empty($serviceDescription)
            ){
				$sql = "INSERT INTO services SET";
				$sql .= " service_name='".mysqli_real_escape_string($conn,$serviceName)."', service_description='".mysqli_real_escape_string($conn,$serviceDescription)."'";
				
				if($qur = mysqli_query($conn,$sql))
				{
					$last_id = $conn->insert_id;
					$res=array();
					if($qur)
					{
						$error["error_status"]=0;
						$res["service_id"]=$last_id;
						$json = array("error" =>$error ,"data"=>$res );
					}
					else{
					$error["error_msg"]="Service Insertion Failed";
					$json = array("error" =>$error,"data"=>$res );
					}
				}else{
					$error["error_msg"]=mysqli_error($conn);
					$json = array("error" =>$error);
				}
			}
			else{
				$error["error_msg"]="all fields must be filled with values";
			$json = array("error" =>$error);
			}
}else{
	$error["error_msg"]="Request method not accepted";
	$json = array("error" =>$error);
}
   mysqli_close($conn);
/* Output header */
	header('Content-type: application/json');
	echo json_encode($json);
?>