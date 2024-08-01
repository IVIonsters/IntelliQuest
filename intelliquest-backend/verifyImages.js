const fs = require('fs');
const path = require('path');

const manualImages = [
  'assets/manual_images/coolers.png', // Correct file name
  // Add more paths if needed
];

manualImages.forEach(imgPath => {
  const resolvedPath = path.join(__dirname, imgPath);
  console.log(`Checking: ${resolvedPath}`);
  if (fs.existsSync(resolvedPath)) {
    console.log(`Exists: ${resolvedPath}`);
  } else {
    console.log(`Does not exist: ${resolvedPath}`);
  }
});

