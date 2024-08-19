'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavLink } from '@/types'

export const NavigationLink = ({ route, name, newPage }: NavLink) => {
  const pathName = usePathname()
  let className =
    'py-1 px-3 rounded-md text-gray-600 dark:text-gray-300 font-medium transition'

  if (pathName === route) {
    className = `${className} bg-gray-300 dark:bg-gray-700`
  }

  return (
    <Link href={route} className={className}>
      {newPage ? (
        <>
          {name}
          <small className="glow-text ml-1 hidden text-center text-xs font-bold md:inline">
            NEW!
          </small>
        </>
      ) : (
        <>{name}</>
      )}
    </Link>
  )
}
