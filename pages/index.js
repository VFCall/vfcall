
export default function Home() {
  return (
    <div style={{ backgroundColor: '#1B5E20', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <h1>VFCall</h1>
      <p>Bem-vindo ao sistema de chamadas por QR Code</p>
      <a href="/login" style={{ marginTop: 20, padding: '10px 20px', background: 'white', color: '#1B5E20', borderRadius: 8, textDecoration: 'none' }}>Entrar</a>
    </div>
  );
}
