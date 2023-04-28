const { read } = require("./read");

function find(titulo) {
  return console.log(read().some((tarea) => tarea.titulo === titulo));
}

module.exports = { find };
