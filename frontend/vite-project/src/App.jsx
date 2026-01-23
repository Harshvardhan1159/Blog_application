// App.jsx (Improved version)
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import Blogs from "./components/blogs.jsx"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  }
])

function App() {
  return <RouterProvider router={appRouter} />
}

export default App