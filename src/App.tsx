import { useEffect, useState } from 'react'
import { ArrowUpRight, AtSign, ChevronDown, GraduationCap, HeartHandshake, Lightbulb, MapPin, Menu, MessageCircle, MoveRight, Search, ShieldCheck, Sparkles, X } from 'lucide-react'
import './App.css'
import './footer.css'
import { locations, locationSearchUrl } from './data/locations'

const imageRoot = '/images/instituto'
const publicLocationUrl = 'https://www.google.com/maps/search/?api=1&query=Instituto+Sharon%2C+Avenida+Torquato+Tapajos%2C+597%2C+Manaus%2C+AM'
const logo = `${imageRoot}/logo/${encodeURIComponent('Logo instituto sharon.PNG')}`
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
const estruturaImages = [
  { name: 'fachada.jpeg', category: 'FACHADA' },
  { name: 'saladeaula.jpeg', category: 'SALAS DE AULA' },
  { name: 'saladeaula (2).jpeg', category: 'SALAS DE AULA' },
  { name: 'saladeaula (3).jpeg', category: 'SALAS DE AULA' },
  { name: 'saladeaula (4).jpeg', category: 'SALAS DE AULA' },
  { name: 'equipamentos.jpeg', category: 'CLÍNICA' },
  { name: 'lazer.jpeg', category: 'ESPAÇOS DE CONVIVÊNCIA' },
  { name: 'lazer (2).jpeg', category: 'ESPAÇOS DE CONVIVÊNCIA' },
  { name: 'lazer (3).jpeg', category: 'ESPAÇOS DE CONVIVÊNCIA' },
  { name: 'auditorio.jpeg', category: 'AUDITÓRIO' },
]
const estruturaDetails: Record<string, { title: string; description: string }> = {
  fachada: { title: 'Fachada Instituto Sharon', description: 'Um espaço pensado para receber você com presença, cuidado e profissionalismo.' },
  'saladeaula': { title: 'Sala de aula', description: 'Ambientes preparados para transformar conhecimento em prática com conforto e foco.' },
  'saladeaula (2)': { title: 'Sala de aula', description: 'Estrutura organizada para uma experiência de aprendizado mais próxima e completa.' },
  'saladeaula (3)': { title: 'Sala de aula', description: 'Um ambiente que favorece a troca, a concentração e o desenvolvimento profissional.' },
  'saladeaula (4)': { title: 'Sala de aula', description: 'Espaço planejado para unir formação, acolhimento e excelência em cada detalhe.' },
  equipamentos: { title: 'Clínica de atendimento', description: 'Equipamentos e estrutura para apoiar práticas seguras, precisas e supervisionadas.' },
  lazer: { title: 'Espaço de convivência', description: 'Um lugar agradável para pausar, trocar experiências e aproveitar a jornada.' },
  'lazer (2)': { title: 'Espaço de convivência', description: 'Conforto e leveza para tornar cada encontro ainda mais especial.' },
  'lazer (3)': { title: 'Espaço de convivência', description: 'Detalhes que criam uma atmosfera acolhedora para alunos e pacientes.' },
  auditorio: { title: 'Auditório', description: 'Um ambiente amplo para encontros, aulas e experiências que inspiram.' },
}
const courses = [
  { title: 'Harmonização Glútea', category: 'HOF', type: 'Capacitação', image: courseImages[0] },
  { title: 'Rinomodelação', category: 'HOF', type: 'Capacitação', image: courseImages[1] },
  { title: 'Especialização em Ortodontia', category: 'Odontologia', type: 'Especialização', image: courseImages[2] },
  { title: 'Toxina Botulínica', category: 'HOF', type: 'Capacitação', image: courseImages[3] },
  { title: 'Pós-graduação Saúde e Estética', category: 'Saúde', type: 'Pós-graduação', image: courseImages[4] },
  { title: 'Preenchimento Labial', category: 'HOF', type: 'Capacitação', image: courseImages[5] },
  { title: 'Estética Íntima Feminina', category: 'Estética', type: 'Capacitação', image: courseImages[6] },
  { title: 'Mini Residência em Harmonização Facial', category: 'HOF', type: 'Capacitação', image: courseImages[7] },
]
const contatos = [
  { name: 'Cursos — Pamela', link: 'https://wa.me/message/CLTYAEPHX3TAI1' },
  { name: 'Cursos — Brenda', link: 'https://wa.me/message/R7WZMDZHTWTEL1' },
  { name: 'Paciente Modelo', link: 'https://wa.me/message/A2GSIBFAIHJ5N1' },
]
const instagramAccounts = [
  { name: '@institutosharon', label: 'Perfil principal', link: 'https://www.instagram.com/institutosharon/' },
  { name: '@instituto_sharonfortaleza', label: 'Fortaleza', link: 'https://www.instagram.com/instituto_sharonfortaleza/' },
  { name: '@institutosharon_saopaulo', label: 'São Paulo', link: 'https://www.instagram.com/institutosharon_saopaulo/' },
  { name: '@institutosharon_portovelho', label: 'Porto Velho', link: 'https://www.instagram.com/institutosharon_portovelho/' },
]
const faqItems = [
  { question: 'Quais cursos o Instituto Sharon oferece?', answer: 'Oferecemos formações em saúde, estética, odontologia e harmonização orofacial. Consulte nosso catálogo para conhecer as opções disponíveis.' },
  { question: 'Como faço para me matricular?', answer: 'Preencha o formulário de matrícula ou fale diretamente com nossa equipe pelo WhatsApp para receber informações sobre turmas e condições.' },
  { question: 'Onde fica o Instituto Sharon?', answer: 'Nossa unidade principal fica na Avenida Torquato Tapajós, 597, em Manaus - AM.' },
  { question: 'É possível participar como paciente modelo?', answer: 'Sim. A participação acontece em experiências práticas supervisionadas. Entre em contato para verificar os procedimentos e as datas disponíveis.' },
]
const aboutValues = [
  { number: '01', title: 'Excelência', text: 'Buscamos qualidade em tudo o que fazemos, desde a estrutura até a experiência de cada aluno.', icon: Sparkles },
  { number: '02', title: 'Acolhimento', text: 'Acreditamos que um ambiente acolhedor torna a jornada de aprendizado mais leve, humana e significativa.', icon: HeartHandshake },
  { number: '03', title: 'Conhecimento', text: 'Valorizamos o aprendizado contínuo e a troca de experiências como ferramentas de crescimento.', icon: GraduationCap },
  { number: '04', title: 'Inovação', text: 'Buscamos evoluir constantemente, acompanhando novas tecnologias, tendências e necessidades do mercado.', icon: Lightbulb },
  { number: '05', title: 'Transformação', text: 'Nosso maior propósito é contribuir para que o conhecimento gere novas oportunidades e transforme histórias.', icon: ArrowUpRight },
]

