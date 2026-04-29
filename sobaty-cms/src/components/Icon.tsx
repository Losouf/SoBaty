import * as Icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

type IconProps = LucideProps & { name?: string | null }

export default function Icon({ name, ...props }: IconProps) {
  if (!name) return null
  const LucideIcon = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!LucideIcon) return null
  return <LucideIcon {...props} />
}
