function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Insert Code Block')
      .addItem('x86 Assembly', 'insertAssemblyCodeBlock')
      .addToUi();
}

function insertAssemblyCodeBlock() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  var codeBlock = getCodeBlockTemplate();
  var element = cursor.insertInlineImage(codeBlock);
}

function getCodeBlockTemplate() {
  // Generate a base64-encoded PNG image of the code block.
  var code = 'MOV AX, 5\nMOV BX, 7\nADD AX, BX\n';
  var image = CodeBlockToImage(code, 'x86asm');
  var base64Image = Utilities.base64Encode(image.getBytes());
  
  // Construct the image tag that will be used to insert the image.
  var tag = '<img src="data:image/png;base64,' + base64Image + '">';
  var template = '<div style="background-color:#f8f8f8; border:1px solid #ddd; padding:10px;">' + tag + '</div>';
  
  return template;
}

function CodeBlockToImage(code, language) {
  // Use Google's SyntaxHighlighter to generate a code block with highlighting.
  var options = {
    'language': language,
    'theme': 'default',
    'showLineNumbers': true
  };
  var codeBlock = SyntaxHighlighter.highlight(code, options);
  
  // Create a new Google Doc and insert the code block as HTML.
  var doc = DocumentApp.create('Code Block');
  var body = doc.getBody();
  body.appendParagraph(codeBlock);
  
  // Convert the document to a PNG image.
  var blob = doc.getAs(MimeType.PNG);
  doc.saveAndClose();
  
  return blob;
}