function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return <section className="home-faq section-pad" id="perguntas-frequentes"><div className="section-kicker">09 / Perguntas frequentes</div><h2>Antes de começar, <em>saiba mais.</em></h2><div className="home-faq-list">{faqItems.map((item, index) => { const isOpen = openQuestion === index; return <article className="faq-page-item" key={item.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : index)}>{item.question}<ChevronDown className={isOpen ? 'rotate' : ''} size={18} /></button>{isOpen && <p>{item.answer}</p>}</article> })}</div></section>
}
function CoursesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const categories = ['Todos', 'HOF', 'Odontologia', 'Estética', 'Saúde']
  const visibleCourses = courses.filter((course) => (category === 'Todos' || course.category === category) && course.title.toLowerCase().includes(query.toLowerCase()))

  return <div className="courses-page">
    <header className="courses-page-header"><a className="brand" href="#inicio" aria-label="Voltar para o início"><img src={logo} alt="Logo Instituto Sharon" /></a><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></header>
    <main className="courses-page-main"><div className="section-kicker">Instituto Sharon / Formação profissional</div><h1>Encontre o próximo passo<br /><em>da sua carreira.</em></h1><p className="courses-page-intro">Explore as formações do Instituto Sharon. O catálogo está preparado para receber informações oficiais de turmas, modalidades e inscrições.</p><div className="course-toolbar"><label className="course-search"><Search size={17} /><span className="sr-only">Buscar curso</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar curso" /></label><div className="course-filters" aria-label="Filtrar cursos">{categories.map((item) => <button className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div><div className="course-page-grid">{visibleCourses.map((course, index) => <article className="course-page-card" key={course.title}><div className="course-page-image" style={{ backgroundImage: `url(${imageRoot}/cursos/${encodeURIComponent(course.image)})` }}><img className="course-page-backdrop" src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt="" aria-hidden="true" /><img className="course-page-foreground" src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt={`Material do curso ${course.title}`} /><span>Conteúdo editável</span></div><div className="course-page-info"><div className="course-meta"><span>{course.category}</span><span>{course.type}</span></div><h2>{course.title}</h2><p>Informações de turma, modalidade e calendário serão confirmadas pela equipe do Instituto Sharon.</p><a className="button button-dark" href="/#matricula">Quero receber informações <MoveRight size={17} /></a></div><span className="course-index">0{index + 1}</span></article>)}</div>{visibleCourses.length === 0 && <p className="empty-courses">Nenhum curso encontrado com esses filtros.</p>}</main>
  </div>
}

