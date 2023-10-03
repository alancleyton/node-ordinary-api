import express, { type Request, type Response } from 'express';

const PORT = 3000;

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Hello World ' });
});

server.listen(PORT, () => {
  console.log(`server is runing on: http://localhost:${PORT}`);
});
