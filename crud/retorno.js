const { read } = require("./read");

function retornar(tit) {
  let resultadoBusqueda = null;

  resultadoBusqueda = read().find((tarea) => tarea.titulo === tit);

  if (resultadoBusqueda != null) {
    return console.log(resultadoBusqueda.descripcion);
  } else {
    return "No se encontraron resultados.";
  }
}

module.exports = { retornar };
