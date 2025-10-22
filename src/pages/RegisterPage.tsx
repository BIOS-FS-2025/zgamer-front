import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      setIsLoading(true);
      await authService.register({ name, email, password});
      navigate('/login');
    } catch(err: any) {
      setError(err.response?.data?.message || 'Error al registrarse')
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-700 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-green-600 mb-2">
            🎮 Zona Gamer
          </h2>
          <h3 className="text-2xl font-bold text-gray-800">Crear Cuenta</h3>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Formik */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
              type="email"
              id="email"
              name="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <p className="text-gray-600 text-xs">Mínimo 6 caracteres</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full transition disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Registrando..." : "Registrarse"}
            </button>
            <Link
              to="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded text-center transition"
            >
              Volver al Inicio
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="font-bold text-green-600 hover:text-green-800">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};
