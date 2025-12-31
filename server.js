const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let filePath = './views/index.html'; 
    
    if (req.url === '/') { 
        filePath = './views/index.html';
     } else if (req.url === '/teenused') {
        filePath = './views/teenused.html';
    } else { filePath = './views/404.html'; }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => { 
    console.log('Server töötab pordil 3000'); 
});