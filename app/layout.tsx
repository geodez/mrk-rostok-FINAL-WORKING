import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'МРК Росток - Мобильный растворный комплекс для агродронов',
  description: 'Увеличьте выработку агродронов на 40%. Производительность до 380 га за смену. Мобильный растворный комплекс от Козельского механического завода.',
  keywords: 'МРК, агродроны, растворный комплекс, сельское хозяйство, КоМЗ, DJI Agras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
