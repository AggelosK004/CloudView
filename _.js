const fs = require('fs');
const path = require('path');

const removeComments = (content) => {
    // Remove single-line comments
    content = content.replace(/\/\/.*$/gm, '');
    // Remove multi-line comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove empty lines
    content = content.replace(/^\s*[\r\n]/gm, '');
    return content;
};

const processJsxFiles = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processJsxFiles(filePath);
        } else if (file.endsWith('.jsx')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const cleaned = removeComments(content);
            fs.writeFileSync(filePath, cleaned, 'utf8');
            console.log(`Processed: ${filePath}`);
        }
    });
};

const startDir = process.argv[2] || './';
processJsxFiles(startDir);