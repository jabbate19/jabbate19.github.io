import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type BtnVariant = 'primary' | 'secondary'

type ButtonProps = {
  variant?: BtnVariant
  to?: string
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({ variant = 'secondary', to, href, children, className, ...rest }: ButtonProps) {
  const cls = `btn ${variant === 'primary' ? 'btn-p' : 'btn-s'} ${className ?? ''}`.trim()
  if (to) {
    return <Link to={to} className={cls}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>
  }
  return <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>
}
