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
                isset($obj["email"]) && isset($obj["password"])
            ){   
                //set json data into local variables
                $email=$obj["email"];
                $password=$obj["password"];
            }
	        // Get data
			if(
                !empty($email) && !empty($password)
            ){
				$sql = "SELECT admin_id,admin_name,admin_email,created,user_type FROM admin WHERE";
				$sql .=" admin_email='".mysqli_real_escape_string($conn,$email)."' AND admin_password='".mysqli_real_escape_string($conn,$password)."'";
				if($qur = mysqli_query($conn,$sql))
				{
					$res=array();
					
                        if(mysqli_num_rows($qur)>0){
                            while($res=mysqli_fetch_assoc($qur))
                            {
                                //print_r($res2);
                                $error["error_status"]=0;
						        $json = array("error" =>$error ,"user"=>$res );
                            } 
                            
                        }else{
                            $error["error_status"]=1;
                            $error["error_msg"]="Email or Password Invalid";		
                            $json = array("error" =>$error ,"user"=>$res );
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