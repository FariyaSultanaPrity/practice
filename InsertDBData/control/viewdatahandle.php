<?php
include("../model/model.php");

$fname=$lname=$age="";

if(isset($_POST["search"])){
    echo "hello";
    $mydb=new DB();
    $conobj=$mydb->opencon();
    $results=$mydb->searchData("person",$conobj,$_POST["searchdata"]);
    if ($results-> num_rows>0){
     echo "hello";
      while ($row=$results->fetch_assoc()){

    
     $fname=$row["fname"];
      $lname=$row["lname"];
     $age=$row["age"];

      }



    }
    else{
        echo "no data found";
    }

}

if(isset($_POST["update"])){

    $mydb=new DB();
    $conobj=$mydb->opencon();
    $mydb->updateData("person",$conobj,$_POST["fname"],$_POST["lname"],$_POST["age"]);





}

?>