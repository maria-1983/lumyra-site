function HowItWorksSection() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="premium-shell p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Como funciona</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Processo simples, elegante e eficiente.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['1. Contato', 'Você envia sua demanda e objetivos.'],
            ['2. Estratégia', 'Montamos o melhor formato para o resultado desejado.'],
            ['3. Entrega', 'Receba um material refinado, claro e pronto para uso.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.25rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-mist/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
