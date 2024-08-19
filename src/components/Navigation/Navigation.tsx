'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import { NavigationLinkOptions, NavLink } from '@/types'
import { Button, NavigationLink } from '@/components'

export const Navigation = ({ links }: NavigationLinkOptions) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="mx-4 mb-16 mt-4 flex max-w-screen-lg items-center justify-between rounded-md bg-gray-200 px-6 py-3 dark:bg-gray-800 dark:bg-opacity-50 md:mx-auto">
      <div className="flex items-center space-x-4">
        {links?.map((link: NavLink, index: number) => (
          <NavigationLink
            newPage={link.newPage}
            key={index}
            route={link.route}
            name={link.name}
          />
        ))}
      </div>
      <Button onClick={handleClick}>
        {theme === 'light' ? (
          <Image src="../images/sun.svg" alt="Sun" width={24} height={24} />
        ) : (
          <Image src="../images/moon.svg" alt="Moon" width={24} height={24} />
        )}
      </Button>
    </nav>
  )
}
