# Code Functionality

This code creates a custom menu in the Google Doc that allows the user to insert a code block for x86 assembly language. When the user selects this option, a base64-encoded PNG image of the code block is generated using the CodeBlockToImage() function, and then inserted into the document using the insertAssemblyCodeBlock() function.

You can modify this code to support other assembly languages by changing the language parameter in the getCodeBlockTemplate() and CodeBlockToImage() functions. You can also modify the code block template to change the appearance of the code block in the document.
