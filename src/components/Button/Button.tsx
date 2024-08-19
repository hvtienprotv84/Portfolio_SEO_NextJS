import { ReactNode } from 'react'
import { Text } from '../Text'
import { ButtonLinkOptions } from '@/types'

interface ButtonProps {
  onClick?: () => void
  children?: ReactNode
  type?: 'button' | 'link'
  linkOptions?: ButtonLinkOptions
}

export const Button = ({
  onClick,
  children,
  linkOptions,
  type = 'button',
}: ButtonProps) => {
  const element = {
    button: (
      <button
        type="button"
        className="text-gray-600 dark:text-gray-300"
        onClick={onClick}
        aria-label={type}
      >
        {children}
      </button>
    ),
    link: (
      <div className="flex items-center space-x-1">
        <a
          target="_blank"
          href={linkOptions?.href}
          rel="noopener noreferrer"
          className="dark:bg-gray-00 rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Text type="paragraph">{linkOptions?.name}</Text>
        </a>
        {linkOptions?.description && (
          <Text type="description">{linkOptions?.description}</Text>
        )}
      </div>
    ),
  }[type]
  return element
}
