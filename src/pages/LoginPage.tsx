import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => { //Manejar el envío del formulario
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      navigate('/platform');
    } catch(error: unknown) {
      console.log(error);
      if (error instanceof AxiosError && error.response?.status === 400) {
        setError(error.response?.data?.message || "Error al iniciar sesión");
        return;
      }

      setError('Error al iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-2">🎮 Zona Gamer</h2>
          <h3 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h3>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 border-red-400 test-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}> {/* Manejar el envío del formulario */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-500"
              id="email"
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-500"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full transition disabled:opacity-"
              type="submit"
              disabled={isLoading}
            >{isLoading ? 'Iniciando sesión...' : 'Entrar'}</button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="font-bold text-purple-600 hove:text-purple-800">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}