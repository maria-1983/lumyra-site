import {
  FileText,
  Briefcase,
  LayoutGrid,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    title: 'Currículos Profissionais',
    description: 'Currículos modernos e personalizados para destacar experiências e competências.',
    icon: Briefcase,
  },
  {
    title: 'Planilhas Personalizadas',
    description: 'Planilhas organizadas para controle financeiro, negócios e produtividade.',
    icon: LayoutGrid,
  },
  {
    title: 'Documentos Digitais',
    description: 'Criação de documentos profissionais, modelos e arquivos personalizados.',
    icon: FileText,
  },
  {
    title: 'Soluções Digitais',
    description: 'Organização, conversão e criação de materiais digitais.',
    icon: Sparkles,
  },
]

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Serviços</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Soluções premium para o seu destaque profissional.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-gold/30 bg-black/40 backdrop-blur-xl p-7 shadow-[0_0_35px_rgba(212,175,55,0.12)] transition duration-500 hover:-translate-y-3 hover:border-gold/70 hover:shadow-[0_0_45px_rgba(212,175,55,0.3)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,162,74,0.12),transparent_45%)] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-gradient-to-br from-black to-red-950/40 text-gold shadow-[0_0_25px_rgba(212,175,55,0.25)] transition duration-500 group-hover:scale-110">
                </div>

                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist/70">{service.description}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ruby">
                  <span className="h-2.5 w-2.5 rounded-full bg-ruby" />
                 <span>Solução personalizada</span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
