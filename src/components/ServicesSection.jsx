const services = [
  {
    title: 'Currículos profissionais',
    description: 'Estruturas impactantes, linguagem estratégica e posicionamento de destaque para o mercado.',
  },
  {
    title: 'Planilhas personalizadas',
    description: 'Organização, controle e automação com layouts sofisticados para rotina e gestão.',
  },
  {
    title: 'Documentos digitais',
    description: 'Apresentações, contratos e materiais premium com identidade visual elegante e profissional.',
  },
  {
    title: 'Organização de arquivos',
    description: 'Arquivos limpos, categorizados e prontos para acesso rápido, segurança e praticidade.',
  },
]

function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Serviços</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Atendimento completo com excelência e sofisticação.</h2>
        </div>
        <p className="max-w-xl text-mist/70">Cada serviço é elaborado com cuidado, trazendo modernidade, clareza e resultado profissional.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="premium-panel p-8 transition duration-300 hover:-translate-y-1 hover:border-gold/60">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-mist/70">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
