import * as fs from 'fs';
import * as path from 'path';

// Adjust for modern Angular 'public' folder or older 'src/assets' folders
const assetsDir: string = path.join(process.cwd(), 'src/assets');
const outputFile: string = path.join(process.cwd(), 'src/assets-list.json');

function getFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;

  const files: string[] = fs.readdirSync(dir);
  files.forEach((file: string) => {
    const filePath: string = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (file.match('.*\.(jpg|webp|png|svg|mp3)$')) {
        // Store relative path starting from /assets
        const relativePath: string = path.relative(path.join(process.cwd(), 'src'), filePath);
        fileList.push(relativePath.replace(/\\/g, '/'));
      }
    }
  });
  return fileList;
}

try {
  const allAssets: string[] = getFiles(assetsDir);
  fs.writeFileSync(outputFile, JSON.stringify(allAssets, null, 2));
  console.log(`✅ Asset list generated successfully: ${allAssets.length} files found.`);
} catch (error) {
  console.error('❌ Error generating asset list:', error);
}
