<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Cargar variables de entorno desde el archivo .env
require __DIR__.'/vendor/autoload.php';
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Obtener los valores de las variables de entorno
$servidor = $_ENV['DB_HOST'] . ':' . $_ENV['DB_PORT'];
$usuario = $_ENV['DB_USER'];
$contrasena = $_ENV['DB_PASS'];
$dbname = $_ENV['DB_NAME'];

try {
    $dsn = "mysql:host=$servidor;dbname=$dbname";
    $conexion = new PDO($dsn, $usuario, $contrasena);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Crear la tabla si no existe
    $consultaConsultas = "CREATE TABLE IF NOT EXISTS `consultas` (
        idConsulta INT(11) AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        edad VARCHAR(255) NOT NULL,
        conocimiento VARCHAR(255) NOT NULL,
        tiempo VARCHAR(255) NOT NULL,
        objetivo VARCHAR(255) NOT NULL,
        riesgo VARCHAR(255) NOT NULL,
        accion VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $conexion->exec($consultaConsultas);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'];
        $edad = $_POST['edad'];
        $conocimiento = $_POST['conocimiento'];
        $tiempo = $_POST['tiempo'];
        $objetivo = $_POST['objetivo'];
        $riesgo = $_POST['riesgo'];
        $accion = $_POST['accion'];

        if (!empty($email) && !empty($edad) && !empty($conocimiento) && !empty($tiempo) && !empty($objetivo) && !empty($riesgo) && !empty($accion)) {
            // Almacenar en la base de datos
            $sqlInsert = "INSERT INTO `consultas` (email, edad, conocimiento, tiempo, objetivo, riesgo, accion, createdAt) 
                          VALUES (:email, :edad, :conocimiento, :tiempo, :objetivo, :riesgo, :accion, NOW())"; 
            $stmt = $conexion->prepare($sqlInsert);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':edad', $edad);
            $stmt->bindParam(':conocimiento', $conocimiento);
            $stmt->bindParam(':tiempo', $tiempo);
            $stmt->bindParam(':objetivo', $objetivo);
            $stmt->bindParam(':riesgo', $riesgo);
            $stmt->bindParam(':accion', $accion);

            $stmt->execute();

            // Obtener el ID de la última inserción
            $lastId = $conexion->lastInsertId();

            // Respuesta JSON con el mensaje y el ID de la nueva consulta
            echo json_encode([
                "mensaje" => "Enviado exitosamente",
                "idConsulta" => $lastId
            ]);
        } else {
            echo json_encode(["error" => "Por favor, complete todos los campos correctamente"]);
        }
    } else {
        echo json_encode(["error" => "Método no permitido"]);
    }
} catch (PDOException $error) {
    echo json_encode(["error" => "Error de conexión: " . $error->getMessage()]);
}
?>
