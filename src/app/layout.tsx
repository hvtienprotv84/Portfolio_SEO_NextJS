'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { initGA, logPageView } from '@/lib/analytics'
import { Layout } from '@/components'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()

  useEffect(() => {
    initGA()
    logPageView()
  }, [])

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-50 dark:bg-gray-900`}
      >
        <motion.div
          key={pathName}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
        >
          <Layout>{children}</Layout>
        </motion.div>
      </body>
    </html>
  )
}
