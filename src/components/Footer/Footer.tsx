import React, { ReactNode } from 'react'

export interface FooterProps {
  children: ReactNode
}

export const Footer = ({ children }: FooterProps) => (
  <footer className="mx-auto my-12 max-w-screen-lg px-6">
    <nav className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-300">
      {children}
    </nav>
  </footer>
)
