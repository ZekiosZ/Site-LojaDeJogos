import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const BASE_URL = 'http://localhost:3000/api';

async function listProducts(q) {
  let url = `${BASE_URL}/products`;
  if (q) url += `?q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  return res.json();
}

function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setItems(data);
      setLoading(false);
    })();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    const data = await listProducts(q);
    setItems(data);
    setLoading(false);
  }

  if (loading) return <p className="text-gray-700">Carregando...</p>;

  return (
    <section className="space-y-4">
      <h1 className="text-[20px] font-semibold">Produtos</h1>

      {/* Ações: Buscar + Novo Produto */}
      <div className="flex items-center gap-2">
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar..."
            className="w-60 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-gray-400"
          />
          <button
            type="submit"
            className="rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-50 transition-colors"
          >
            Buscar
          </button>
        </form>

        <NavLink
          to="/products/new"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-red-500 hover:text-white transition-colors font-medium"
        >
          Novo Produto
        </NavLink>
      </div>

      {/* Listra verde*/}
      <ul className="grid gap-6">
        {items.map(p => (
          <li
            key={p.id}
            className="
              group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90
              shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl
            "
          >
            {/* blade/aura verde mais larga */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-b from-lime-400/70 to-emerald-500/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-lime-300/15 via-emerald-300/10 to-transparent" />
            </div>

            <div className="relative flex items-center justify-between gap-6 p-6">
              <div className="flex items-center gap-6">
                {/* capa GRANDE com glow */}
                <div
                  className="
                    w-[112px] h-[112px] rounded-2xl overflow-hidden shrink-0
                    ring-1 ring-gray-200 transition-transform duration-200
                    group-hover:ring-lime-400/40 group-hover:scale-[1.02]
                    shadow-[0_12px_28px_rgba(132,204,22,0.18)]
                  "
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="truncate font-semibold text-gray-900 tracking-tight text-lg">
                    {p.title}
                  </h2>

                  {/* Aumento de tamanho nos cards */}
                  <div className="mt-2 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-base font-medium text-gray-700">
                      {p.platform}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-base font-medium text-gray-700">
                      {p.genre}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lime-50 px-3.5 py-1.5 text-base font-medium text-lime-700 ring-1 ring-inset ring-lime-300/60">
                      Estoque: {p.stock}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* preço destacado */}
                <div className="hidden sm:flex items-center rounded-full bg-white px-4 py-2.5 text-lg font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm">
                  R$ {p.price}
                </div>

                <Link
                  to={`/products/${p.id}/edit`}
                  className="
                    inline-flex items-center rounded-xl border border-gray-300
                    px-4 py-2.5 text-lg font-medium text-gray-800
                    hover:border-lime-400 hover:text-lime-700 hover:shadow
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60
                    transition-all
                  "
                >
                  Editar
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
