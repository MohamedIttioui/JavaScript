<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NutriCore | Inicio</title>
</head>

<body>
  <header class="header">
    <img src="img/logo_transparenteRecotado.png" alt="NutriCore" class="logo">
    <nav class="nav-links">
      <p>
        <input type="text" class="search-input" placeholder="Buscar..." aria-label="Buscar">
        <i class="fas fa-search search-icon"></i>
      </p>

      <a href="/home.html" class="nav-link">
        <i class="fas fa-home"></i><span>Inicio</span>
      </a>

      <a href="#" class="nav-link">
        <i class="fas fa-bars"></i><span>Menú</span>
      </a>

      <div class="user-menu">
        <a href="#" class="nav-link">
          <i class="fas fa-user"></i><span>Usuario</span>
        </a>
        <div class="user-dropdown">
          <?php if ($userType === 'guest') : ?>
            <a href="/student013/shop/backend/forms/form_login.php" class="btn-log">Iniciar sesión</a>
            <a href="/student013/shop/backend/forms/customers/customer_insert.php" class="btn-reg">Registrarse</a>
          <?php else : ?>
            <a href="/student013/shop/frontend/customer_profile.php">Mi cuenta</a>
            <a href="/student013/shop/backend/forms/logout.php">Cerrar sesión</a>
            <a href="/student013/shop/frontend/orders.php">Tus pedidos</a>
          <?php endif; ?>
        </div>
      </div>

      <a href="views/carrito.html" class="cart-btn nav-link">
        <i class="fas fa-shopping-cart"></i>
        <span>Carrito</span>
        <span id="cart-count">0</span>
      </a>
    </nav>
  </header>