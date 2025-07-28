const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImages() {
  const folders = ['images3', 'images4'];
  
  for (const folder of folders) {
    const folderPath = path.join(__dirname, 'public', folder);
    const files = fs.readdirSync(folderPath);
    
    console.log(`\nProcessing ${folder} folder...`);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(folderPath, file);
        const fileName = path.parse(file).name;
        const outputPath = path.join(folderPath, `${fileName}-compressed.webp`);
        
        try {
          console.log(`Compressing ${file}...`);
          
          await sharp(inputPath)
            .resize(800, 600, { 
              fit: 'inside',
              withoutEnlargement: true 
            })
            .webp({ 
              quality: 80,
              effort: 6 
            })
            .toFile(outputPath);
          
          const originalSize = fs.statSync(inputPath).size;
          const compressedSize = fs.statSync(outputPath).size;
          const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
          
          console.log(`✅ ${file} compressed: ${(originalSize/1024).toFixed(1)}KB → ${(compressedSize/1024).toFixed(1)}KB (${reduction}% reduction)`);
          
        } catch (error) {
          console.error(`❌ Error compressing ${file}:`, error.message);
        }
      }
    }
  }
  
  console.log('\n🎉 Image compression complete!');
}

compressImages().catch(console.error); 