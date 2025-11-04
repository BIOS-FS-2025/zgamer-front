import { useState } from "react";

export function CreatePostModal() {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: '',
  });
  const [creating, setCreating] = useState(false);

  return (
    <div>
      <div>
        <h3>Crear Post</h3>
        <form>
          <div>
            <label>Titulo *</label>
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value})}
              placeholder="Titulo del post..."
              required
            />
          </div>
          <div>
            <label>Contenido *</label>
            <textarea
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value})}
              placeholder="Escribe el contenido del post..."
              rows={6}
              required
            />
          </div>
          <div>
            <label>Tags (separados por comas)</label>
            <input
              type="text"
              value={newPost.tags}
              onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
              placeholder="gaming, esports, noticias..."
            />
          </div>
          <div>
            <button>{creating ? 'Creando post...' : 'Crear Post'}</button>
            <button>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}