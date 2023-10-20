'use client'
import React, { useState } from 'react'
import db from '@/db/db.json'
import { Check, Send } from 'lucide-react'

const contact = db.contact

export default function Form() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sending, setSending] = useState<boolean>(false)
  const [send, setSend] = useState<boolean>(false)

  function emailSuccessfullySend() {
    setSend(true)
    setTimeout(() => {
      setSend(false)
    }, 3000)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      setData({ name: '', email: '', message: '' })
      setSending(false)
      emailSuccessfullySend()
    }
  }

  return (
    <>
      {sending && (
        <span className="fixed top-2 flex items-center rounded-full border bg-yellow-300 px-2 py-1 text-black transition-all">
          <svg
            aria-hidden="true"
            role="status"
            className="mr-2 h-4 w-4 animate-spin text-black"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Enviando...
        </span>
      )}

      {send && (
        <span className="fixed top-2 flex items-center rounded-full border border-primary-500 bg-primary-500 px-2 py-1 text-black transition-all">
          <Check className="mr-2" />
          Enviado com sucesso!
        </span>
      )}

      <form onSubmit={handleSubmit} className="flex w-full flex-col md:w-1/2">
        {/* input name */}
        <div className="flex w-full flex-col items-start">
          <label htmlFor="name" className="ml-2 text-base text-primary-500">
            {contact.name}
          </label>
          <input
            type="text"
            id="name"
            placeholder={contact.namePlaceholder}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
            required
          />
        </div>

        {/* input email */}
        <div className="mt-3 flex w-full flex-col items-start">
          <label htmlFor="email" className="mx-2 text-base text-primary-500">
            {contact.email}
          </label>
          <input
            type="email"
            id="email"
            placeholder={contact.emailPlaceholder}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
            required
          />
        </div>

        {/* textarea */}
        <div className="mt-3 flex w-full flex-col items-start">
          <label htmlFor="mensagem" className="mx-2 text-base text-primary-500">
            {contact.message}
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder={contact.messagePlaceHolder}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            value={data.message}
            className="h-60 w-full resize-none border border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-3 flex gap-2 self-end rounded-full bg-secondary-500 px-4 py-1 shadow transition-all hover:bg-blue-500 md:self-start"
        >
          Enviar
          <Send strokeWidth={1.25} />
        </button>
      </form>
    </>
  )
}