type SitePageProps = { title: string; emphasis: string; eyebrow: string; children: React.ReactNode }

function SitePage({ title, emphasis, eyebrow, children }: SitePageProps) {
  return <div className="site-page"><header className="courses-page-header"><a className="brand" href="#inicio" aria-label="Voltar para o início"><img src={logo} alt="Logo Instituto Sharon" /></a><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></header><main className="site-page-main"><div className="section-kicker">{eyebrow}</div><h1>{title}<br /><em>{emphasis}</em></h1>{children}</main></div>
}

function InstitutePage() {
  return <div className="site-page about-page"><header className="courses-page-header"><a className="brand" href="#inicio" aria-label="Voltar para o início"><img src={logo} alt="Logo Instituto Sharon" /></a><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></header><main className="about-page-main">
    <section className="about-hero"><div className="about-hero-copy"><div className="section-kicker">Sobre o Instituto Sharon</div><h1>Educação que transforma.<br /><em>Conhecimento que abre caminhos.</em></h1><p>O Instituto Sharon é um espaço dedicado à educação, à capacitação profissional e à saúde, criado para oferecer conhecimento, prática e uma experiência de aprendizado diferenciada.</p><a className="button button-dark" href="#estrutura-instituto">Conheça nossa estrutura <MoveRight size={17} /></a></div><div className="about-hero-visual"><img src={`${imageRoot}/estrutura/fachada.jpeg`} alt="Fachada do Instituto Sharon em Manaus" /><span className="about-hero-note"><b>Manaus</b><small>Um espaço para crescer<br />com propósito</small></span></div></section>
    <section className="about-story"><div className="section-kicker">02 / Quem somos</div><div className="about-story-grid"><h2>Um espaço criado para transformar conhecimento em <em>oportunidades.</em></h2><div><p>O Instituto Sharon nasceu com o propósito de unir educação, prática e cuidado em um ambiente moderno, acolhedor e preparado para o desenvolvimento profissional.</p><p>Acreditamos que uma boa formação vai muito além da sala de aula. Por isso, buscamos proporcionar aos nossos alunos uma experiência completa, com estrutura adequada, profissionais preparados e ambientes que aproximam o aprendizado da realidade.</p><p>Cada detalhe do Instituto Sharon foi pensado para oferecer conforto, qualidade e uma jornada de aprendizado que faça a diferença na vida de cada pessoa que passa por aqui.</p></div></div></section>
    <section className="about-founder"><div className="about-founder-image"><img src={`${imageRoot}/instagram/sharon.png`} alt="Dra. Renata Sharon, fundadora do Instituto Sharon" /><span>Fundadora<br /><b>Instituto Sharon</b></span></div><div className="about-founder-copy"><div className="section-kicker">03 / Por trás do Instituto Sharon</div><h2>Uma história construída <em>com propósito.</em></h2><p>O Instituto Sharon nasceu de um sonho: criar um espaço onde educação, conhecimento e desenvolvimento profissional pudessem caminhar juntos.</p><p>À frente dessa história está <strong>Dra. Renata Sharon</strong>, idealizadora do Instituto Sharon, que transformou essa visão em um espaço dedicado à formação, à capacitação e ao cuidado com as pessoas.</p><p>Sua trajetória e seu olhar empreendedor ajudaram a construir uma instituição que valoriza não apenas o conhecimento, mas também a experiência, o acolhimento e a busca constante pela excelência.</p><p>Hoje, o Instituto Sharon continua crescendo com o mesmo propósito que deu origem à sua história: contribuir para que o conhecimento se transforme em novas possibilidades e oportunidades.</p><blockquote>“Grandes transformações começam quando alguém acredita que é possível fazer diferente.”</blockquote></div></section>
    <section className="about-purpose"><div className="section-kicker">04 / Nosso propósito</div><div className="about-purpose-content"><h2>Transformar conhecimento<br /><em>em oportunidades.</em></h2><p>Oferecer educação e capacitação de qualidade, criando experiências que preparem nossos alunos para novos desafios e possibilidades profissionais.</p></div></section>
    <section className="about-values"><div className="about-values-heading"><div className="section-kicker">05 / O que nos move</div><h2>Valores que dão sentido<br />à nossa <em>jornada.</em></h2></div><div className="about-values-list">{aboutValues.map(({ number, title, text, icon: Icon }) => <article key={number}><span className="about-value-number">{number}</span><Icon size={19} strokeWidth={1.5} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="about-vision"><div className="section-kicker">06 / Onde queremos chegar</div><div><h2>Ser referência em <em>educação.</em></h2><p>Ser referência em educação e capacitação profissional, reconhecida pela qualidade do ensino, pela excelência da estrutura e pelo compromisso com o desenvolvimento de pessoas.</p></div></section>
    <section className="about-difference"><div className="about-difference-copy"><div className="section-kicker">07 / Nosso diferencial</div><h2>Mais do que uma<br /><em>sala de aula.</em></h2><p>Criamos ambientes que aproximam nossos alunos da realidade profissional, proporcionando uma experiência que combina conhecimento, prática e estrutura.</p></div><div className="about-difference-list"><article><span>01</span><div><h3>Estrutura</h3><p>Ambientes modernos e preparados para diferentes experiências de aprendizado.</p></div></article><article><span>02</span><div><h3>Prática</h3><p>Espaços equipados para aproximar o aluno da realidade profissional.</p></div></article><article><span>03</span><div><h3>Experiência</h3><p>Uma jornada pensada para oferecer conforto, acolhimento e qualidade.</p></div></article></div></section>
    <section className="about-structure" id="estrutura-instituto"><div className="about-structure-image"><img src={`${imageRoot}/estrutura/${encodeURIComponent('lazer (2).jpeg')}`} alt="Espaço de convivência do Instituto Sharon" /><div><span>08 / Nossa estrutura</span><h2>Conheça o Instituto Sharon <em>por dentro.</em></h2><p>Salas de aula, ambientes para aulas práticas, auditório, recepção e espaços preparados para proporcionar uma experiência completa.</p><a className="button button-light" href="#estrutura">Conheça nossa estrutura <ArrowUpRight size={16} /></a></div></div></section>
    <section className="about-closing"><div className="section-kicker">Instituto Sharon / Manaus</div><h2>O próximo capítulo<br /><em>pode começar aqui.</em></h2><p>Seja para aprender, se capacitar ou iniciar uma nova jornada profissional, o Instituto Sharon está preparado para receber você.</p><div className="about-closing-actions"><a className="button button-dark" href="#cursos">Conheça nossos cursos <MoveRight size={17} /></a><a className="text-link" href="#contato">Entre em contato <ArrowUpRight size={16} /></a></div></section>
  </main></div>
}

function PatientsPage() {
  return <SitePage title="Cuidado com" emphasis="conhecimento por trás." eyebrow="Instituto Sharon / Para pacientes"><p className="page-intro">Conheça as áreas de atendimento do Instituto Sharon em Manaus, com técnica, acolhimento e responsabilidade.</p><div className="patient-page-grid"><div className="patient-page-copy"><div className="patient-categories page-categories"><span>Estética</span><span>Odontologia</span><span>Harmonização Orofacial</span><span>Saúde</span><span>Bem-estar</span></div><a className="button button-dark" href="#contato">Agendar atendimento <MoveRight size={17} /></a></div><div className="patient-page-gallery">{patientImages.slice(0, 4).map((image, index) => <img key={image} src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`Imagem de referência para pacientes ${index + 1}`} loading="lazy" />)}</div></div><div className="page-callout"><h2>Quer participar como <em>Paciente Modelo?</em></h2><p>Participe de experiências práticas realizadas em ambiente de formação e supervisão profissional.</p><a className="text-link" href="#contato">Quero ser paciente modelo <ArrowUpRight size={16} /></a></div></SitePage>
}

function LocationsPage() {
  const location = locations[0]
  return <SitePage title="Estamos em" emphasis="Manaus." eyebrow="Instituto Sharon / Onde estamos"><p className="page-intro">Venha conhecer a unidade principal do Instituto Sharon.</p><article className="location-page-card"><div><span className="location-tag"><MapPin size={14} /> Unidade principal</span><h2>Manaus — AM</h2><p>{location.address}</p><a className="button button-dark" href={publicLocationUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight size={16} /></a></div><a className="map-link-card" href={publicLocationUrl} target="_blank" rel="noreferrer"><div className="map-visual" role="img" aria-label="Localização do Instituto Sharon em Manaus"><span className="map-marker"><MapPin size={20} /><b>Instituto Sharon</b></span><small>Mapa da unidade<br />Clique para abrir</small></div></a></article></SitePage>
}

function ContactPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSending(true); window.setTimeout(() => { setSending(false); setSent(true) }, 500) }
  return <SitePage title="Vamos conversar" emphasis="sobre seu próximo passo." eyebrow="Instituto Sharon / Atendimento"><p className="page-intro">Fale com a equipe do Instituto Sharon para receber orientação sobre cursos, atendimento e paciente modelo.</p><div className="contact-page-grid"><div className="contact-facts contact-page-facts"><span><strong>Localização</strong><br />Manaus — AM</span><span><strong>Instagram</strong><br />@institutosharon</span></div><div className="contact-page-form">{sent ? <div className="success-state"><ShieldCheck size={32} /><h2>Solicitação recebida.</h2><p>Nossa equipe entrará em contato em breve.</p></div> : <><h2>Tem uma pergunta?</h2><form onSubmit={handleContactSubmit}><label>Nome completo<input required placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required placeholder="(92) 00000-0000" /></label><label>Mensagem<textarea required placeholder="Como podemos ajudar?" /></label><button className="button button-dark" type="submit" disabled={sending}>{sending ? 'Enviando...' : 'Falar com a equipe'} <MoveRight size={17} /></button></form></>}</div></div></SitePage>
}

function EnrollmentPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSending(true); window.setTimeout(() => { setSending(false); setSent(true) }, 500) }
  return <SitePage title="Dê o próximo passo" emphasis="na sua formação." eyebrow="Instituto Sharon / Matrícula"><p className="page-intro">Preencha seus dados para receber informações sobre os cursos e as próximas turmas.</p><div className="enrollment-page-grid"><div className="enrollment-page-note"><div className="section-kicker">Quero me matricular</div><h2>Seu próximo capítulo começa com uma conversa.</h2><p>Informe o curso de interesse e a equipe do Instituto Sharon poderá orientar você.</p></div><div className="contact-page-form">{sent ? <div className="success-state"><ShieldCheck size={32} /><h2>Solicitação recebida.</h2><p>Nossa equipe entrará em contato em breve.</p></div> : <form onSubmit={handleSubmit}><label>Nome completo<input required placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required placeholder="(92) 00000-0000" /></label><label>E-mail<input type="email" required placeholder="seu@email.com" /></label><label>Curso de interesse<input required placeholder="Qual formação você procura?" /></label><button className="button button-dark" type="submit" disabled={sending}>{sending ? 'Enviando...' : 'Quero receber informações'} <MoveRight size={17} /></button><small>Seus dados serão utilizados apenas para contato referente à sua solicitação.</small></form>}</div></div></SitePage>
}

