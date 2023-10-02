import { EmailTemplate } from '@/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const redirectURL = new URL('/', req.url)
  try {
    const body = await req.json()
    const { email, name, message } = body
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gustavohpereira1.6@gmail.com'],
      subject: 'E-mail Portfólio',
      react: EmailTemplate({
        firstName: name,
        email,
        message,
      }) as React.ReactElement,
    })
    if (data.id) {
      console.log('enviado com sucesso')
    }

    return NextResponse.redirect(redirectURL)
  } catch (error) {
    console.log('error', error)
    return NextResponse.redirect(redirectURL)
  }
}
