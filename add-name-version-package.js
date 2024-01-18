const fs = require('fs');
const package = require('./package.json');
const content = fs.readFileSync('./dist/style.css', 'utf-8');
const comment = `
/*
  Paquete: ${package.name}
  Versión: ${package.version}
*/
`;

const newContent = `${comment}${content}`;
fs.writeFileSync('./dist/style.css', newContent, 'utf-8');