function ResultsPage() {
  return <SitePage title="Antes e depois" emphasis="que contam histórias." eyebrow="Instituto Sharon / Resultados"><p className="page-intro">Imagens de referência compartilhadas pelo Instituto Sharon. Conteúdos sujeitos à confirmação e autorização da equipe.</p><div className="result-page-strip">{patientImages.map((image, index) => <figure key={image}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`${index % 2 === 0 ? 'Antes' : 'Depois'}: resultado de paciente ${index + 1}`} loading="lazy" /><figcaption>{index % 2 === 0 ? 'Antes' : 'Depois'}</figcaption></figure>)}</div><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver mais no Instagram <AtSign size={16} /></a></SitePage>
}

function InstagramPage() {
  const instagramImage = `${imageRoot}/instagram/${encodeURIComponent('WhatsApp Image 2026-09-03 at 21.07.56.jpeg')}`
  return <SitePage title="Conheça o Instituto Sharon" emphasis="no Instagram." eyebrow="Instituto Sharon / Instagram"><div className="instagram-page-grid"><div><p className="page-intro">Acompanhe o dia a dia, os espaços e as novidades do Instituto Sharon em Manaus.</p><a className="button button-dark" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Seguir @institutosharon <AtSign size={16} /></a></div><a className="instagram-feature" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer"><img src={instagramImage} alt="Fachada do Instituto Sharon" /><span>Ver perfil no Instagram <ArrowUpRight size={16} /></span></a></div></SitePage>
}

function EstruturaiPage() {
  const categoriesUnique = Array.from(new Set(estruturaImages.map(img => img.category)))
  return <SitePage title="Conheça nossa" emphasis="estrutura." eyebrow="Instituto Sharon / Estrutura"><p className="page-intro">Ambientes modernos, confortáveis e preparados para proporcionar uma experiência completa de aprendizado, prática e atendimento.</p><div className="estrutura-container">{categoriesUnique.map((category) => <div key={category} className="estrutura-category"><h3>{category}</h3><div className="estrutura-gallery">{estruturaImages.filter(img => img.category === category).map((img) => { const detail = estruturaDetails[img.name.replace(/\.jpeg$/, '')] ?? { title: category, description: 'Um ambiente preparado para oferecer uma experiência completa no Instituto Sharon.' }; return <article key={img.name} className="estrutura-item"><img src={`${imageRoot}/estrutura/${encodeURIComponent(img.name)}`} alt={`${detail.title} - ${category}`} loading="lazy" /><div className="estrutura-caption"><span>{category}</span><h4>{detail.title}</h4><p>{detail.description}</p></div></article> })}</div></div>)}</div></SitePage>
}

