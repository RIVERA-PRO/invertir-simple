<?php
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

    // Función para crear una tabla si no existe
    function crearTablaSiNoExiste($conexion, $nombreTabla, $consultaSQL) {
        $sql = "SHOW TABLES LIKE '$nombreTabla'";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        
        if ($stmt->rowCount() == 0) {
            // La tabla no existe, se crea
            $stmtCreate = $conexion->prepare($consultaSQL);
            $stmtCreate->execute();
            echo "Tabla $nombreTabla creada correctamente.<br>";
        } else {
            echo "La tabla $nombreTabla ya existe.<br>";
        }
    }

        // Crear tabla 'banner' si no existe
        $consultaBanner = "CREATE TABLE IF NOT EXISTS `banner` (
            idBanner INT(11) AUTO_INCREMENT PRIMARY KEY,
            imagen VARCHAR(900) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        crearTablaSiNoExiste($conexion, 'banner', $consultaBanner);

    // Crear tabla 'usuarios' si no existe
    $consultaUsuarios = "CREATE TABLE IF NOT EXISTS `usuarios` (
        idUsuario INT(11) AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        rol  VARCHAR(100) NOT NULL,
        estado  VARCHAR(20) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    crearTablaSiNoExiste($conexion, 'usuarios', $consultaUsuarios);

    $contrasenaAdmin = password_hash('admin1234', PASSWORD_DEFAULT);

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
    crearTablaSiNoExiste($conexion, 'consultas', $consultaConsultas);

// Insertar nuevo usuario admin
$sqlInsertAdmin = "INSERT INTO `usuarios` (nombre, email, contrasena, rol,estado, createdAt) 
                  VALUES ('admin', 'admin@gmail.com', :contrasenaAdmin, 'admin','activo', NOW())";
$stmtAdmin = $conexion->prepare($sqlInsertAdmin);
$stmtAdmin->bindParam(':contrasenaAdmin', $contrasenaAdmin);
$stmtAdmin->execute();

echo "Usuario admin creado correctamente.";
    
    echo "Proceso de creación de tablas finalizado.";
} catch (PDOException $error) {
    echo "Error de conexión: " . $error->getMessage();
}
?>
