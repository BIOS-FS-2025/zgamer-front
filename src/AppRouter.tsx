import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { PlatformPage } from "./pages/PlatformPage"
import { RegisterPage } from "./pages/RegisterPage"

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
    element: <PlatformPage />
  }
])

function AppRouter() {

  return <RouterProvider router={router} />
}

export default AppRouter
