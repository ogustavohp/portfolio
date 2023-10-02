'use client'
import React, { useState } from 'react'
import db from '@/db/db.json'
import { Send } from 'lucide-react'

const contact = db.contact

export default function Form() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      setData({ name: '', email: '', message: '' })
    }
  }

  return (
    <form
      method="POST"
      action={'/api/send'}
      onSubmit={handleSubmit}
      className="flex w-full flex-col md:w-1/2"
    >
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
  )
}