function ContatosPage() {
  return <SitePage title="Entre em" emphasis="contato." eyebrow="Instituto Sharon / Contato"><div className="contatos-premium"><div className="contatos-intro"><span className="contatos-index">01 / Atendimento</span><p className="page-intro">Escolha o departamento desejado e fale com a equipe do Instituto Sharon pelo WhatsApp.</p><div className="contatos-location"><MapPin size={17} /><span>Manaus — AM<br /><small>Avenida Torquato Tapajós, 597</small></span></div></div><div className="contatos-departments">{contatos.map((contato, index) => <article className="contato-line" key={contato.name}><span className="contato-line-number">0{index + 1}</span><div><span className="section-kicker">Atendimento especializado</span><h2>{contato.name}</h2></div><a href={contato.link} target="_blank" rel="noreferrer" className="contato-line-action" aria-label={`Falar com ${contato.name} pelo WhatsApp`}><MessageCircle size={18} /><span>Falar agora</span><ArrowUpRight size={17} /></a></article>)}</div></div><div className="contatos-social contatos-social-premium"><span className="section-kicker">Continue conectado</span><h3>Acompanhe o Instituto Sharon no Instagram.</h3><div className="instagram-account-list">{instagramAccounts.map((account) => <a key={account.name} href={account.link} target="_blank" rel="noreferrer" className="instagram-account"><AtSign size={16} /><span><strong>{account.name}</strong><small>{account.label}</small></span><ArrowUpRight size={15} /></a>)}</div></div></SitePage>
}

