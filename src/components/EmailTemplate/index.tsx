import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <span>Email: {email} </span>
    <span>
      Enviado por, {firstName}, email: {email}!
    </span>
    <p>{message}</p>
  </div>
)
