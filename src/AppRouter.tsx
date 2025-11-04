import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { PlatformPage } from "./pages/PlatformPage"
import { RegisterPage } from "./pages/RegisterPage"
import { AuthProvider } from "./context/AuthProvider"
import { ProtectedRoute } from "./components/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/platform',
    element: (
      <ProtectedRoute>
        <PlatformPage />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <HomePage />
  }
])

function AppRouter() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)
}

export default AppRouter
