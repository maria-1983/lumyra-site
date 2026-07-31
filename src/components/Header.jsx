import logo from '../assets/logo.png'

const navItems = ['Início', 'Sobre', 'Serviços', 'Como funciona', 'FAQ', 'Contato']

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
         <img 
  src={logo} 
  alt="Logo LUMYRA" 
  className="h-28 w-auto drop-shadow-[0_0_35px_rgba(212,175,55,0.5)]"
/>
        </a>
        <nav className="hidden gap-6 text-sm text-mist/80 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="gold-link">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
