'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface EmailProps {
  name: string
  setName: (e: string) => void
  email: string
  setEmail: (e: string) => void
  message: string
  setMessage: (e: string) => void
}

const EmailContext = createContext<EmailProps | undefined>(undefined)

interface EmailContextProviderProps {
  children: ReactNode
}

export function EmailContextProvider({ children }: EmailContextProviderProps) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  return (
    <EmailContext.Provider
      value={{ name, setName, email, setEmail, message, setMessage }}
    >
      {children}
    </EmailContext.Provider>
  )
}

export function useEmailContext() {
  const email = useContext(EmailContext)
  if (email === undefined) {
    throw new Error(
      'useEmailContext deve ser usado dentro de um EmailContextProvider',
    )
  }
  return email
}
