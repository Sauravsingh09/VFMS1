<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "fuel_management";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

$license_plate = $_POST['license_plate'];
$fuel_type = $_POST['fuel_type'];
$last_fuel_date = $_POST['last_fuel_date'];
$fuel_amount = $_POST['fuel_amount'];

$sql = "INSERT INTO vehicles (license_plate, fuel_type, last_fuel_date, fuel_amount)
VALUES ('$license_plate', '$fuel_type', '$last_fuel_date', $fuel_amount)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ". $sql. "<br>". $conn->error;
}

$conn->close();
?>