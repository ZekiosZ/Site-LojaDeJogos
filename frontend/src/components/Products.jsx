import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'

function Products(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')

  useEffect(() => {
    (async () => {
      const data = await api.listProducts()
      setItems(data)
      setLoading(false)
    })()
  }, [])

  async function handleSearch(e){
    e.preventDefault()
    setLoading(true)
    const data = await api.listProducts(q)
    setItems(data)
    setLoading(false)
  }

  if (loading) return <p>Carregando...</p>

  return (
    <section>
      <h1 style={{fontSize:20, fontWeight:600, marginBottom:12}}>Produtos</h1>

      <form onSubmit={handleSearch} style={{display:'flex', gap:8, marginBottom:16}}>
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Buscar..."
          style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px', width:240}}
        />
        <button style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}}>Buscar</button>
      </form>

      <ul style={{display:'grid', gap:12}}>
        {items.map(p => (
          <li key={p.id} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:12}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
              <div>
                <h2 style={{fontWeight:600}}>{p.title}</h2>
                <p style={{opacity:.8, fontSize:14}}>{p.platform} • {p.genre}</p>
                <p style={{fontSize:14}}>R$ {p.price} • Estoque: {p.stock}</p>
              </div>
              <div style={{display:'flex', gap:8}}>
                <Link to={`/products/${p.id}/edit`} style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'6px 10px'}}>Editar</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Products