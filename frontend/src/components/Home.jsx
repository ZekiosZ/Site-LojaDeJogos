function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-gray-800 text-center px-6">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Bem-vindo à <span className="text-red-500">GameStore</span>
      </h1>

      {/* Descrição */}
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        A maior loja de jogos online com os melhores títulos para todas as plataformas.
      </p>

      {/* Botão de ver produtos */}
      <a
        href="/products"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Ver Produtos
      </a>
    </section>
  );
}

export default Home;
