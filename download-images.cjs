const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'public/images/global/fallback-workouts.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
  'public/images/global/fallback-diet.jpg': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
  'public/images/global/fallback-supplements.jpg': 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=1200',
  'public/images/global/fallback-calculators.jpg': 'https://images.unsplash.com/photo-1611843467160-25afb8cf1074?auto=format&fit=crop&q=80&w=1200',
  'public/images/global/fallback-blog.jpg': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200'
};

Object.keys(images).forEach(filePath => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const file = fs.createWriteStream(filePath);
  https.get(images[filePath], response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filePath}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${filePath}: ${err.message}`);
  });
});
