const { appendFile, readFile } = require('fs/promises')
const { readFileSync } = require('fs')

const registrar = async (argv) => {

  const args = argv.filter((val, index) => {
    return index > 2
  })
  const nuevaCita = {
    nombre: args[0],
    edad: args[1],
    animal: args[2],
    color: args[3],
    enfermedad: args[4]
  }

  try {
    const data = readFileSync("citas.json", "utf8");
    const citas = JSON.parse(data);
    citas.push(nuevaCita)
    await appendFile("citas.json", JSON.stringify(citas, null, 4), { flag: "w" });
    console.log(`Añadida la nueva cita`);
  } catch (e) {
    console.error(e.message);
  }
}

const leer = async () => {
  try {
    const data = await readFile("citas.json");
    console.log(JSON.parse(data));
  } catch (e) {
    console.error(e.message)
  }
}

module.exports = {
  leer,
  registrar
}
