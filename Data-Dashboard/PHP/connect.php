<?php

// Starts session
if (!session_id()) session_start();

// Gets the posted data from Main.js (database name)
$pDBName = (isset($_GET['dbname'])) ? $_GET['dbname'] : "EMPTY!!!";

// DB variables
$lServername = "localhost";
$lUsername = "root";
$lPassword = "";
$lDBname = $pDBName;

// Create connection
$lConnection = mysqli_connect($lServername, $lUsername, $lPassword, $lDBname);
// Check connection
if ($lConnection->connect_error) {
    die("Connection failed: " . $lConnection->connect_error);
}

// Gets the posted data from Main.js (table name)
$pTable = (isset($_GET['table'])) ? $_GET['table'] : "EMPTY!!!";

// Selects data
$lQuery="SELECT*FROM " . $pTable;
// Tries the requested query
$lResult=mysqli_query($lConnection, $lQuery);

// Fetches the first row
$lData = mysqli_fetch_array($lResult, MYSQLI_ASSOC);
// Fetches the number of rows
$lRows=mysqli_num_rows($lResult);
$lDataArray = array();
// If there are data rows
if($lRows) {
    // Iterates over the rows
    while($lData != null) {
        // Success
        array_push($lDataArray, $lData);
        // Fetches the next row
        $lData = mysqli_fetch_array($lResult);
    }
    // Returns the array as a JSON
    print(json_encode($lDataArray));
} else {
    // Error
    die("No data!");
}
// Ends connection
mysqli_free_result($lResult);
mysqli_close($lConnection);
?>