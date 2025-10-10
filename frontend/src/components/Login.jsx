import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); // guarda mensagens de erro
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // limpa erro anterior

    if (!email || !senha) {
      setError("Preencha todos os campos!");
      return;
    }

    // valida formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Digite um email válido!");
      return;
    }
    // valida senha
    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres!");
      return;
    }   

    try {
      const res = await axios.post("http://localhost:3001/login", { email, senha });

      // salva usuário logado
      localStorage.setItem("user", JSON.stringify({ email }));
      console.log(res.data.message);

      navigate("/jogos");
    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao conectar com o servidor.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md border-2 border-blue-600">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center animate-pulse">
          🎮 Login Gamer
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text" // trocado para text
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border-2 border-blue-600 bg-gray-900 text-white placeholder-gray-400 focus:border-blue-400 outline-none transition"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="p-3 rounded-lg border-2 border-red-600 bg-gray-900 text-white placeholder-gray-400 focus:border-red-400 outline-none transition"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
          >
            Entrar
          </button>
        </form>

        {/* Caixa de erro estilizada */}
        {error && (
          <p className="mt-4 text-red-500 font-semibold text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
