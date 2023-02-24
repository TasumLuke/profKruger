const http = require('http');
const exec = require('child_process').exec;
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Serve the HTML file
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (req.url === '/compile' && req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      } else {
        const code = fields.code;

        // Write the assembly code to a file
        fs.writeFile('code.asm', code, (err) => {
          if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
          } else {
            // Compile the assembly code using NASM and ld
            const command = 'nasm -f elf64 code.asm && ld -s -o output code.o';
            exec(command, (err, stdout, stderr) => {
              if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
              } else {
                // Read the compiled binary file and send it to the client
                fs.readFile('output', (err, data) => {
                  if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error');
                  } else {
                    res.writeHead(200, {'Content-Type': 'application/octet-stream'});
                    res.end(data);
                  }

                  // Delete the assembly code and compiled binary files
                  fs.unlink('code.asm', () => {});
                  fs.unlink('code.o', () => {});
                  fs.unlink('output', () => {});
                });
              }
            });
          }
        });
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});