import React, { ReactNode } from 'react'

export interface TextProps {
  type: 'description' | 'subtitle' | 'title' | 'paragraph'
  children: ReactNode
}

export const Text = ({ type, children }: TextProps) => {
  const element = {
    description: (
      <span className="font-regular text-sm text-gray-500">{children}</span>
    ),
    subtitle: (
      <h2 className="text-2xl font-semibold italic text-gray-900 dark:text-yellow-300">
        {children}
      </h2>
    ),
    title: (
      <h1 className="whitespace-normal text-4xl font-bold text-gray-900 dark:text-yellow-300 md:whitespace-nowrap">
        {children}
      </h1>
    ),
    paragraph: (
      <p className="text-sm font-medium text-gray-700 dark:text-gray-400 lg:text-base">
        {children}
      </p>
    ),
  }[type]

  return element
}
