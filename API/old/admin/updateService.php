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
                isset($obj["serviceId"]) && isset($obj["serviceName"]) && 
                isset($obj["serviceDescription"]) && isset($obj["serviceStatus"])
                
            ){   
                //set json data into local variables
                $serviceId=$obj["serviceId"];
                $serviceName=$obj["serviceName"];
                $serviceDescription=$obj["serviceDescription"];
                $serviceStatus=$obj["serviceStatus"];
            }
	        // Get data
			if(
                !empty($serviceId) && !empty($serviceName) &&  !empty($serviceDescription)
            ){
				$sql = "UPDATE  services SET";
				$sql .= " service_name='".mysqli_real_escape_string($conn,$serviceName)."', service_description='".mysqli_real_escape_string($conn,$serviceDescription)."', service_status='".mysqli_real_escape_string($conn,$serviceStatus)."' WHERE service_id='".mysqli_real_escape_string($conn,$serviceId)."'";
				
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
					$error["error_msg"]="Service Updation Failed";
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