import { Container } from '@/components/Container'
import Link from 'next/link'

export function Footer() {
  return (
    <Container as="footer" className="mt-20 mb-10 w-full text-sm text-neutral-700 text-center">
      <span>© NO HIT Dev {new Date().getFullYear()}</span>
      <span className="mx-2">—</span>
      <Link href="/terms">Mentions légales</Link>
    </Container>
  )
}
