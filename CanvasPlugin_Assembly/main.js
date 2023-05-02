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
  // TODO: Use an assembler to check for syntax errors
  // and highlight them in the formatted code
  return code;
}

// Run the formatting function when the page loads
window.addEventListener('load', formatCodeBlocks);
