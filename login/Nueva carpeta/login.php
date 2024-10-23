<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "MPC";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar el formulario de login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Consultar la base de datos para verificar el usuario
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verificar la contraseña usando password_verify()
        if (password_verify($password, $row["contrasena"])) {
            // Inicio de sesión exitoso
            session_start();
            $_SESSION["usuario"] = $username;
            $_SESSION["rol"] = $row["rol"];

            // Redirigir a la página principal (index.html)
            header("Location: ../index/index.html"); 
            exit;
        } else {
            // Contraseña incorrecta
            $error = "Contraseña incorrecta";
        }
    } else {
        // Usuario no encontrado
        $error = "Usuario no encontrado";
    }
}

// Cerrar la conexión a la base de datos
$conn->close();
?>