function App() {
  const [siteRoute, setSiteRoute] = useState(() => window.location.hash.replace('#', '') || 'inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => { const handleHashChange = () => setSiteRoute(window.location.hash.replace('#', '') || 'inicio'); window.addEventListener('hashchange', handleHashChange); return () => window.removeEventListener('hashchange', handleHashChange) }, [])
  useEffect(() => {
    const canReveal = 'IntersectionObserver' in window
    if (canReveal) document.documentElement.classList.add('reveal-ready')
    const revealTargets = document.querySelectorAll<HTMLElement>('.section-pad > *, .patient-copy, .patient-visual, .pillar, .course-card, .location-card, .site-page-main > *, .courses-page-main > *, .about-page-main > section, .about-story-grid > *, .about-founder-image, .about-founder-copy, .about-values-list article, .about-difference-list article, .about-structure-image, .about-closing, .structure-card, .course-page-card, .estrutura-category, .estrutura-item, .patient-page-gallery img, .contact-page-form, .enrollment-page-note, .location-page-card, .instagram-feature, .result-page-strip figure, .contato-card, .contatos-social, .contato-line, .instagram-account, .faq-page-item')
    const observer = canReveal ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 }) : null
    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      observer?.observe(target)
    })
    return () => { observer?.disconnect(); document.documentElement.classList.remove('reveal-ready') }
  }, [siteRoute])
  if (siteRoute === 'cursos') return <CoursesPage />
  if (siteRoute === 'instituto') return <InstitutePage />
  if (siteRoute === 'pacientes') return <PatientsPage />
  if (siteRoute === 'unidades') return <LocationsPage />
  if (siteRoute === 'resultados') return <ResultsPage />
  if (siteRoute === 'instagram') return <InstagramPage />
  if (siteRoute === 'contato') return <ContactPage />
  if (siteRoute === 'matricula') return <EnrollmentPage />
  if (siteRoute === 'estrutura') return <EstruturaiPage />
  if (siteRoute === 'contatos') return <ContatosPage />

  return <div className="site-shell home-shell">
    <div className="topline"><span>Instituto Sharon</span><span>Educação • Saúde • Estética</span><span>Manaus — AM</span></div>
    <header className="navbar"><a className="brand" href="#inicio" onClick={closeMenu} aria-label="Instituto Sharon, início"><img src={logo} alt="Logo Instituto Sharon" /></a><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal"><a href="#instituto" onClick={closeMenu}>Sobre</a><a href="#cursos" onClick={closeMenu}>Cursos</a><a href="#estrutura" onClick={closeMenu}>Estrutura</a><a href="#contatos" onClick={closeMenu}>Contato</a><a className="nav-cta" href="#matricula" onClick={closeMenu}>Matricule-se <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main>
      <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Um novo olhar para o cuidado</p><h1>Conhecimento que transforma.<br /><em>Cuidado que permanece.</em></h1><p className="hero-text">Excelência em saúde, estética e formação profissional para quem busca evoluir com propósito.</p><div className="hero-actions"><a className="button button-dark" href="#cursos">Conheça nossos cursos <MoveRight size={17} /></a><a className="text-link" href="#pacientes">Agende seu atendimento <ArrowUpRight size={16} /></a></div><div className="hero-proof"><span className="proof-mark"><ShieldCheck size={16} /></span><span>Educação, saúde e estética<br /><strong>em um só lugar</strong></span></div></div><div className="hero-visual"><div className="hero-image" role="img" aria-label="Fachada do Instituto Sharon em Manaus"></div><div className="hero-note"><span>01</span><p>Manaus<br /><strong>Amazonas</strong></p><ArrowUpRight size={19} /></div><div className="hero-stamp"><span>IS</span><small>Excelência<br />em cada detalhe</small></div></div></section>
      <section className="courses home-courses section-pad" id="formacao"><div className="section-heading"><div><div className="section-kicker">03 / Formação profissional</div><h2>Conheça nossos <em>cursos.</em></h2></div><p>Uma prévia das formações do Instituto Sharon. Acesse o catálogo completo para ver todos os detalhes.</p></div><div className="home-course-grid">{courses.map((course, index) => <article className="home-course-card" key={course.title}><div className="home-course-image" style={{ backgroundImage: `url(${imageRoot}/cursos/${encodeURIComponent(course.image)})` }}><img className="home-course-backdrop" src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt="" aria-hidden="true" /><img className="home-course-foreground" src={`${imageRoot}/cursos/${encodeURIComponent(course.image)}`} alt={`Material do curso ${course.title}`} loading="lazy" /></div><div><span>{course.category} / {course.type}</span><h3>{course.title}</h3><a href="#cursos" className="course-link">Ver curso <ArrowUpRight size={16} /></a></div><b>0{index + 1}</b></article>)}</div><a href="#cursos" className="button button-dark home-catalog-button">Abrir catálogo completo <MoveRight size={17} /></a></section>
      <section className="patient-band patient-area" id="pacientes"><div className="patient-copy"><div className="section-kicker">04 / Para pacientes</div><h2>Cuidados pensados<br /><em>para você.</em></h2><p>Conheça as áreas de atendimento do Instituto Sharon em Manaus, com técnica, acolhimento e responsabilidade.</p><div className="patient-categories"><span>Estética</span><span>Odontologia</span><span>Harmonização Orofacial</span><span>Saúde</span><span>Bem-estar</span></div><a className="button button-light" href="#contato">Agendar atendimento <MoveRight size={17} /></a></div><div className="patient-visual"><div className="patient-gallery">{patientImages.slice(0, 3).map((image, index) => <div className="patient-gallery-frame" key={image}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`Imagem de atendimento para pacientes ${index + 1}`} loading="lazy" /><span>{index === 0 ? 'Atendimento' : index === 1 ? 'Cuidado' : 'Resultado'}</span></div>)}</div></div></section>
      <section className="model-section model-before-after section-pad"><div className="model-art"><div className="model-pair"><div><img src={`${imageRoot}/pacientes/${encodeURIComponent(patientImages[0])}`} alt="Imagem de referência antes do procedimento" /><span>Antes</span></div><div><img src={`${imageRoot}/pacientes/${encodeURIComponent(patientImages[1])}`} alt="Imagem de referência depois do procedimento" /><span>Depois</span></div></div></div><div className="model-copy"><div className="section-kicker">05 / Experiência prática</div><h2>Seja um <em>Paciente Modelo.</em></h2><p>Participe das experiências práticas do Instituto Sharon e acompanhe de perto procedimentos realizados em um ambiente de formação e supervisão profissional.</p><p className="model-note">Resultados e imagens apresentados devem ser confirmados e autorizados pela equipe.</p><a className="button button-dark" href="#matricula">Quero ser paciente modelo <ArrowUpRight size={16} /></a></div></section>
      <section className="results section-pad" id="resultados"><div className="section-heading"><div><div className="section-kicker">06 / Antes e depois</div><h2>Resultados que <em>continuam.</em></h2></div><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver no Instagram <AtSign size={16} /></a></div><div className="result-strip" aria-label="Galeria de antes e depois"><div className="result-track">{[...patientImages, ...patientImages].map((image, index) => <div className="result-frame" key={`${image}-${index}`}><img src={`${imageRoot}/pacientes/${encodeURIComponent(image)}`} alt={`${index % 2 === 0 ? 'Antes' : 'Depois'}: resultado de paciente ${index % patientImages.length + 1}`} loading="lazy" /><span className="result-label">{index % 2 === 0 ? 'Antes' : 'Depois'}</span></div>)}</div></div><div className="carousel-controls"><span>Imagens de referência, sujeitas à confirmação da equipe</span><a className="text-link" href="https://www.instagram.com/institutosharon/" target="_blank" rel="noreferrer">Ver mais <AtSign size={16} /></a></div></section>
      <section className="home-location"><div><div className="section-kicker">Instituto Sharon / Manaus</div><h2>Estamos em <em>Manaus.</em></h2><p>Avenida Torquato Tapajós, 597, Manaus - AM</p><a className="text-link" href="#unidades">Ver detalhes da unidade <ArrowUpRight size={16} /></a></div><a className="map-link-card" href={publicLocationUrl} target="_blank" rel="noreferrer"><div className="map-visual" role="img" aria-label="Localização do Instituto Sharon em Manaus"><span className="map-marker"><MapPin size={20} /><b>Instituto Sharon</b></span><small>Manaus - AM<br />Abrir mapa</small></div></a></section>
      <section className="locations section-pad" id="unidades"><div className="section-heading"><div><div className="section-kicker">07 / Onde estamos</div><h2>Estamos em <em>Manaus.</em></h2></div><p>Venha conhecer o Instituto Sharon.</p></div><div className="location-list">{locations.map((location) => <article className={location.status === 'principal' ? 'location-card location-card-primary' : 'location-card'} key={`${location.city}-${location.state}`}><div className="location-details"><span className="location-tag"><MapPin size={14} /> {location.status === 'principal' ? 'Unidade principal' : 'Unidade editável'}</span><h3>{location.city} — {location.state}</h3><p>{location.address ?? 'Endereço oficial da unidade'}<br /><small>{location.address ? '' : 'A confirmar pela equipe Instituto Sharon'}</small></p><div className="location-info"><span><strong>Contato</strong><br />{location.whatsapp ?? 'WhatsApp oficial a confirmar'}</span><span><strong>Atendimento</strong><br />{location.hours ?? 'Horário a confirmar'}</span></div><div className="hero-actions"><a className="button button-dark" href="#contato">Falar pelo WhatsApp <MessageCircle size={16} /></a><a className="text-link" href={location.googleMapsUrl ?? locationSearchUrl} target="_blank" rel="noreferrer">{location.googleMapsUrl ? 'Ver rota no Google Maps' : 'Pesquisar no Google Maps'} <ArrowUpRight size={16} /></a></div></div><div className="map-placeholder"><MapPin size={28} /><strong>{location.city}, {location.state}</strong><span>{location.googleMapsUrl ? 'Localização oficial do Instituto Sharon.' : 'Mapa e rota exata serão conectados após a confirmação do endereço oficial.'}</span></div></article>)}</div><div className="location-footer"><span>Instituto Sharon pelo Brasil</span><span>{locations.length === 1 ? 'Manaus é a unidade principal deste projeto.' : 'Outras unidades confirmadas pelo Instituto Sharon.'}</span></div></section>
      <div className="home-final-sections"><section className="contact-cta section-pad" id="contato"><div className="faq"><div className="section-kicker">08 / Fale com a equipe</div><h2>Vamos conversar<br />sobre o seu <em>próximo passo.</em></h2><p className="contact-lead">Conecte-se conosco através do WhatsApp ou redes sociais para melhor atendimento.</p><div className="contact-facts"><span><strong>Localização</strong><br />Manaus — AM</span><span><strong>Instagram</strong><br />@institutosharon</span></div><div className="whatsapp-button-group">{contatos.map((contato) => <a key={contato.name} href={contato.link} target="_blank" rel="noreferrer"><MessageCircle size={18} />{contato.name}</a>)}</div></div></section><FAQSection /></div>
    </main>
    <footer><div className="footer-brand"><img src={logo} alt="Logo Instituto Sharon" /><p>Educação, saúde e estética<br />com propósito.</p><strong>Instituto Sharon — Manaus/AM</strong></div><div className="footer-links"><div><span>Explorar</span><a href="#inicio">Início</a><a href="#cursos">Cursos</a><a href="#estrutura">Estrutura</a><a href="#contatos">Contato</a></div><div><span>Conectar</span><a href="https://wa.me/message/CLTYAEPHX3TAI1" target="_blank" rel="noreferrer">Cursos — Pamela</a><a href="https://wa.me/message/R7WZMDZHTWTEL1" target="_blank" rel="noreferrer">Cursos — Brenda</a><a href="https://wa.me/message/A2GSIBFAIHJ5N1" target="_blank" rel="noreferrer">Paciente Modelo</a></div></div><div className="footer-bottom"><span>© 2026 Instituto Sharon. Todos os direitos reservados.</span><span className="footer-credit">Desenvolvido por PK TEC</span></div></footer><a className="whatsapp" href="#contatos" aria-label="Falar com o Instituto Sharon pelo WhatsApp"><MessageCircle size={22} /></a>
  </div>
}

export default App
