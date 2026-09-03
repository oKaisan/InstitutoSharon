import { useEffect, useState } from 'react'
import { ArrowUpRight, AtSign, ChevronDown, MapPin, Menu, MessageCircle, MoveRight, Search, ShieldCheck, X } from 'lucide-react'
import './App.css'
import './footer.css'
import { locations, locationSearchUrl } from './data/locations'

const imageRoot = '/images/instituto'
const logo = `${imageRoot}/logo/710280210_18073792778661261_6655366951243055175_n.jpg`
const courseImages = [
  'WhatsApp Image 2026-09-03 at 20.09.00.jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.01 (1).jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.01 (2).jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.01.jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.02 (1).jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.02 (2).jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.02 (3).jpeg',
  'WhatsApp Image 2026-09-03 at 20.09.02.jpeg',
]
const patientImages = [
  'WhatsApp Image 2026-09-03 at 20.12.42 (1).jpeg',
  'WhatsApp Image 2026-09-03 at 20.12.42 (2).jpeg',
  'WhatsApp Image 2026-09-03 at 20.12.42 (3).jpeg',
  'WhatsApp Image 2026-09-03 at 20.12.42 (4).jpeg',
  'WhatsApp Image 2026-09-03 at 20.12.42.jpeg',
  'WhatsApp Image 2026-09-03 at 20.15.30.jpeg',
  'WhatsApp Image 2026-09-03 at 20.15.31 (1).jpeg',
  'WhatsApp Image 2026-09-03 at 20.15.31 (2).jpeg',
  'WhatsApp Image 2026-09-03 at 20.15.31.jpeg',
]
const courses = [
  { title: 'Harmonização Orofacial', category: 'HOF', type: 'Capacitação', image: courseImages[0] },
  { title: 'Especialização em Estética', category: 'Estética', type: 'Especialização', image: courseImages[1] },
  { title: 'Formação em Saúde', category: 'Saúde', type: 'Capacitação', image: courseImages[2] },
  ...courseImages.slice(3).map((image, index) => ({ title: `Material oficial de curso ${String(index + 4).padStart(2, '0')}`, category: 'Formação', type: 'Conteúdo editável', image })),
]
const faqs = ['Quais cursos estão com inscrições abertas?', 'Como faço minha matrícula?', 'Os cursos são presenciais?', 'Quem pode participar dos cursos?', 'Como funciona o atendimento para pacientes?', 'Como posso ser paciente modelo?']

function CoursesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const categories = ['Todos', 'HOF', 'Especialização', 'Estética', 'Saúde', 'Formação']
  const visibleCourses = courses.filter((course) => (category === 'Todos' || course.category === category) && course.title.toLowerCase().includes(query.toLowerCase()))

  return <div className="courses-page">
    <header className="courses-page-header"><a className="brand" href="#inicio" aria-label="Voltar para o início"><img src={logo} alt="Logo Instituto Sharon" /></a><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></header>
    <main className="courses-page-main"><div className="section-kicker">Instituto Sharon / Formação profissional</div><h1>Encontre o próximo passo<br /><em>da sua carreira.</em></h1><p className="courses-page-intro">Explore as formações do Instituto Sharon. O catálogo está preparado para receber informações oficiais de turmas, modalidades e inscrições.</p><div className="course-toolbar"><label className="course-search"><Search size={17} /><span className="sr-only">Buscar curso</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar curso" /></label><div className="course-filters" aria-label="Filtrar cursos">{categories.map((item) => <button className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div><div className="course-page-grid">{visibleCourses.map((course, index) => <article className="course-page-card" key={course.title}><div className="course-page-image"><img src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt={`Material do curso ${course.title}`} /><span>Conteúdo editável</span></div><div className="course-page-info"><div className="course-meta"><span>{course.category}</span><span>{course.type}</span></div><h2>{course.title}</h2><p>Informações de turma, modalidade e calendário serão confirmadas pela equipe do Instituto Sharon.</p><a className="button button-dark" href="/#matricula">Quero receber informações <MoveRight size={17} /></a></div><span className="course-index">0{index + 1}</span></article>)}</div>{visibleCourses.length === 0 && <p className="empty-courses">Nenhum curso encontrado com esses filtros.</p>}</main>
  </div>
}

type SitePageProps = { title: string; emphasis: string; eyebrow: string; children: React.ReactNode }

