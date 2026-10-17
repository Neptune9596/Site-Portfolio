import { ArrowDownRight, ArrowUpRight, Check, Code2, Database, ExternalLink, Github, Globe2, Layers3, Mail, MapPin, Menu, ShieldCheck, Sparkles, Terminal, UserRound } from 'lucide-react'

const strengths = [
  { number: '01', title: 'Autonomie', text: "Avancer par moi-même, organiser mon travail et chercher des solutions avant de solliciter de l'aide." },
  { number: '02', title: "Capacité d'apprentissage", text: "Aborder une technologie inconnue grâce à la documentation, la pratique et l'expérimentation." },
  { number: '03', title: 'Persévérance & recul', text: "Comprendre l'origine d'un problème, tester des hypothèses et corriger ce qui doit l'être." },
]
const features = [
  ['01', 'Gestion documentaire', 'Dépôt, téléchargement et mise à jour de fichiers, navigation par dossiers, métadonnées, prévisualisation et corbeille.'],
  ['02', 'Utilisateurs & permissions', 'Gestion des comptes, rôles administrateur et employé, avec contrôle des droits d’accès aux documents.'],
  ['03', 'Architecture & données', 'Front-end React/TypeScript, données PostgreSQL via Supabase et organisation par fonctionnalités.'],
  ['04', 'Automatisation & collaboration', 'Demandes d’échange entre entreprises, tableau de bord et fonctions automatisées de maintenance.'],
]

const process = [
  ['01', 'Gemini', 'Explorer les possibilités', "Identifier les outils d'IA pertinents et réfléchir à la manière d'organiser le travail."],
  ['02', 'ChatGPT', 'Définir le contenu', "Analyser l'offre, structurer les sections, préciser le ton et préparer les textes."],
  ['03', 'v0', 'Générer le site', 'Transformer un cahier des charges détaillé en une première version fonctionnelle.'],
  ['04', 'GitHub', 'Publier le code', 'Conserver le code source et préparer le déploiement avec une version claire et traçable.'],
  ['05', 'Cloudflare Pages', 'Mettre en ligne', 'Déployer le site pour le rendre accessible et vérifier son comportement dans un environnement réel.'],
]

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

