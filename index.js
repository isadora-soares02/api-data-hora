import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// rota principal
app.get('/', (req, res) => {
  res.json({ status: 'API funcionando 🚀' });
});

// rota da atividade
app.get('/data-hora', (req, res) => {
  const now = new Date();

  res.json({
    data: now.toLocaleDateString('pt-BR'),
    hora: now.toLocaleTimeString('pt-BR')
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});