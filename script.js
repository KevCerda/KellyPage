const miniaturas = document.querySelectorAll('.dibujoMiniatura');
const dialog = document.getElementById('popUpDibujo');
const imgGrande = document.getElementById('dibujito');
const btnCerrar = document.getElementById('cerrarPopUp');
const enlaceDescarga = document.getElementById('irDibujo');

miniaturas.forEach(img => {
  img.addEventListener('click', () => {
    imgGrande.src = img.src;
    imgGrande.alt = img.alt;

    enlaceDescarga.href = img.src;
    enlaceDescarga.download = img.alt.replace(/\s+/g, '_') + '.png';

    dialog.showModal();  // Abre el diálogo modal
  });
});

btnCerrar.addEventListener('click', (e) => {
  e.preventDefault();  // Previene el comportamiento por defecto del enlace
  dialog.close();  // Cierra el diálogo
});
