<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "peliculas";

// Create connection
$connection = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$query="SELECT*FROM pelis";
$result=mysqli_query($connection, $query);

$data = mysqli_fetch_array($result);
$rows=mysqli_num_rows($result);
if($rows) {
    while($data != '') {
        // Success
        print_r($data);
        $data = mysqli_fetch_array($result);
    }
    
} else {
    // Error
}
mysqli_free_result($result);
mysqli_close($connection);
?>