function SitePage({ title, emphasis, eyebrow, children }: SitePageProps) {
  return <div className="site-page"><header className="courses-page-header"><a className="brand" href="#inicio" aria-label="Voltar para o início"><img src={logo} alt="Logo Instituto Sharon" /></a><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></header><main className="site-page-main"><div className="section-kicker">{eyebrow}</div><h1>{title}<br /><em>{emphasis}</em></h1>{children}</main></div>
}

function InstitutePage() {
  const rooms = ['Salas de aula', 'Clínica e atendimento', 'Recepção e convivência']
  return <SitePage title="Um espaço para" emphasis="aprender e evoluir." eyebrow="Instituto Sharon / Estrutura"><p className="page-intro">Conheça a estrutura preparada para conectar formação profissional, saúde e cuidado em Manaus.</p><div className="structure-grid">{rooms.map((room) => <article className="structure-card" key={room}><div className="structure-placeholder"><span>Imagem oficial<br />em breve</span></div><div><div className="section-kicker">Instituto Sharon</div><h2>{room}</h2><p>Conteúdo da estrutura será atualizado com imagens e informações oficiais da equipe.</p></div></article>)}</div></SitePage>
}

function PatientsPage() {
  return <SitePage title="Cuidado com" emphasis="conhecimento por trás." eyebrow="Instituto Sharon / Para pacientes"><p className="page-intro">Conheça as áreas de atendimento do Instituto Sharon em Manaus, com técnica, acolhimento e responsabilidade.</p><div className="patient-page-grid"><div className="patient-page-copy"><div className="patient-categories page-categories"><span>Estética</span><span>Odontologia</span><span>Harmonização Orofacial</span><span>Saúde</span><span>Bem-estar</span></div><a className="button button-dark" href="#contato">Agendar atendimento <MoveRight size={17} /></a></div><div className="patient-page-gallery">{patientImages.slice(0, 4).map((image, index) => <img key={image} src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`Imagem de referência para pacientes ${index + 1}`} loading="lazy" />)}</div></div><div className="page-callout"><h2>Quer participar como <em>Paciente Modelo?</em></h2><p>Participe de experiências práticas realizadas em ambiente de formação e supervisão profissional.</p><a className="text-link" href="#contato">Quero ser paciente modelo <ArrowUpRight size={16} /></a></div></SitePage>
}

function LocationsPage() {
  const location = locations[0]
  return <SitePage title="Estamos em" emphasis="Manaus." eyebrow="Instituto Sharon / Onde estamos"><p className="page-intro">Venha conhecer a unidade principal do Instituto Sharon.</p><article className="location-page-card"><div><span className="location-tag"><MapPin size={14} /> Unidade principal</span><h2>Manaus — AM</h2><p>{location.address}</p><a className="button button-dark" href={location.googleMapsUrl ?? locationSearchUrl} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={16} /></a></div><iframe title="Mapa da unidade Instituto Sharon em Manaus" src="https://www.openstreetmap.org/export/embed.html?bbox=-60.035%2C-3.079%2C-60.015%2C-3.059&layer=mapnik&marker=-3.069875%2C-60.025032" loading="lazy" /></article></SitePage>
}

function ContactPage() {
  return <SitePage title="Vamos conversar" emphasis="sobre seu próximo passo." eyebrow="Instituto Sharon / Atendimento"><p className="page-intro">Fale com a equipe do Instituto Sharon para receber orientação sobre cursos, atendimento e paciente modelo.</p><div className="contact-page-grid"><div className="contact-facts contact-page-facts"><span><strong>Localização</strong><br />Manaus — AM</span><span><strong>Instagram</strong><br />@institutosharon</span></div><div className="contact-page-form"><h2>Tem uma pergunta?</h2><form><label>Nome completo<input required placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required placeholder="(92) 00000-0000" /></label><label>Mensagem<textarea required placeholder="Como podemos ajudar?" /></label><button className="button button-dark" type="submit">Falar com a equipe <MoveRight size={17} /></button></form></div></div></SitePage>
}

function ResultsPage() {
  return <SitePage title="Antes e depois" emphasis="que contam histórias." eyebrow="Instituto Sharon / Resultados"><p className="page-intro">Imagens de referência compartilhadas pelo Instituto Sharon. Conteúdos sujeitos à confirmação e autorização da equipe.</p><div className="result-page-strip">{patientImages.map((image, index) => <figure key={image}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`${index % 2 === 0 ? 'Antes' : 'Depois'}: resultado de paciente ${index + 1}`} loading="lazy" /><figcaption>{index % 2 === 0 ? 'Antes' : 'Depois'}</figcaption></figure>)}</div><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver mais no Instagram <AtSign size={16} /></a></SitePage>
}

