function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="premium-shell p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Contato</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Pronto para elevar seu projeto?</h2>
            <p className="mt-4 text-mist/70">Entre em contato para discutir seu projeto com um atendimento premium e personalizado.</p>
          </div>
          <div className="premium-panel p-6">
            <p className="text-mist/70">Email: contato@lumyra.com.br</p>
            <p className="mt-3 text-mist/70">WhatsApp: (11) 99999-0000</p>
            <div className="mt-6 flex gap-3">
  <a
    href="https://wa.me/5511999990000"
    target="_blank"
    rel="noopener noreferrer"
    className="ruby-btn inline-flex"
  >
    WhatsApp
  </a>

  <a
    href="mailto:contato@lumyra.com.br"
    className="ruby-btn inline-flex"
  >
    Gmail
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
