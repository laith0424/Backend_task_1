const http = require('http');
const url = require('url');



// SERVER
const server = http.createServer((req, res) => {
  const pathname = req.url;

  // Home page
  if (pathname === '/' || pathname === '/home') {
    res.end('This is HOME');

    // Services page
  } else if (pathname === '/services') {
    res.end('This is Services');

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'My-header': 'Hello!'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(7000, '127.0.0.1', () => {
  console.log('Listening on port 7000'); 
});
