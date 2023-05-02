// Define the syntax for creating code blocks
const codeBlockSyntax = /^```(?:asm)?\n([\s\S]*?)\n```$/gm;

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

// Format a code block and add syntax highlighting
function formatCode(code) {
  // Escape HTML characters
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Add syntax highlighting
  code = code.replace(/(mov|add|sub|mul|div|jmp|je|jne|jl|jle|jg|jge|call|ret)/g, '<span class="keyword">$1</span>');
  code = code.replace(/(eax|ebx|ecx|edx|esi|edi|ebp|esp)/g, '<span class="register">$1</span>');
  code = code.replace(/(db|dw|dd)/g, '<span class="directive">$1</span>');
  code = code.replace(/(0x[0-9a-fA-F]+|[0-9]+|[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="operand">$1</span>');
  
  return code;
}

// Add CSS styles for syntax highlighting
const css = `
  pre code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
  }
  
  .keyword {
    color: #0077c2;
    font-weight: bold;
  }
  
  .register {
    color: #b52e31;
    font-weight: bold;
  }
  
  .directive {
    color: #9655a5;
    font-weight: bold;
  }
  
  .operand {
    color: #2e8b57;
  }
`;

// Create a <style> element and add the CSS styles
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

// Run the formatting function when the page loads
window.addEventListener('load', formatCodeBlocks);
