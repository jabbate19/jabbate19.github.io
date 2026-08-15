import { ContactSide } from '../components/contact/ContactSide'
import { useToast } from '../hooks/useToast'
import { Toast } from '../components/ui/Toast'

export function ContactPage() {
  const { toast, show } = useToast()

  return (
    <>
      <div className="intro">
        <div className="eyebrow">Connect</div>
        <h1 className="h1 h1-connect">
          <span>Come</span>
          <span>Find me</span>
          <span>Elsewhere</span>
        </h1>
      </div>

      <div style={{ paddingBottom: 44 }}>
        <ContactSide onToast={show} />
      </div>

      <Toast toast={toast} />
    </>
  )
}
