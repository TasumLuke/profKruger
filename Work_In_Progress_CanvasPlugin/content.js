// Define the syntax for creating code blocks
const codeBlockSyntax = /^```(\w+)\n([\s\S]*?)\n```$/gm;

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
      codeBlock.classList.add('prettyprint');
    }
  }
  PR.prettyPrint();
}

// Format a code block for display
function formatCode(code, language) {
  //Still have to work on this. Am running out of ideas, on how to present this
  return code;
}

// Run the formatting function when the page loads
window.addEventListener('load', formatCodeBlocks);
