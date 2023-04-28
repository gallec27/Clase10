const { read } = require("./read");

function filtrar(tit) {
  let resultadoBusqueda = null;

  resultadoBusqueda = read().filter((tarea) => tarea.titulo.includes(tit));

  return console.log(
    resultadoBusqueda.length > 0
      ? resultadoBusqueda
      : "No se encontraron resultados."
  );
}

module.exports = { filtrar };
