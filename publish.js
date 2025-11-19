const fs = require('fs');
const path = require('path');

const publishDir = './publish';
const filesToCopy = [
  { src: './.next', dest: './publish/.next' },
  { src: './package.json', dest: './publish/package.json' },
  { src: './server.js', dest: './publish/server.js' },
  { src: './public', dest: './publish/public' }
];

// Create publish directory
if (!fs.existsSync(publishDir)) {
  fs.mkdirSync(publishDir, { recursive: true });
}

// Copy function
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source not found: ${src}`);
    return;
  }

  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    fs.readdirSync(src).forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy all files
filesToCopy.forEach(({ src, dest }) => {
  console.log(`Copying ${src} to ${dest}`);
  copyRecursive(src, dest);
});

console.log('Publish folder created successfully!');