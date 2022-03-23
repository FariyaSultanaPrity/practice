<?php 
include("../model/model.php");
if(isset($_POST["Submit"])){

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$age=$_POST['age'];
$salary=$_POST['salary'];
if(empty($fname) || empty($lname) || empty($age) || empty($salary)  ){

    echo "please insert all field";
}
else{
  $mydb=new DB();
  $conobj=$mydb->opencon();
  $mydb->InsertData($fname,$lname,$age, $salary,"person",$conobj);
  $mydb->closecon($conobj);

}





}



?>