import { createContext, useContext, useState, ReactNode } from 'react'

// Definindo o tipo do contexto
type ThemeContextType = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// Criando o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Hook personalizado para acessar o contexto
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}

// Provedor de contexto que envolve a aplicação
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
