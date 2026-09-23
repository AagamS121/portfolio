import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { Header } from '../components/Header'

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main id="main" className="not-found container">
        <span className="eyebrow">ERROR / 404</span>
        <h1>Signal lost.</h1>
        <p>That page does not exist, or the link may have changed.</p>
        <Link className="button button-primary" to="/">
          <ArrowLeft size={18} /> Return home
        </Link>
      </main>
    </>
  )
}
