const fs = require("fs");
const path = require("path");
const babel = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const glob = require("glob");

// Function to remove comments from one file
function removeCommentsFromFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  // Parse JSX/JS
  const ast = babel.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
    // Preserve all syntax but remove comments in generate step
    allowReturnOutsideFunction: true,
  });

  // Generate code without comments
  const output = generate(ast, { comments: false }).code;

  fs.writeFileSync(filePath, output, "utf8");
  console.log(`Comments removed: ${filePath}`);
}

// Find all JSX files in src folder
const files = glob.sync("src/**/*.jsx");

files.forEach(removeCommentsFromFile);

console.log("✅ All comments removed from JSX files.");
