const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'

async function http(path, opts = {}){
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers||{}) },
    ...opts
  })
  if (!res.ok) {
    const error = new Error('HTTP ' + res.status)
    error.json = () => res.json()
    throw error
  }
  return res.json()
}

export const api = {
  listProducts(q){
    const qs = q ? `?q=${encodeURIComponent(q)}` : ''
    return http(`/api/products${qs}`)
  },
  getProduct(id){
    return http(`/api/products/${id}`)
  },
  createProduct(data){
    return http(`/api/products`, { method: 'POST', body: JSON.stringify(data) })
  },
  updateProduct(id, data){
    return http(`/api/products/${id}`, { method: 'PUT', body: JSON.stringify(data) })
  },
  deleteProduct(id){
    return http(`/api/products/${id}`, { method: 'DELETE' })
  }
}
