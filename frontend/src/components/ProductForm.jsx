import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'

const empty = { title:'', price:'', platform:'', genre:'', stock:'', description:'', imageUrl:'' }

function ProductForm(){
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const [form, setForm] = useState(empty)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (isEdit){
      (async () => {
        setLoading(true)
        const data = await api.getProduct(id)
        setForm({ ...data, price: String(data.price ?? ''), stock: String(data.stock ?? '') })
        setLoading(false)
      })()
    }
  }, [id])

  function onChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e){
    e.preventDefault()
    setLoading(true)
    setErrors([])
    try{
      if (isEdit){
        await api.updateProduct(id, form)
      } else {
        await api.createProduct(form)
      }
      navigate('/products')
    }catch(err){
      const data = (await err.json?.()) || {}
      setErrors(data.errors || ['Erro ao salvar'])
    }finally{
      setLoading(false)
    }
  }

  async function onDelete(){
    if (!isEdit) return
    if (!confirm('Excluir este produto?')) return
    await api.deleteProduct(id)
    navigate('/products')
  }

  return (
    <section>
      <h1 style={{fontSize:20, fontWeight:600, marginBottom:12}}>{isEdit ? 'Editar' : 'Novo'} Produto</h1>
      {errors.length > 0 && (
        <div style={{color:'#dc2626', marginBottom:12}}>
          {errors.map((e, i) => <div key={i}>• {e}</div>)}
        </div>
      )}

      <form onSubmit={onSubmit} style={{display:'grid', gap:10, maxWidth:560}}>
        <input name="title" value={form.title} onChange={onChange} placeholder="Título" required
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <input name="price" value={form.price} onChange={onChange} placeholder="Preço" required
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <input name="platform" value={form.platform} onChange={onChange} placeholder="Plataforma (PC, PS5...)" required
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <input name="genre" value={form.genre} onChange={onChange} placeholder="Gênero (RPG, FPS...)" required
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <input name="stock" value={form.stock} onChange={onChange} placeholder="Estoque" required
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <input name="imageUrl" value={form.imageUrl} onChange={onChange} placeholder="URL da imagem (opcional)"
               style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <textarea name="description" value={form.description} onChange={onChange} placeholder="Descrição" rows="4" required
                  style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}} />
        <div style={{display:'flex', gap:8}}>
          <button disabled={loading} style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}}>
            {isEdit ? 'Salvar' : 'Criar'}
          </button>
          {isEdit && (
            <button type="button" onClick={onDelete}
                    style={{border:'1px solid #e5e7eb', borderRadius:8, padding:'8px 12px'}}>
              Excluir
            </button>
          )}
        </div>
      </form>
    </section>
  )
}
export default ProductForm