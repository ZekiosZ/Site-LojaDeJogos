import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
  <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl 
                   bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500
                   shadow-[0_8px_20px_rgba(236,72,153,0.35)]">
    <span className="pointer-events-none absolute inset-x-1 top-0 h-1.5 rounded-t-xl 
                     bg-white/50 blur-[1px]" />
    {/* gamepad */}
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white drop-shadow">
      <path fill="currentColor"
        d="M6 8h12a3 3 0 0 1 2.83 4.02l-1.02 3.05a3 3 0 0 1-2.85 2.08c-.9 0-1.74-.4-2.31-1.09L14 15h-4l-.65.99A3 3 0 0 1 7.04 17.1a3 3 0 0 1-2.85-2.08L3.17 12A3 3 0 0 1 6 8Zm3 2H8v2H6v2h2v2h2v-2h2v-2h-2v-2Zm7.5 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm2-2a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z" />
    </svg>
  </span>
  <span className="text-2xl font-black tracking-tight text-gray-800">
    Game<span className="text-gray-900">Store</span>
  </span>
</Link>
        {/* Navegação */}
        <nav className="flex gap-6 ml-10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-red-500"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-red-500"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-red-500"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-red-500"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
