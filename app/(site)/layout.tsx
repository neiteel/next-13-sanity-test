import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">logo</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}
          </div>
        </header>
        <main>
        {children}
        </main>

      
        </body>
    </html>
  )
}
