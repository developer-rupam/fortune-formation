<?php 

include_once('environment.php');
header("Access-Control-Allow-Origin: *");

if($PRODUCTIONMODE == true){
    /** Production Server **/
    $servername = "localhost";
    $username = "id11886609_developer";
    $password = "Abcd@123";
    $db_name = "id11886609_crypto_database";
}else{
  /** Development Server **/
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db_name="fortune_formation";

}

  
  header('Content-Type: text/html; charset=utf-8');
  $conn = mysqli_connect($servername, $username, $password)or die("Unable to connect to MySQL"); // Create connection
  $selected = mysqli_select_db($conn,$db_name) or die("Could not select vespac");	//select a database to work with
  mysqli_set_charset($conn,'utf8' );
  
?>