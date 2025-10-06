import { Link, NavLink } from 'react-router-dom'

function Header(){
  return (
    <header style={{borderBottom:'1px solid #e5e7eb'}}>
      <div style={{maxWidth:960, margin:'0 auto', padding:'16px', display:'flex', gap:24, alignItems:'center'}}>
        <Link to="/" style={{fontSize:18, fontWeight:700}}>GameStore</Link>
        <nav style={{display:'flex', gap:12}}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <div style={{marginLeft:'auto'}}>
          <NavLink to="/products/new" style={{padding:'6px 10px', border:'1px solid #e5e7eb', borderRadius:8}}>
            Novo Produto
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header