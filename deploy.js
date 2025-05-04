const fs = require('fs');
const path = require('path');

// Create output directory if it doesn't exist
const outDir = path.join(__dirname, 'static-site');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy necessary files to the output directory
const copyFiles = (srcDir, destDir, excludeDirs = []) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        copyFiles(srcPath, destPath, excludeDirs);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Copy app files
copyFiles(path.join(__dirname, 'app'), path.join(outDir, 'app'), ['node_modules', '.next']);

// Copy public files
copyFiles(path.join(__dirname, 'public'), path.join(outDir, 'public'));

// Create simple HTML file
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jairaj Kolhatkar - Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    .message {
      max-width: 600px;
      margin: 100px auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #4f46e5;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .button:hover {
      background-color: #4338ca;
    }
  </style>
</head>
<body>
  <div class="message">
    <h1>Portfolio Website Ready for Deployment</h1>
    <p>
      Your portfolio website files are now ready. To deploy this site to the web,
      upload all files from the 'static-site' folder to your web hosting service.
    </p>
    <p>
      For the best experience, consider using Netlify, Vercel, or GitHub Pages.
      These services make it easy to deploy static websites.
    </p>
    <a href="https://www.netlify.com/drop" class="button" target="_blank">Deploy to Netlify (Drag & Drop)</a>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent);

console.log('Deployment package created in the "static-site" folder.');
console.log('You can now upload these files to any web hosting service.');
console.log('For easy deployment, try Netlify Drop: https://www.netlify.com/drop'); 