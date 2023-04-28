const { read } = require("./crud/read");
const { create } = require("./crud/create");
const { del } = require("./crud/delete");
const { update } = require("./crud/update");
const { find } = require("./crud/find");
const { retornar } = require("./crud/retorno");
const { filtrar } = require("./crud/filter");

const data = process.argv;
const command = (action, param1, param2) => {
  switch (action) {
    case "list":
      console.log(read());
      break;
    case "add":
      create(param1, param2);
      break;
    case "delete":
      del(param1);
      break;
    case "edit":
      update(param1, param2);
      break;
    case "find":
      find(param1);
      break;
    case "return":
      retornar(param1);
      break;
    case "filter":
      filtrar(param1);
      break;
    default:
      console.log("No se encontró ningún comando");
  }
};

command(data[2], data[3], data[4]);
