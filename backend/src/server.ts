import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({resp: 'API com Express e TypeScript 🚀'});
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
