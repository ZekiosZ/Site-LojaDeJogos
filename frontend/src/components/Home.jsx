function Home() {
  return (
    <main className=" text-gray-800">
      {/* Banner principal */}
      <section className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white h-[60vh] flex items-center justify-center px-6 rounded-xl">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Sua jornada gamer começa aqui
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Descubra os melhores jogos, consoles e acessórios em um só lugar.
          </p>
          <a
            href="/products"
            className="bg-white text-red-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition-transform"
          >
            Ver Produtos
          </a>
        </div>
      </section>

      {/* Seção de destaques rápidos */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWVzfGVufDB8fDB8fHww"
            alt="Jogos"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Novos Lançamentos</h3>
          <p className="text-gray-600">
            Fique por dentro dos títulos mais recentes e exclusivos do mercado.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1652197881268-d625ad54402b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWVzfGVufDB8fDB8fHww"
            alt="Acessórios"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Melhores Acessórios</h3>
          <p className="text-gray-600">
            Controles, headsets e periféricos para turbinar sua experiência.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdhbWVzJTIwcHJvbW9jYW98ZW58MHx8MHx8fDA%3D"
            alt="Suporte"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Promoções Exclusivas</h3>
          <p className="text-gray-600">
            Aproveite descontos especiais e ofertas imperdíveis para gamers.
          </p>
        </div>
      </section>

      {/* Seção de destaque com imagem */}
      <section className="bg-gray-100 py-20 px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto rounded-xl shadow-lg">
        <img
          src="/images/banner-gamer.jpg"
          alt="Banner gamer"
          className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Gamer Incomparável</h2>
          <p className="text-gray-600 mb-6">
            Na GameStore você encontra produtos de alta qualidade que transformam cada jogo em uma experiência única e imersiva.
          </p>
          <a
            href="/products"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Explore Agora
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
