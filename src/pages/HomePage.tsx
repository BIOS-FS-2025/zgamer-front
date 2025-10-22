import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                🎮 Zona Gamer
              </h1>
              <p className="text-lg md:text-xl text-purple-200">
                Noticias y Eventos del Mundo Gamer
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/login"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition font-bold shadow-lg"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-bold shadow-lg"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
