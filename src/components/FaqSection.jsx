import { useState } from 'react'

const faqs = [
  {
    question: 'A LUMYRA atende clientes de quais perfis?',
    answer: 'Atendemos profissionais, empresários, estudantes e equipes que buscam organização, clareza e apresentação impecável.',
  },
  {
    question: 'Os serviços são personalizados?',
    answer: 'Sim. Cada projeto é pensado conforme o objetivo, o público e o nível de sofisticação desejado.',
  },
  {
    question: 'É possível solicitar ajustes após o pedido?',
    answer: 'Claro. Trabalhamos com refinamentos para garantir que o resultado esteja alinhado com sua expectativa.',
  },
]

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Perguntas frequentes</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((item, index) => (
            <div key={item.question} className="premium-panel">
              <button className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setOpenFaq(index === openFaq ? -1 : index)}>
                <span className="text-lg font-medium text-white">{item.question}</span>
                <span className="text-2xl text-gold">{index === openFaq ? '−' : '+'}</span>
              </button>
              {index === openFaq && <p className="px-6 pb-6 text-mist/70">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
