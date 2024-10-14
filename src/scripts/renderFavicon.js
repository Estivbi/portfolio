import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Favicon from '../components/Favicon.js';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgString = ReactDOMServer.renderToStaticMarkup(React.createElement(Favicon));
const outputPath = path.join(__dirname, '../../public', 'favicon.svg');

fs.writeFileSync(outputPath, svgString, 'utf8');
console.log(`Favicon SVG has been saved to ${outputPath}`);