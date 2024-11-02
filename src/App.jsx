// src/App.jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App