function Contato() {
  return (
    <main className="bg-gray-50 text-gray-800 px-6 py-20 max-w-6xl mx-auto rounded-xl shadow-lg">
      {/* Cabeçalho */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Fale Conosco
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato com nossa equipe!
        </p>
      </div>

      {/* Formulário e informações */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulário */}
        <form className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Mensagem"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-2"
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Informações adicionais */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contato@gamestore.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-600">+55 11 99999-9999</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Endereço</h3>
            <p className="text-gray-600">Rua dos Games, 123 - São Paulo, SP</p>
          </div>
        </div>
      </div>
     
    </main>
  );
}

export default Contato;
