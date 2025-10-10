function Sobre() {
  return (
    <section className="text-gray-800 py-20 px-6">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Sobre a <span className="text-red-500">GameStore</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Somos apaixonados por videogames e queremos trazer a melhor experiência para jogadores de todos os níveis. Conheça nossa equipe e nosso universo gamer!
        </p>
      </div>

      {/* Seção de imagens e descrição */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
          alt="Jogador com console"
          className="w-full rounded-xl shadow-lg"
        />

        {/* Texto */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-800">Nossa Missão</h3>
          <p className="text-gray-600">
            A GameStore nasceu da paixão por jogos. Queremos fornecer os melhores títulos, acessórios e novidades do mundo gamer para nossos clientes, de forma confiável e moderna.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Nossa Equipe</h3>
          <p className="text-gray-600">
            Nossa equipe é formada por gamers experientes que entendem as necessidades de cada jogador e estão sempre atentos às tendências do mercado.
          </p>
        </div>
      </div>

      {/* Cards de destaque */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c443f2e?auto=format&fit=crop&w=400&q=80"
            alt="Jogos"
            className="mx-auto mb-4 w-32 h-32 object-cover rounded-full"
          />
          <h4 className="text-xl font-semibold mb-2">Variedade de Jogos</h4>
          <p className="text-gray-600">
            Títulos para todos os consoles e estilos de jogo, sempre atualizados com as novidades do mercado.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1621319332247-ce870cdad56c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNlc3NvcmlvcyUyMGdhbWVyfGVufDB8fDB8fHww"
            alt="Acessórios"
            className="mx-auto mb-4 w-32 h-32 object-cover rounded-full"
          />
          <h4 className="text-xl font-semibold mb-2">Acessórios</h4>
          <p className="text-gray-600">
            Controles, headsets e periféricos para elevar sua experiência de jogo ao máximo.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Suporte"
            className="mx-auto mb-4 w-32 h-32 object-cover rounded-full"
          />
          <h4 className="text-xl font-semibold mb-2">Suporte de Qualidade</h4>
          <p className="text-gray-600">
            Atendimento rápido e eficiente, garantindo que sua experiência com a GameStore seja sempre positiva.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
