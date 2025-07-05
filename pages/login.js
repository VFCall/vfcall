
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    const res = await fetch('https://turkejedgzqakpmwuwkj.supabase.co/auth/v1/magiclink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'YOUR_PUBLIC_ANON_KEY',
        'Authorization': 'Bearer YOUR_PUBLIC_ANON_KEY',
      },
      body: JSON.stringify({ email }),
    })
    alert('Link de login enviado para seu e-mail!')
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
  );
}
