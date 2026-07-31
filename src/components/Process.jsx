import { motion } from "framer-motion"


const steps = [
  {
    number: '01',
    title: 'Solicitação',
    description: 'O cliente informa o serviço que precisa e explica sua necessidade.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Analisamos os detalhes e definimos a melhor solução.',
  },
  {
    number: '03',
    title: 'Criação',
    description: 'Desenvolvemos o material personalizado com atenção aos detalhes.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'O cliente recebe o arquivo final pronto para utilização.',
  },
]

function Process() {
  return (
    <section className="
relative
isolate
mx-auto
max-w-7xl
overflow-hidden
px-6
py-24
lg:px-8
">
  {/* Luz dourada */}
      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        -z-10
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-gold/10
        blur-[140px]
        "
      />

      {/* Luz vinho */}
      <div
        className="
        pointer-events-none
        absolute
        right-0
        top-1/3
        -z-10
        h-[350px]
        w-[350px]
        rounded-full
        bg-ruby/20
        blur-[120px]
        "
      />
  <div className="mx-auto mb-16 max-w-3xl text-center">
  <p className="text-xs uppercase tracking-[0.5em] text-gold/90">
    Como funciona
  </p>

  <h2
    className="
    mt-5
    max-w-3xl
    text-4xl
    font-semibold
    leading-tight
    text-white
    sm:text-5xl
    "
  >
    Um processo elegante,
    <span className="block text-gold">
      claro e profissional.
    </span>
  </h2>

  <p
    className="
    mt-5
    max-w-xl
    text-sm
    leading-7
    text-mist/60
    "
  >
    Do primeiro contato até a entrega final, cada etapa é pensada
    para transformar sua necessidade em uma solução visual de alto nível.
  </p>
</div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
  {steps.map((step, index) => (
    <motion.div
  key={step.title}
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.95,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.7,
    delay: index * 0.15,
    ease: "easeOut",
  }}
  whileHover={{
    y: -10,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-[2rem]
  border
  border-white/10
  bg-white/[0.03]
  p-8
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-gold/50
  hover:bg-white/[0.06]
  hover:shadow-[0_25px_60px_rgba(200,162,74,0.15)]
  "
>
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(200,162,74,0.18),transparent_50%)]
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        "
      />

      <div className="relative">

        <div
          className="
          text-6xl
          font-semibold
          tracking-[0.15em]
          text-gold/90
          transition
          duration-500
          group-hover:text-gold
          group-hover:drop-shadow-[0_0_15px_rgba(200,162,74,0.5)]
          "
        >
          {step.number}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-mist/70">
          {step.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ruby">
          <span className="h-2.5 w-2.5 rounded-full bg-ruby" />
          <span>Etapa {index + 1}</span>
        </div>

      </div>

    </motion.div>
  ))}
</div>
    </section>
  )
}

export default Process
