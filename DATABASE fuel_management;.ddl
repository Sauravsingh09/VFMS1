CREATE DATABASE fuel_management;

USE fuel_management;

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    license_plate VARCHAR(10) NOT NULL,
    fuel_type VARCHAR(10) NOT NULL,
    last_fuel_date DATE NOT NULL,
    fuel_amount DECIMAL(10,2) NOT NULL
);