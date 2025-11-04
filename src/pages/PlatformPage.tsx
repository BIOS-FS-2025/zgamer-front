import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { CreatePostModal } from "../components/CreatePostModal";
import { useState } from "react";

export function PlatformPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">🎮 Zona Gamer - Plataforma</h1>
              <p className="text-purple-200 mt-1">Bienvenido, {user?.name ?? user?.email}</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate('/')} className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition font-semibold">Ir al Inicio</button>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition font-semibold">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Noticias y Eventos Gamers</h2>
            <button onClick={() => setShowCreateModal(true)} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg cursor-pointer">✏️ Crear Nuevo Post</button>
          </div>
        </div>
      </div>

      {showCreateModal && (<CreatePostModal />)}
    </div>
  )
}