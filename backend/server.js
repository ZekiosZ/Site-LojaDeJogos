const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Caminho do “banco”
const DB_PATH = path.join(__dirname, 'products.json');

// Utilidades de banco
async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(DB_PATH, JSON.stringify([], null, 2));
      return [];
    }
    throw err;
  }
}

async function writeDB(items) {
  await fs.writeFile(DB_PATH, JSON.stringify(items, null, 2));
}

// Gera ID com UUID
function nextId() {
  return uuidv4();
}

// Validação simples
function validateProduct(payload, isUpdate = false) {
  const errors = [];
  if (!isUpdate) {
    if (!payload.title) errors.push('Título é obrigatório');
    if (payload.price == null || isNaN(Number(payload.price))) errors.push('Preço é obrigatório e numérico');
    if (!payload.platform) errors.push('Plataforma é um campo obrigatório');
    if (!payload.genre) errors.push('Gênero é um campo obrigatório');
    if (payload.stock == null || isNaN(Number(payload.stock))) errors.push('Estoque é um campo obrigatório e numérico');
    if (!payload.description) errors.push('Descrição é um campo obrigatório');
  } else {
    if ('price' in payload && isNaN(Number(payload.price))) errors.push('O preço deve ser numérico');
    if ('stock' in payload && isNaN(Number(payload.stock))) errors.push('O estoque deve ser numérico');
  }
  return errors;
}

// Healthcheck
app.get('/api/health', (req, res) =>
  res.json({ ok: true, time: new Date().toISOString() })
);

// Listar (suporta ?q=, ?platform=, ?genre=)
app.get('/api/products', async (req, res) => {
  const { q, platform, genre } = req.query;
  let items = await readDB();

  if (q) {
    const k = String(q).toLowerCase();
    items = items.filter(
      (p) =>
        (p.title || '').toLowerCase().includes(k) ||
        (p.description || '').toLowerCase().includes(k)
    );
  }
  if (platform)
    items = items.filter(
      (p) => String(p.platform).toLowerCase() === String(platform).toLowerCase()
    );
  if (genre)
    items = items.filter(
      (p) => String(p.genre).toLowerCase() === String(genre).toLowerCase()
    );

  res.json(items);
});

// Obter por id
app.get('/api/products/:id', async (req, res) => {
  const items = await readDB();
  const found = items.find((p) => String(p.id) === String(req.params.id));
  if (!found) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(found);
});

// Criar produto
app.post('/api/products', async (req, res) => {
  const payload = req.body || {};
  const errors = validateProduct(payload, false);
  if (errors.length) return res.status(400).json({ errors });

  const items = await readDB();
  const id = nextId();
  const now = new Date().toISOString();

  const product = {
    id,
    title: String(payload.title),
    price: Number(payload.price),
    platform: String(payload.platform),
    genre: String(payload.genre),
    stock: Number(payload.stock),
    description: String(payload.description),
    imageUrl: payload.imageUrl ? String(payload.imageUrl) : '',
    createdAt: now,
    updatedAt: now,
  };

  items.push(product);
  await writeDB(items);
  res.status(201).json(product);
});

// Atualizar produto (PUT)
app.put('/api/products/:id', async (req, res) => {
  const payload = req.body || {};
  const errors = validateProduct(payload, false);
  if (errors.length) return res.status(400).json({ errors });

  const items = await readDB();
  const idx = items.findIndex((p) => String(p.id) === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Produto não encontrado' });

  const now = new Date().toISOString();
  items[idx] = {
    ...items[idx],
    ...payload,
    price: Number(payload.price),
    stock: Number(payload.stock),
    updatedAt: now,
  };

  await writeDB(items);
  res.json(items[idx]);
});

// Atualização parcial (PATCH)
app.patch('/api/products/:id', async (req, res) => {
  const payload = req.body || {};
  const errors = validateProduct(payload, true);
  if (errors.length) return res.status(400).json({ errors });

  const items = await readDB();
  const idx = items.findIndex((p) => String(p.id) === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Produto não encontrado' });

  const now = new Date().toISOString();
  const merged = { ...items[idx], ...payload, updatedAt: now };
  if ('price' in payload) merged.price = Number(payload.price);
  if ('stock' in payload) merged.stock = Number(payload.stock);
  items[idx] = merged;

  await writeDB(items);
  res.json(items[idx]);
});

// Deletar produto
app.delete('/api/products/:id', async (req, res) => {
  const items = await readDB();
  const idx = items.findIndex((p) => String(p.id) === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Produto não encontrado' });

  const removed = items.splice(idx, 1)[0];
  await writeDB(items);
  res.json({ deleted: removed.id });
});

// Rota de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    if (!email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    const token = jwt.sign({ id: usuario._id }, "segredo", { expiresIn: "1h" });
    res.json({ message: "Login realizado com sucesso!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno, tente novamente." });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
