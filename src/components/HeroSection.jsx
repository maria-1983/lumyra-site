import { motion } from "framer-motion"
import logo from "../assets/logo.png"
function HeroSection() {
  return (
    <section
  className="
  relative
  isolate
  mx-auto
  grid
  max-w-7xl
  items-center
  gap-12
  overflow-hidden
  px-6
  py-24
  lg:grid-cols-[1.1fr_0.9fr]
  lg:px-8
  lg:py-32
  "
>{/* Luz dourada */}
<div
  className="
  pointer-events-none
  absolute
  left-0
  top-10
  -z-10
  h-[450px]
  w-[450px]
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
  bottom-0
  -z-10
  h-[400px]
  w-[400px]
  rounded-full
  bg-ruby/20
  blur-[140px]
  "
/>
      <motion.div
  className="space-y-8"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
     <div className="space-y-6">

  <div className="relative flex justify-start">
    <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl"></div>

    <img 
      src={logo} 
      alt="Marca LUMYRA" 
      className="relative h-40 w-40 object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.7)]"
    />
  </div>

<div className="premium-pill">
  Exclusividade profissional
</div>
</div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl">
  <span className="text-white">
    Soluções digitais
  </span>

  <span className="mt-2 block text-gold">
    premium
  </span>

  <span className="block text-white">
    para transformar sua presença profissional.
  </span>
</h1>
        <p className="max-w-2xl text-lg text-mist/70 sm:text-xl">
  A LUMYRA cria currículos, planilhas e documentos profissionais com design sofisticado, organização e atenção aos detalhes para valorizar sua imagem.
</p>
        <div className="flex flex-wrap gap-4">
          <a href="#contato" className="ruby-btn">
            Solicitar proposta
          </a>
          <a href="#servicos" className="rounded-full border border-gold/40 px-6 py-3 font-medium text-gold transition duration-300 hover:bg-gold/10">
            Ver serviços
          </a>
        </div>
      </motion.div>
  <motion.div
  className="premium-shell p-8"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
 <div
  className="
  premium-panel
  relative
  overflow-hidden
  rounded-[2rem]
  border
  border-gold/20
  bg-white/[0.04]
  p-8
  backdrop-blur-xl
  shadow-[0_25px_80px_rgba(0,0,0,0.45)]
  "
>
    <p className="text-sm uppercase tracking-[0.3em] text-gold">
      Presença premium
    </p>

    <h2 className="mt-4 text-2xl font-semibold text-white">
      Elegância, precisão e clareza em cada entrega.
    </h2>

          <div className="mt-8 space-y-4">
        {[
          'Currículos estratégicos',
          'Planilhas funcionais',
          'Documentos digitais refinados',
          'Arquivos organizados'
        ].map((item) => (
          <div
            key={item}
            className="
            group
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-4
            py-3
            transition
            duration-300
            hover:border-gold/40
            hover:bg-gold/10
            "
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gold"></span>

            <span className="text-mist/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
</section>
  )
}

export default HeroSection