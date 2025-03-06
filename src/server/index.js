import cors from 'cors';
import express from 'express';

import { items } from '@/data/registros';

const app = express();
const PORT = 4000;

app.use(cors()); // Permite requisições do outro domínio (Client Server)
app.use(express.json()) 

// Rota para retornar os Itens
app.get('/api/items', (req, res) => {
    res.json(items);
})

// Iniciar Servidor (Backend)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})