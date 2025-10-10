import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 
const BASE_URL = 'http://localhost:3000/api';
const empty = { title:'', price:'', platform:'', genre:'', stock:'', description:'', imageUrl:'' };
 
function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
 
  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      setLoading(true);
      setErrors([]);
      try {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setErrors(data.errors || ['Produto não encontrado']);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setForm({
          ...data,
          price: String(data.price ?? ''),
          stock: String(data.stock ?? '')
        });
      } catch (err) {
        console.error(err);
        setErrors(['Erro de rede']);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, isEdit]);
 
  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
 
  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    try {
      const url = isEdit ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products`;
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors || ['Erro ao salvar']);
        setLoading(false);
        return;
      }
      navigate('/products');
    } catch (err) {
      console.error(err);
      setErrors(['Erro de rede']);
    } finally {
      setLoading(false);
    }
  }
 
  async function onDelete() {
    if (!isEdit) return;
    if (!confirm('Excluir este produto?')) return;
    setLoading(true);
    setErrors([]);
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors || ['Erro ao excluir']);
        setLoading(false);
        return;
      }
      navigate('/products');
    } catch (err) {
      console.error(err);
      setErrors(['Erro de rede']);
    } finally {
      setLoading(false);
    }
  }
 
  return (
    <section>
      <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
        {isEdit ? 'Editar' : 'Novo'} Produto
      </h1>
 
      {errors.length > 0 && (
        <div style={{ color: '#dc2626', marginBottom: 12 }}>
          {errors.map((e, i) => <div key={i}>• {e}</div>)}
        </div>
      )}
 
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 10, maxWidth: 560 }}>
        <input name="title" value={form.title} onChange={onChange} placeholder="Título" required />
        <input name="price" value={form.price} onChange={onChange} placeholder="Preço" required />
        <input name="platform" value={form.platform} onChange={onChange} placeholder="Plataforma (PC, PS5...)" required />
        <input name="genre" value={form.genre} onChange={onChange} placeholder="Gênero (RPG, FPS...)" required />
        <input name="stock" value={form.stock} onChange={onChange} placeholder="Estoque" required />
        <input name="imageUrl" value={form.imageUrl} onChange={onChange} placeholder="URL da imagem (opcional)" />
        <textarea name="description" value={form.description} onChange={onChange} placeholder="Descrição" rows="4" required />
        <div style={{ display: 'flex', gap: 8 }}>
          <button disabled={loading}>{isEdit ? 'Salvar' : 'Criar'}</button>
          {isEdit && (
            <button type="button" onClick={onDelete}>
              Excluir
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
 
export default ProductForm;