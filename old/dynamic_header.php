<?php
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}
$userType = $_SESSION['user_type'] ?? 'guest';

if ($userType === 'admin') {
  include $_SERVER['DOCUMENT_ROOT'] . '/student013/shop/backend/header.php';
} elseif ($userType === 'customer') {
  include $_SERVER['DOCUMENT_ROOT'] . '/student013/shop/backend/customer_header.php';
} else {
  include $_SERVER['DOCUMENT_ROOT'] . '/student013/shop/backend/public_header.php';
}
?>