export default function Page() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Retour en haut"><span>YK</span><strong>Yonatan Kebret</strong></a>
        <div className="nav-links"><a href="#experience">Expérience</a><a href="#approche">Approche</a><a href="#parcours">Parcours</a></div>
        <a className="nav-contact" href="mailto:YonatanKebret@gmail.com">Me contacter <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" />Candidature · Stage de 12 semaines</div>
          <h1>Construire,<br /><em>apprendre</em> et faire<br />avancer les idées.</h1>
          <p className="hero-intro">Je m'appelle <strong>Yonatan Negash Kebret</strong>. Étudiant en BUT 3 Informatique, parcours DACS à l'IUT de Toulouse, je recherche un stage de trois mois autour du développement web.</p>
          <p className="hero-intro">J'aime transformer un besoin concret en solution fonctionnelle, apprendre les technologies nécessaires et utiliser l'intelligence artificielle pour avancer plus efficacement, sans renoncer à comprendre ce que je construis.</p>
          <div className="hero-actions"><a className="button primary" href="#experience">Découvrir mon expérience <ArrowDownRight size={17} /></a><a className="button secondary" href="mailto:YonatanKebret@gmail.com">Me contacter <Mail size={16} /></a></div>
          <div className="hero-meta"><span><MapPin size={14} /> Toulouse</span><span><Code2 size={14} /> Développement web</span><span><Globe2 size={14} /> FR · EN · AM</span></div>
        </div>
        <div className="hero-visual" aria-label="Composition graphique autour de la méthode de travail">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="code-card"><div className="code-top"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span className="code-file">approach.ts</span></div><pre><code><span className="code-muted">const</span> approach = {'{'}{`\n`}  <span className="code-key">build</span>: <span className="code-string">&quot;with purpose&quot;</span>,{`\n`}  <span className="code-key">learn</span>: <span className="code-string">&quot;by doing&quot;</span>,{`\n`}  <span className="code-key">verify</span>: <span className="code-string">true</span>{`\n`}{'}'}</code></pre><div className="code-status"><Check size={13} /> ready to learn</div></div>
          <div className="method-pill pill-one"><span>01</span> Concevoir</div><div className="method-pill pill-two"><span>02</span> Apprendre</div><div className="method-pill pill-three"><span>03</span> Vérifier</div>
          <div className="visual-caption">Une méthode simple.<br /><strong>Des résultats utiles.</strong></div>
        </div>
      </section>

      <section className="about section shell" id="approche"><div className="section-heading"><SectionLabel>01 — À propos</SectionLabel><h2>Ce qui me motive<br /><em>en informatique.</em></h2></div><div className="about-body"><p className="lead">Ce que j'apprécie dans l'informatique, c'est la possibilité de partir d'un besoin concret, de chercher une solution et de la transformer en quelque chose d'utile.</p><p>Je suis particulièrement intéressé par le développement web, la conception d'interfaces et les questions de sécurité et de gestion des données. J'aime comprendre comment les différentes parties d'une application fonctionnent ensemble, mais aussi réfléchir à la manière dont les utilisateurs vont réellement s'en servir.</p><p>Je ne pense pas qu'il soit nécessaire de tout connaître avant de commencer un projet. En revanche, il faut être capable de chercher, d'apprendre, de tester et de remettre en question ses premières solutions.</p></div></section>
      <section className="strengths shell"><div className="strength-grid">{strengths.map(({ number, title, text }) => <article className="strength" key={number}><span className="index">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="experience section shell" id="experience"><div className="section-heading split"><div><SectionLabel>02 — Expérience principale</SectionLabel><h2>Apprendre une nouvelle stack,<br /><em>construire une application complète.</em></h2></div><div className="experience-tag">10 semaines<br /><span>CyberSoft PLC · Addis-Abeba</span></div></div><div className="experience-intro"><p>Lors de mon stage de deuxième année de BUT Informatique chez CyberSoft PLC, j'ai travaillé sur la conception et le développement d'une application web de gestion documentaire.</p><p>L'entreprise disposait déjà d'un outil interne dont l'interface et certaines fonctionnalités devaient être modernisées. Mon objectif était de développer une nouvelle base technique permettant de gérer les documents et les dossiers, de sécuriser les accès et de faciliter la collaboration entre utilisateurs.</p><p>Je n'avais jamais développé avec React ni TypeScript avant ce stage. J'ai donc dû apprendre ces technologies tout en avançant sur un véritable projet, à partir des besoins définis avec mon tuteur.</p></div><div className="feature-grid">{features.map(([number, title, text]) => <article className="feature" key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="stack-row"><span>Technologies abordées</span><b>React</b><b>TypeScript</b><b>Supabase</b><b>PostgreSQL</b><b>Material UI</b><b>RLS</b></div><div className="learning-note"><Sparkles size={20} /><div><h3>Ce que j'ai appris en chemin</h3><p>Avancer rapidement ne signifie pas simplement écrire du code le plus vite possible. J'ai rencontré des difficultés liées aux politiques de sécurité de la base de données et à l'organisation des fichiers et des dossiers. Il m'a fallu identifier les causes, revoir certains choix et ajuster la structure de l'application.</p><p>Cette expérience m'a donné davantage confiance dans ma capacité à apprendre une technologie inconnue et à mener un projet technique sur la durée.</p></div></div><p className="fine-note">L'application constituait une base technique destinée à une future évolution de l'outil interne. Sa mise en production et l'intégration des données existantes restaient à effectuer par l'entreprise.</p></section>

      <section className="projects section shell" id="parcours"><div className="section-heading"><SectionLabel>03 — Autres réalisations</SectionLabel><h2>Des projets pour apprendre<br /><em>en faisant.</em></h2></div><div className="project-list"><article className="project featured-project"><div className="project-icon"><Globe2 size={22} /></div><div><span className="project-type">Projet web · Mai 2025</span><h3>Site web d'une église</h3><p>Conception et réalisation d'un site web de présentation pour une église. Une expérience autour de la création d'un site destiné à présenter une organisation et ses informations en ligne.</p><a href="https://eotctoulouse.org/" target="_blank" rel="noreferrer">Voir le site <ExternalLink size={14} /></a></div></article><article className="project"><div className="project-icon"><Layers3 size={22} /></div><div><span className="project-type">Projet universitaire · 4 mois</span><h3>Application de gestion en équipe</h3><p>Projet réalisé en groupe de cinq : modélisation du besoin, documentation, développement full-stack, tests et retours utilisateurs.</p></div></article><article className="project"><div className="project-icon"><Terminal size={22} /></div><div><span className="project-type">Expérimentation personnelle</span><h3>Environnement Linux</h3><p>Installation et configuration d'un environnement de développement sous Debian dans une machine virtuelle VirtualBox.</p></div></article></div></section>

      <section className="skills section shell"><div className="section-heading"><SectionLabel>04 — Compétences</SectionLabel><h2>Des compétences développées<br /><em>en pratiquant.</em></h2></div><div className="skills-layout"><div className="skill-intro"><p>Mon approche consiste à consolider mes bases, à choisir les outils adaptés à chaque besoin et à apprendre de nouvelles technologies lorsque le projet l'exige.</p></div><div className="skill-groups"><div><h3><Code2 size={17} /> Développement web</h3><p>HTML · CSS · PHP · React · TypeScript</p></div><div><h3><Terminal size={17} /> Programmation</h3><p>Java · Python · Ada</p></div><div><h3><ShieldCheck size={17} /> Données & sécurité</h3><p>PostgreSQL · Supabase · Authentification · RLS</p></div><div><h3><Database size={17} /> Systèmes & conception</h3><p>Windows · Linux Debian · UML · Structuration d'applications</p></div></div></div></section>

      <section className="ai-section section"><div className="shell"><div className="ai-heading"><SectionLabel>05 — Ma vision de l'IA</SectionLabel><h2>L'IA comme accélérateur,<br /><em>pas comme substitut.</em></h2><p>Je pense que l'avenir de l'informatique se construira en grande partie avec l'intelligence artificielle. Le plus intéressant n'est pas de l'utiliser pour remplacer la réflexion humaine, mais de s'en servir pour apprendre plus vite, explorer des solutions, automatiser certaines tâches et avancer plus efficacement.</p></div><div className="principles"><div><span>01</span><h3>Explorer</h3><p>Découvrir des approches et accélérer les recherches.</p></div><div><span>02</span><h3>Comprendre</h3><p>Apprendre le fonctionnement des solutions proposées.</p></div><div><span>03</span><h3>Vérifier</h3><p>Tester, contrôler et corriger pour garder la maîtrise.</p></div></div></div></section>

      <section className="process section shell"><div className="section-heading"><SectionLabel>06 — Transparence</SectionLabel><h2>Une démarche assistée par l'IA,<br /><em>pilotée par mes choix.</em></h2><p>Pour réaliser ce site, j'ai organisé le travail en plusieurs étapes, en utilisant différents outils selon leur utilité. Chaque résultat a été relu, adapté et vérifié.</p></div><div className="timeline">{process.map(([number, tool, title, text]) => <article key={number}><span className="timeline-number">{number}</span><div><span className="tool-name">{tool}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="contact section shell"><div className="contact-card"><div><SectionLabel>07 — La suite</SectionLabel><h2>Prêt à apprendre,<br /><em>et à contribuer.</em></h2><p>Je souhaite rejoindre un environnement où je pourrai participer à des projets concrets, apprendre auprès de personnes expérimentées et contribuer à produire des solutions utiles.</p></div><div className="contact-action"><a className="button primary" href="mailto:YonatanKebret@gmail.com">Écrire à Yonatan <ArrowUpRight size={17} /></a><span>Stage conventionné · 12 semaines · Toulouse</span></div></div></section>
      <footer className="footer shell"><a className="brand" href="#top"><span>YK</span><strong>Yonatan Negash Kebret</strong></a><p>BUT 3 Informatique · IUT de Toulouse</p><a href="mailto:YonatanKebret@gmail.com">YonatanKebret@gmail.com <Mail size={14} /></a></footer>
    </main>
  )
}
