'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Twitter, Linkedin, GitHub } from 'react-feather'

import { Footer } from '../Footer'
import { Navigation } from '../Navigation'
import { Links } from '@/routes'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Navigation links={Links} />
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">{children}</div>
      <Footer>
        <a
          target="_blank"
          href="https://github.com/yourprofile"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label="GitHub"
        >
          <GitHub className="cursor-pointer" size={20} />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/yourprofile"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="cursor-pointer" size={20} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/yourprofile"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="cursor-pointer" size={20} />
        </a>
      </Footer>
    </ThemeProvider>
  )
}
