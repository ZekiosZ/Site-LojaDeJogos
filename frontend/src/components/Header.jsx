import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          GameStore
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

        {/* Botão Novo Produto */}
        <div className="ml-auto">
          <NavLink
            to="/products/new"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-red-500 hover:text-white transition-colors font-medium"
          >
            Novo Produto
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
