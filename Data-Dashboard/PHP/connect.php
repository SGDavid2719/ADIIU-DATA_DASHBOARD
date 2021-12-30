<?php

if (!session_id()) session_start();

$pDBName = (isset($_GET['dbname'])) ? $_GET['dbname'] : 'EMPTY!!!';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = $pDBName;

// Create connection
$connection = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$pTable = (isset($_GET['table'])) ? $_GET['table'] : 'EMPTY!!!';

$query="SELECT*FROM " . $pTable;
$result=mysqli_query($connection, $query);

$data = mysqli_fetch_array($result, MYSQLI_ASSOC);
$rows=mysqli_num_rows($result);
$dataArray = array();
if($rows) {
    while($data != null) {
        // Success
        array_push($dataArray, $data);
        $data = mysqli_fetch_array($result);
    }
    print(json_encode($dataArray));
} else {
    // Error
}
mysqli_free_result($result);
mysqli_close($connection);
?>