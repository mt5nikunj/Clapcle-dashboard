import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AxiosInterceptor from './core/components/Interceptor/Interceptor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AxiosInterceptor/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
