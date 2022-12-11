'use strict'

const { registrar, leer } = require('./operaciones');
const { argv } = require('node:process')

const operacion = argv[2];

if (operacion === 'leer') {
  leer();
}
if (operacion === 'registrar') {
  registrar(argv);
}
