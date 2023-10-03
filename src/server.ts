import { createServer } from 'http';

const server = createServer((request, response) => {
  response.end('Hello world!');
});

server.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});
