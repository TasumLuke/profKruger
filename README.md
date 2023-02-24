This is a git repository to work with Assembly Code. The first few files namely Operand Error Handling and Parcer are for error handling or parsing the Assembly code into a grid or table.

The Server Side Test Folder includes the code for programs for an interactive document where students can test codes in assembly, and it compiles them using NASM. 
This is explained below:


# Assembly Code Compiler

This project provides a simple web interface for testing assembly code and compiling it into a binary executable file. The web interface sends the assembly code to a server-side script that compiles it using NASM and ld, and returns the compiled binary file to the user.
The Project utilizes Server Side Programming

## Requirements


To use this project, you will need the following software installed on your computer:

- Node.js (version 12 or higher)
- NASM (Netwide Assembler)
- ld (the GNU linker)
^Install the above to test out in your local server/pc.

- Advisable to Install the formidable package

## Installation

To install the project, follow these steps:

1. Clone this repository to your local computer:


`git clone https://github.com/yourusername/assembly-compiler.git`


2. Navigate to the project directory:

3. Install the required Node.js packages:

`npm install`


## Usage

To use the assembly code compiler, follow these steps:

1. Start the server by running the following command in your terminal:

`node server.js`

This starts the server and listens for incoming HTTP POST requests at `http://localhost:3000/compile`.

2. Open a web browser and navigate to `http://localhost:3000/index.html`. This opens the web interface that you created earlier in your browser.

3. Enter some assembly code into the text area on the web interface, and click the `Compile` button. This sends an HTTP POST request to the server with the assembly code, and downloads the compiled binary file to your local machine.

4. To test the compiled binary file, open a terminal or command prompt window, navigate to the directory where the compiled binary file is located, and run the following command:

`./output`


This runs the compiled binary file and executes the assembly code.

## Author

Luke Rimmo Loyi Lego
