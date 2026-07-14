// selecciona el botón  y la lista del menú

const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

//Al hacer clic en el botón, muestra u oculta el menu

boton.addEventListener("click", () => {
  menu.classList.toggle("abierto");

  // Actualiza aria-expanded para accesibilidad
  const abierto = menu.classList.contains("abierto");
  boton.setAttribute("aria-expanded", abierto);
});

// Al hacer clic en un enlace, cierra el menú (útil en móvil)
const enlaces = document.querySelectorAll("nav ul a");
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
  });
});
