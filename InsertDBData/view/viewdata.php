<?php 
include ("../control/viewdatahandle.php");

?>
<html>


<body>
<form action="" method="post"> 

<input type="text" name="searchdata"> </br>

<input type="submit" name="search"   value="Search Data"> </br>
</form>



<form action="" method="post">  

First Name:
<input type="text" name="fname" value="<?php echo $fname;?>"> </br>
Last Name:
<input type="text" name="lname" value="<?php echo $lname;?>"></br>
Age:
<input type="number" name="age" value="<?php echo $age;?>"></br>


<input type="submit" name="update"   value="Update Data"> </br>
</form>




</body>

</html>

