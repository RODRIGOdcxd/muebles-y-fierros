//Realice esta funcion para poder eliminar el elemento que no se vea.
document.addEventListener("DOMContentLoaded", () => {
  const dAnimacion1 = document.querySelector(".divPrimarioText");
  const dAnimacion2 = document.querySelector(".yoursel");
  dAnimacion2.addEventListener("animationend", () => {
    dAnimacion1.style.display = "none";
  });
});
