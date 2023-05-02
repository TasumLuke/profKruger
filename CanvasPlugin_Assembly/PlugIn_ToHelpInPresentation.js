(function () {
  // Define the syntax for creating code blocks
  const codeBlockSyntax = /^```(.*?)\n([\s\S]*?)\n```$/gm;
  
  // Define the CSS styles for the code blocks
  const styles = `
    pre {
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 10px;
    }
    
    code {
      font-family: Consolas, "Courier New", monospace;
    }
    
    .language-asm {
      color: #a90d91;
    }
    
    .language-cpp {
      color: #00599d;
    }
    
    .language-python {
      color: #3572A5;
    }
    
    .language-javascript {
      color: #f7df1e;
    }
    
    .error {
      color: red;
      font-weight: bold;
    }
  `;
  
  // Add the CSS styles to the page
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
  
  // Find all code blocks in the page and format them
  function formatCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre');
    for (const codeBlock of codeBlocks) {
      const matches = codeBlockSyntax.exec(codeBlock.textContent);
      if (matches) {
        const language = matches[1];
        const code = matches[2];
        const formattedCode = formatCode(code, language);
        codeBlock.innerHTML = `<code class="language-${language}">${formattedCode}</code>`;
      }
    }
  }
  
  // Format a code block and highlight any errors
function formatCode(code, language) {
  // Use Prism.js to highlight the code based on the language
  if (Prism.languages[language]) {
    return Prism.highlight(code, Prism.languages[language], language);
  }
  
  // If the language is not supported by Prism.js, just return the original code
  return code;
}

  
  // Run the formatting function when the page loads or when the content is updated
  document.addEventListener('DOMContentLoaded', formatCodeBlocks);
  document.addEventListener('DOMNodeInserted', formatCodeBlocks);
})();
