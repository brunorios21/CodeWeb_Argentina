import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Terms() {
  return (
    <div className="page-wrap terms-page">
      <section className="mx-auto max-w-4xl px-4 pb-28 pt-32 sm:px-6 sm:pt-40">
        <Link to="/" className="terms-brand" aria-label="Volver al inicio de CodeWeb">
          <img src="/favicon.svg" alt="CodeWeb" width="32" height="32" decoding="async" />
          <span>Code<span className="gradient-text">Web</span></span>
        </Link>
        <p className="eyebrow mt-12">Información legal</p>
        <h1 className="page-title max-w-3xl">Términos y <span className="gradient-text">Condiciones.</span></h1>
        <p className="hero-copy max-w-2xl">Condiciones de uso, privacidad y alcance aplicables al sitio web y a las soluciones desarrolladas por CodeWeb.</p>

        <article className="terms-document">
          <section>
            <h2>Aceptación de los términos</h2>
            <p>El acceso y la navegación por este sitio implican la aceptación de estos Términos y Condiciones. Si no estás de acuerdo con alguna de sus disposiciones, te solicitamos no utilizar el sitio ni enviar información mediante sus formularios.</p>
            <p>CodeWeb puede actualizar este documento cuando sea necesario para reflejar cambios operativos, legales o tecnológicos. La versión publicada en este sitio será la aplicable al momento de la navegación.</p>
          </section>
          <section>
            <h2>Propiedad intelectual y derechos de autor</h2>
            <p>Los contenidos del sitio, su identidad visual, textos, interfaces, recursos gráficos y código están protegidos por las normas aplicables de propiedad intelectual. No está permitida su reproducción, modificación, distribución o uso comercial sin autorización previa y expresa de CodeWeb.</p>
            <p>Las soluciones desarrolladas para cada cliente, incluyendo código fuente, diseños, documentación y activos, se regirán por la propuesta, contrato o acuerdo comercial correspondiente. La transferencia de derechos, licencias de uso y entregables se definirá de forma expresa en dicho acuerdo.</p>
          </section>
          <section>
            <h2>Uso del sitio y responsabilidad</h2>
            <p>El sitio se proporciona con fines informativos y de contacto comercial. CodeWeb procura mantener la información actualizada y accesible, pero no garantiza que el sitio opere de manera ininterrumpida ni que esté libre de errores, incompatibilidades técnicas o interrupciones ajenas a su control.</p>
            <p>CodeWeb no asume responsabilidad por daños derivados del uso indebido del sitio, de enlaces externos o de decisiones tomadas exclusivamente a partir de la información publicada. Cada servicio contratado se ajustará al alcance y las condiciones acordadas con el cliente.</p>
          </section>
          <section>
            <h2>Datos personales, privacidad y cookies</h2>
            <p>Los datos enviados a través de los canales de contacto se utilizan para responder consultas, preparar propuestas y dar seguimiento a una relación comercial. No se comercializan ni se ceden a terceros, salvo obligación legal o autorización expresa de la persona titular.</p>
            <p>Este sitio utiliza almacenamiento local para recordar la decisión sobre cookies. Las cookies necesarias permiten el funcionamiento técnico del sitio; las preferencias adicionales solo se activan con consentimiento. Podés modificar o eliminar estos datos desde la configuración de tu navegador.</p>
          </section>
          <section>
            <h2>Jurisdicción y legislación aplicable</h2>
            <p>Estos términos se interpretan conforme a la legislación aplicable en la República Argentina. Ante cualquier controversia vinculada con el uso del sitio, las partes procurarán una instancia de diálogo previo y, de ser necesario, se someterán a la jurisdicción de los tribunales competentes de la Ciudad Autónoma de Buenos Aires.</p>
          </section>
        </article>
        <Link to="/" className="terms-back"><ArrowLeft size={16} /> Volver al inicio</Link>
      </section>
    </div>
  )
}
