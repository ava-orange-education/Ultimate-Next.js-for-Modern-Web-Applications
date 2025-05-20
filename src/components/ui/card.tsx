import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white p-4 rounded-lg shadow transition hover:shadow-md cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
