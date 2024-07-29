import AuthPage from '@/auth-page/page'
import HomePage from '@/home-page/page'

export default function Home() {
  const user = true
  return <main>{user ? <HomePage /> : <AuthPage />}</main>
}
