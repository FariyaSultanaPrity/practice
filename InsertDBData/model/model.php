<?php
class DB{
    function opencon(){
        $DBHostname="localhost";
        $DBUsername="root";
        $DBpass="";
        $DBName="testdb2";
        $conn=new mysqli($DBHostname,$DBUsername,$DBpass,$DBName);
        if($conn->connect_error){
            echo "can't create connection object".$conn->connect_error;

        }
        return $conn;

    }

    function InsertData($fname,$lname,$age,$salary,$tablename,$conn){
        $sqlstr="INSERT INTO $tablename (fname,lname,age,salary) VALUES ('$fname','$lname',$age,$salary)";
        if($conn->query($sqlstr)===TRUE){
        
        echo "Data Inserted";
        
        
        }
        else{
            echo "cant insert".$conn->error;
        }

    }

    function FetchData($tablename,$conn){
        $sqlstr="SELECT * from $tablename";
        $results=$conn->query($sqlstr);
        
         
        return $results;  
        
    }
    function searchData($tablename,$conn,$fname){

        $sqlstr="SELECT * FROM $tablename WHERE fname='$fname'";
        $results=$conn->query($sqlstr);
        
         
        return $results;  
    }




    function updateData($tablename,$conn,$fname,$lname,$age){
        $sqlstr="UPDATE $tablename SET fname='$fname', lname='$lname', age=$age WHERE fname='$fname'";
        if($conn->query($sqlstr)===TRUE){
        
            echo "Data Updated";
            
            
            }
            else{
                echo "cant update".$conn->error;
            }

    }
   function closecon($conn){
    $conn->close();
   }

}
?>