import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LandProvide } from './LandContext.jsx'
import { ThemeProvide } from './ThemeContext.jsx'
import { CounterProvider } from './CounterContext.jsx'
import { CartProvider } from './CartContext.jsx'
import { UserProvider } from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <ThemeProvide>
            <UserProvider>
        <App/>
        </UserProvider>
        </ThemeProvide>
    </CartProvider>
)
