<?php
$contraseña = "dwescustomer";
$hash = password_hash($contraseña, PASSWORD_DEFAULT);
echo $hash;
?>

<?php
$clientes = [
  ['Lucía', 'Martínez'],
  ['Carlos', 'Gómez'],
  ['Ana', 'López'],
  ['Miguel', 'Sánchez'],
  ['Laura', 'Fernández'],
  ['David', 'Ruiz'],
  ['María', 'Jiménez'],
  ['Pablo', 'Moreno'],
  ['Sara', 'Navarro'],
  ['Javier', 'Domínguez'],
  ['Elena', 'Castro'],
  ['Andrés', 'Vega'],
];

foreach ($clientes as [$nombre, $apellido]) {
  // Eliminar acentos y espacios
  $clave = $nombre . $apellido;
  $clave = strtr($clave, [
    'á'=>'a','é'=>'e','í'=>'i','ó'=>'o','ú'=>'u',
    'Á'=>'A','É'=>'E','Í'=>'I','Ó'=>'O','Ú'=>'U',
    'ñ'=>'n','Ñ'=>'N',' '=>''
  ]);
  $hash = password_hash($clave, PASSWORD_DEFAULT);
  echo "$nombre $apellido → $clave → $hash\n";
}
?>