document.addEventListener('DOMContentLoaded', function() {
  const estado = document.getElementById('estado-cafeteria');
  const ahora = new Date();
  const hora = ahora.getHours();
  // Abierto de 8 a 20 (8:00 a 20:00)
  if (hora >= 8 && hora < 23) {
    estado.textContent = '¡Estamos abiertos! ☕';
    estado.className = 'estado-abierto';
  } else {
    estado.textContent = 'Cerrado ahora. ¡Te esperamos de 8:00 AM a 8:00 PM!';
    estado.className = 'estado-cerrado';
  }
});/* Moderno estado de horario */
/* filepath: c:\Users\User Name\OneDrive\Escritorio\Proyecto Personal\styles.css */
.estado-abierto {
  color: #28a745;
  font-weight: bold;
  background: #eafaf1;
  border-radius: 6px;
  padding: 0.5em 1em;
  margin-top: 1em;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(40,167,69,0.08);
}
.estado-cerrado {
  color: #dc3545;
  font-weight: bold;
  background: #fdeaea;
  border-radius: 6px;
  padding: 0.5em 1em;
  margin-top: 1em;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(220,53,69,0.08);
}<!-- Moderno horario con estado -->
<div id="horario" class="card" style="max-width:400px; margin:2em auto; text-align:center;">
  <h3>🕒 Horario</h3>
  <ul style="list-style:none; padding:0; margin:1em 0;">
    <li>Lunes a Domingo: <strong>8:00 AM - 23:00 PM</strong></li>
  </ul>
  <div id="estado-cafeteria" class="estado-abierto">¡Estamos abiertos! ☕</div>
</div>
<!-- Script para cargar productos -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(productos => {
        const contenedor = document.getElementById('productos-menu');
        contenedor.innerHTML = '';
        productos.forEach(producto => {
          contenedor.innerHTML += `
            <div class="card producto-menu">
              <h3>${producto.nombre}</h3>
              <p>Precio: RD$${producto.precio}</p>
              <button class="btn agregar-carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar</button>
            </div>
          `;
        });
      });
});
</script>