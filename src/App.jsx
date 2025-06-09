import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommonLayout from './components/Layout/CommonLayout'
import { AuthProvider } from './provider/AuthContext'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import UserPage from './pages/UserPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes>
        <Route element={<CommonLayout/>}>
          <Route path="/" element={<MainPage />} />
          <Route path="/user-page" element={<UserPage/>}/>
        </Route>
      </Routes>
    </AuthProvider>

  )
}

export default App
