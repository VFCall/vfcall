import { supabase } from '../lib/supabaseClient'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert('Erro ao enviar link de login: ' + error.message)
    } else {
      alert('Link de login enviado para seu e-mail!')
    }
  }

  return (
    <div style={{ backgroundColor: '#1B5E20', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, borderRadius: 8, border: 'none', width: 250 }}
      />
      <button onClick={handleLogin} style={{ marginTop: 20, padding: '10px 20px', background: 'white', color: '#1B5E20', borderRadius: 8, border: 'none' }}>Entrar</button>
    </div>
  )
}

