// Define the syntax for creating code blocks
const codeBlockSyntax = /^```asm\n([\s\S]*?)\n```$/gm;

// Find all code blocks in the page and format them
function formatCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre');
  for (const codeBlock of codeBlocks) {
    const matches = codeBlockSyntax.exec(codeBlock.textContent);
    if (matches) {
      const code = matches[1];
      const formattedCode = formatCode(code);
      codeBlock.innerHTML = `<code>${formattedCode}</code>`;
    }
  }
}

// Format a code block and highlight any errors
function formatCode(code) {
  // Use GAS to check for syntax errors
  const assembler = new window.asm();
  const result = assembler.compile(code);
  
  // Format the code with syntax highlighting
  let formattedCode = '';
  for (const line of result.asm.split('\n')) {
    if (line.includes('error:')) {
      formattedCode += `<span class="error">${line}</span>\n`;
    } else {
      formattedCode += `${line}\n`;
    }
  }
  
  return formattedCode.trim();
}

// Run the formatting function when the page loads
window.addEventListener('load', formatCodeBlocks);
