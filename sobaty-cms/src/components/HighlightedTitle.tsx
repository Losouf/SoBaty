import React from 'react'

type Props = {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export default function HighlightedTitle({ text, className, as: Tag = 'h2' }: Props) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <span key={i}>{part}</span> : <React.Fragment key={i}>{part}</React.Fragment>,
      )}
    </Tag>
  )
}
