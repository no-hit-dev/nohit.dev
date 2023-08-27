import { Container } from '@/components/Container'

export function Footer() {
  return (
    <Container as="footer" className="mt-20 mb-10 w-full text-sm text-neutral-700 text-center">
      © Studio Agency Inc. {new Date().getFullYear()}
    </Container>
  )
}
