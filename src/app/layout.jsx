import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - NO HIT Dev',
    default: 'NO HIT Dev - Une expertise Web et graphique à votre service.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="fr" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
