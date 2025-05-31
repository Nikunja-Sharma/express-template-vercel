const fs = require('fs-extra');
const path = require('path');

// Ensure the dist directory exists
fs.ensureDirSync(path.join(__dirname, '../dist'));

// Copy the public folder
fs.copySync(
  path.join(__dirname, '../src/public'),
  path.join(__dirname, '../dist/public'),
  { overwrite: true }
);

console.log('Public folder copied successfully!'); 