import './Toast.css'
import type { Toast as ToastType } from '../../hooks/useToast'

export function Toast({ toast }: { toast: ToastType }) {
  return (
    <div className={`toast ${toast ? 'on' : ''}`} role="status" aria-live="polite">
      <span>{toast?.message ?? ''}</span>
    </div>
  )
}
