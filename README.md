# 🎮 GameStore — Catálogo de Jogos

---

## ✅ Objetivo

Criar um site completo para **gerenciamento de jogos**, permitindo:

* Cadastrar novos jogos com título, preço, gênero, plataforma, estoque e descrição
* Editar e excluir jogos existentes
* Filtrar e pesquisar jogos cadastrados
* Visualizar todos os jogos em **cards estilizados com TailwindCSS**
* Realizar login simples (simulado no backend)

---

## 🧰 Tecnologias Utilizadas

### **Frontend**

* React (com Vite)
* React Router DOM
* TailwindCSS
* Axios

### **Backend**

* Node.js + Express.js
* UUID (para gerar IDs únicos)
* File System (armazenamento local em JSON)
* CORS

---

## ⚙️ Funcionalidades

* 🕹️ **Listar Jogos**: Mostra todos os jogos cadastrados
* ✏️ **Cadastrar Novo Jogo**: Formulário completo de registro
* 🔍 **Buscar e Filtrar**: Pesquisa por nome, gênero e plataforma
* 🗑️ **Excluir e Editar Jogos**
* 🔐 **Login Simples**

---

## 🗂️ Estrutura do Projeto

```
frontend/
└── src/
    ├── components/
    │   ├── Contato.jsx
    │   ├── Header.jsx
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── ProductForm.jsx
    │   ├── Products.jsx
    │   └── Sobre.jsx
    ├── services/
    │   └── api.js
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

---

## ▶️ Como Executar o Projeto Localmente

### **1. Clonar o repositório**

```bash
git clone https://github.com/ZekiosZ/Site-LojaDeJogos.git
```

### **2. Instalar dependências do backend**

```bash
cd backend
npm install
node server.js
```

Servidor: [http://localhost:3000]

### **3. Instalar dependências do frontend**

```bash
cd frontend
npm install
npm run dev
```

Frontend: [http://localhost:5173]

---

## 💾 Estrutura de um Jogo

```json
{
  "id": "a3b2f4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c",
  "title": "The Witcher 3: Wild Hunt",
  "price": 149.90,
  "platform": "PC",
  "genre": "RPG",
  "stock": 25,
  "description": "Aventura épica em um mundo aberto com o bruxo Geralt de Rívia.",
  "imageUrl": "https://example.com/witcher3.jpg",
  "createdAt": "2025-10-11T14:22:35.000Z",
  "updatedAt": "2025-10-11T14:22:35.000Z"
}
```

---

## 💡 Possíveis Melhorias

* Implementar autenticação real com banco de dados
* Adicionar sistema de upload de imagens
* Criar painel administrativo completo
* Permitir avaliações e favoritos

---

## 👨‍💻 Desenvolvido por

Arthur Serrano Veloso – RM (561542)

Hyann dos Santos Espindas – RM (563421)

José Rafael Tejeda Mantilla – RM (561849)

Theodoro Sievers – RM (562036)

Walter Henrique Pereira de Toledo – RM (562476)
