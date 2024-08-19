import { ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
}

export const ListItem = ({ children }: ListItemProps) => (
  <li className="font-base list-disc text-base text-gray-700 dark:text-gray-400">
    {children}
  </li>
)