function InstagramPage() {
  const instagramImage = `${imageRoot}/instagram/${encodeURIComponent('WhatsApp Image 2026-09-03 at 21.07.56.jpeg')}`
  return <SitePage title="Conheça o Instituto Sharon" emphasis="no Instagram." eyebrow="Instituto Sharon / Instagram"><div className="instagram-page-grid"><div><p className="page-intro">Acompanhe o dia a dia, os espaços e as novidades do Instituto Sharon em Manaus.</p><a className="button button-dark" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Seguir @institutosharon <AtSign size={16} /></a></div><a className="instagram-feature" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer"><img src={instagramImage} alt="Fachada do Instituto Sharon" /><span>Ver perfil no Instagram <ArrowUpRight size={16} /></span></a></div></SitePage>
}

function App() {
  const [siteRoute, setSiteRoute] = useState(() => window.location.hash.replace('#', '') || 'inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => { const handleHashChange = () => setSiteRoute(window.location.hash.replace('#', '') || 'inicio'); window.addEventListener('hashchange', handleHashChange); return () => window.removeEventListener('hashchange', handleHashChange) }, [])
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')
    const mapTimer = window.setTimeout(() => document.querySelectorAll<HTMLElement>('.map-placeholder').forEach((map) => {
      map.innerHTML = '<iframe title="Mapa da unidade Instituto Sharon em Manaus" src="https://www.openstreetmap.org/export/embed.html?bbox=-60.035%2C-3.079%2C-60.015%2C-3.059&layer=mapnik&marker=-3.069875%2C-60.025032" loading="lazy"></iframe>'
    }), 0)
    const revealTargets = document.querySelectorAll<HTMLElement>('.section-pad > *, .patient-copy, .patient-visual, .pillar, .course-card, .location-card')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      observer.observe(target)
    })
    return () => { observer.disconnect(); window.clearTimeout(mapTimer); document.documentElement.classList.remove('reveal-ready') }
  }, [])
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setFormLoading(true); window.setTimeout(() => { setFormLoading(false); setSubmitted(true) }, 650) }

  if (siteRoute === 'cursos') return <CoursesPage />
  if (siteRoute === 'instituto') return <InstitutePage />
  if (siteRoute === 'pacientes') return <PatientsPage />
  if (siteRoute === 'unidades') return <LocationsPage />
  if (siteRoute === 'resultados') return <ResultsPage />
  if (siteRoute === 'instagram') return <InstagramPage />
  if (siteRoute === 'contato' || siteRoute === 'matricula') return <ContactPage />

  return <div className="site-shell home-shell">
    <div className="topline"><span>Instituto Sharon</span><span>Educação • Saúde • Estética</span><span>Manaus — AM</span></div>
    <header className="navbar"><a className="brand" href="#inicio" onClick={closeMenu} aria-label="Instituto Sharon, início"><img src={logo} alt="Logo Instituto Sharon" /></a><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal"><a href="#instituto" onClick={closeMenu}>Instituto</a><a href="#cursos" onClick={closeMenu}>Cursos</a><a href="#pacientes" onClick={closeMenu}>Pacientes</a><a href="#unidades" onClick={closeMenu}>Unidades</a><a href="#resultados" onClick={closeMenu}>Resultados</a><a href="#instagram" onClick={closeMenu}>Instagram</a><a href="#contato" onClick={closeMenu}>Contato</a><a className="nav-cta" href="#matricula" onClick={closeMenu}>Matricule-se <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Um novo olhar para o cuidado</p><h1>Conhecimento que transforma.<br /><em>Cuidado que permanece.</em></h1><p className="hero-text">Excelência em saúde, estética e formação profissional para quem busca evoluir com propósito.</p><div className="hero-actions"><a className="button button-dark" href="#cursos">Conheça nossos cursos <MoveRight size={17} /></a><a className="text-link" href="#pacientes">Agende seu atendimento <ArrowUpRight size={16} /></a></div><div className="hero-proof"><span className="proof-mark"><ShieldCheck size={16} /></span><span>Educação, saúde e estética<br /><strong>em um só lugar</strong></span></div></div><div className="hero-visual"><div className="hero-image" role="img" aria-label="Fachada do Instituto Sharon em Manaus"></div><div className="hero-note"><span>01</span><p>Manaus<br /><strong>Amazonas</strong></p><ArrowUpRight size={19} /></div><div className="hero-stamp"><span>IS</span><small>Excelência<br />em cada detalhe</small></div></div></section>
      <section className="courses home-courses section-pad" id="formacao"><div className="section-heading"><div><div className="section-kicker">03 / Formação profissional</div><h2>Conheça nossos <em>cursos.</em></h2></div><p>Uma prévia das formações do Instituto Sharon. Acesse o catálogo completo para ver todos os detalhes.</p></div><div className="home-course-grid">{courses.slice(0, 3).map((course, index) => <article className="home-course-card" key={course.title}><div className="home-course-image"><img src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt={`Material do curso ${course.title}`} loading="lazy" /></div><div><span>{course.category} / {course.type}</span><h3>{course.title}</h3><a href="#cursos" className="course-link">Ver curso <ArrowUpRight size={16} /></a></div><b>0{index + 1}</b></article>)}</div><a href="#cursos" className="button button-dark home-catalog-button">Abrir catálogo completo <MoveRight size={17} /></a></section>
      <section className="patient-band patient-area" id="pacientes"><div className="patient-copy"><div className="section-kicker">04 / Para pacientes</div><h2>Cuidados pensados<br /><em>para você.</em></h2><p>Conheça as áreas de atendimento do Instituto Sharon em Manaus, com técnica, acolhimento e responsabilidade.</p><div className="patient-categories"><span>Estética</span><span>Odontologia</span><span>Harmonização Orofacial</span><span>Saúde</span><span>Bem-estar</span></div><a className="button button-light" href="#contato">Agendar atendimento <MoveRight size={17} /></a></div><div className="patient-visual"><div className="patient-gallery">{patientImages.slice(0, 3).map((image, index) => <div className="patient-gallery-frame" key={image}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`Imagem de atendimento para pacientes ${index + 1}`} loading="lazy" /><span>{index === 0 ? 'Atendimento' : index === 1 ? 'Cuidado' : 'Resultado'}</span></div>)}</div></div></section>
      <section className="model-section model-before-after section-pad"><div className="model-art"><div className="model-pair"><div><img src={`${imageRoot}/pacientes/${encodeURIComponent(patientImages[0])}`} alt="Imagem de referência antes do procedimento" /><span>Antes</span></div><div><img src={`${imageRoot}/pacientes/${encodeURIComponent(patientImages[1])}`} alt="Imagem de referência depois do procedimento" /><span>Depois</span></div></div></div><div className="model-copy"><div className="section-kicker">05 / Experiência prática</div><h2>Seja um <em>Paciente Modelo.</em></h2><p>Participe das experiências práticas do Instituto Sharon e acompanhe de perto procedimentos realizados em um ambiente de formação e supervisão profissional.</p><p className="model-note">Resultados e imagens apresentados devem ser confirmados e autorizados pela equipe.</p><a className="button button-dark" href="#matricula">Quero ser paciente modelo <ArrowUpRight size={16} /></a></div></section>
      <section className="results section-pad" id="resultados"><div className="section-heading"><div><div className="section-kicker">06 / Antes e depois</div><h2>Resultados que <em>continuam.</em></h2></div><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver no Instagram <AtSign size={16} /></a></div><div className="result-strip" aria-label="Galeria de antes e depois"><div className="result-track">{[...patientImages, ...patientImages].map((image, index) => <div className="result-frame" key={`${image}-${index}`}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`${index % 2 === 0 ? 'Antes' : 'Depois'}: resultado de paciente ${index % patientImages.length + 1}`} loading="lazy" /><span className="result-label">{index % 2 === 0 ? 'Antes' : 'Depois'}</span></div>)}</div></div><div className="carousel-controls"><span>Imagens de referência, sujeitas à confirmação da equipe</span><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver mais <AtSign size={16} /></a></div></section>
      <section className="locations section-pad" id="unidades"><div className="section-heading"><div><div className="section-kicker">07 / Onde estamos</div><h2>Estamos em <em>Manaus.</em></h2></div><p>Venha conhecer o Instituto Sharon.</p></div><div className="location-list">{locations.map((location) => <article className={location.status === 'principal' ? 'location-card location-card-primary' : 'location-card'} key={`${location.city}-${location.state}`}><div className="location-details"><span className="location-tag"><MapPin size={14} /> {location.status === 'principal' ? 'Unidade principal' : 'Unidade editável'}</span><h3>{location.city} — {location.state}</h3><p>{location.address ?? 'Endereço oficial da unidade'}<br /><small>{location.address ? '' : 'A confirmar pela equipe Instituto Sharon'}</small></p><div className="location-info"><span><strong>Contato</strong><br />{location.whatsapp ?? 'WhatsApp oficial a confirmar'}</span><span><strong>Atendimento</strong><br />{location.hours ?? 'Horário a confirmar'}</span></div><div className="hero-actions"><a className="button button-dark" href="#contato">Falar pelo WhatsApp <MessageCircle size={16} /></a><a className="text-link" href={location.googleMapsUrl ?? locationSearchUrl} target="_blank" rel="noreferrer">{location.googleMapsUrl ? 'Ver rota no Google Maps' : 'Pesquisar no Google Maps'} <ArrowUpRight size={16} /></a></div></div><div className="map-placeholder"><MapPin size={28} /><strong>{location.city}, {location.state}</strong><span>{location.googleMapsUrl ? 'Localização oficial do Instituto Sharon.' : 'Mapa e rota exata serão conectados após a confirmação do endereço oficial.'}</span></div></article>)}</div><div className="location-footer"><span>Instituto Sharon pelo Brasil</span><span>{locations.length === 1 ? 'Manaus é a unidade principal deste projeto.' : 'Outras unidades confirmadas pelo Instituto Sharon.'}</span></div></section>
      <section className="contact-cta section-pad" id="contato"><div className="faq"><div className="section-kicker">08 / Fale com a equipe</div><h2>Vamos conversar<br />sobre o seu <em>próximo passo.</em></h2><p className="contact-lead">Canais oficiais e informações de contato serão preenchidos após a confirmação da equipe.</p><div className="contact-facts"><span><strong>Localização</strong><br />Manaus — AM</span><span><strong>WhatsApp</strong><br />Número oficial editável</span><span><strong>Instagram</strong><br />@institutosharon</span></div>{faqs.map((faq, index) => <div className="faq-item" key={faq}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq}</span><ChevronDown className={openFaq === index ? 'rotate' : ''} size={18} /></button>{openFaq === index && <p>As informações desta resposta serão atualizadas pela equipe do Instituto Sharon. Entre em contato para receber orientação personalizada.</p>}</div>)}</div><div className="contact-form" id="matricula"><div className="section-kicker">09 / Atendimento</div>{submitted ? <div className="success-state"><ShieldCheck size={32} /><h3>Solicitação recebida.</h3><p>Nossa equipe entrará em contato em breve.</p><button className="text-link" onClick={() => setSubmitted(false)}>Enviar outra solicitação <ArrowUpRight size={16} /></button></div> : <><h2>Tem uma pergunta?</h2><p className="contact-panel-copy">Deixe seus dados e a equipe poderá retornar quando os canais oficiais forem configurados.</p><form onSubmit={handleSubmit}><label>Nome completo<input required name="name" placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required name="phone" placeholder="(92) 00000-0000" /></label><label>Tenho interesse em<select name="interest"><option>Matrícula em um curso</option><option>Atendimento para pacientes</option><option>Ser paciente modelo</option></select></label><button className="button button-dark form-submit" disabled={formLoading}>{formLoading ? 'Enviando...' : 'Falar com a equipe'} <MoveRight size={17} /></button><small>Seus dados serão utilizados apenas para contato referente à sua solicitação.</small></form></>}</div></section>
    </main>
    <footer><div className="footer-brand"><img src={logo} alt="Logo Instituto Sharon" /><p>Educação, saúde e estética<br />com propósito.</p><strong>Instituto Sharon — Manaus/AM</strong></div><div className="footer-links"><div><span>Explorar</span><a href="#instituto">Instituto</a><a href="#cursos">Cursos</a><a href="#pacientes">Pacientes</a><a href="#unidades">Unidades</a></div><div><span>Conectar</span><a href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Instagram <AtSign size={13} /></a><a href="#contato">Contato</a><a href="#matricula">Matricule-se</a></div></div><div className="footer-bottom"><span>© 2026 Instituto Sharon. Todos os direitos reservados.</span><a href="#unidades">Conheça nossas unidades</a></div></footer><a className="whatsapp" href="#contato" aria-label="Falar com o Instituto Sharon pelo WhatsApp"><MessageCircle size={22} /></a>
  </div>
}

export default App
