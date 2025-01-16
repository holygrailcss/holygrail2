// generate-scss-variables.js
const fs = require('fs');
const path = require('path');

// Importar los tres archivos JSON
const variables = require('./src/_data/variables.json');
const colors = require('./src/_data/colors.json');
const maps = require('./src/_data/maps.json');

/**
 * Formatea el valor para SCSS.
 * @param {*} value - El valor a formatear.
 * @returns {string} - El valor formateado para SCSS.
 */
function formatValue(value) {
  if (Array.isArray(value)) {
    // Array => lista SCSS: ( val, val, val )
    return `( ${value.join(', ')} )`;
  } else if (typeof value === 'object' && value !== null) {
    // Objeto => mapa SCSS: ( key: val, key: val )
    let entries = [];
    for (const [k, v] of Object.entries(value)) {
      entries.push(`${k}: ${formatValue(v)}`);
    }
    return `( ${entries.join(', ')} )`;
  } else {
    // Valor primitivo (string/number)
    return value;
  }
}

let scssContent = '';

/**
 * Procesa cada categoría de variables y agrega al contenido SCSS.
 * @param {Object} categoryData - Las variables de una categoría.
 * @param {string} type - El tipo de variables ('value', 'map', 'list').
 */
function processCategory(categoryData, type) {
  for (const [key, data] of Object.entries(categoryData)) {
    const varName = data.var_name;
    const defaultSuffix = data.default ? ' !default' : '';

    let formatted;

    switch (type) {
      case 'value':
        // Variable simple
        formatted = `${varName}: ${data.value}${defaultSuffix};`;
        break;
      case 'list':
        // Lista SCSS
        formatted = `${varName}: ${formatValue(data.value)}${defaultSuffix};`;
        break;
      case 'map':
        // Mapa SCSS
        formatted = `${varName}: ${formatValue(data.value)}${defaultSuffix};`;
        break;
      default:
        console.warn(`Tipo desconocido: ${type} para la variable ${varName}`);
        continue;
    }

    scssContent += formatted + '\n';
  }
}

// Procesar cada categoría con su tipo correspondiente
processCategory(colors, 'value');
processCategory(variables, 'list');
processCategory(maps, 'map');

// Escribir el contenido SCSS en un archivo
const variablesPath = path.join(__dirname, 'scss', 'abstract', '_setup.scss');
fs.writeFileSync(variablesPath, scssContent);
console.log('SCSS variables generadas en src/scss/abstract/_setup.scss');
