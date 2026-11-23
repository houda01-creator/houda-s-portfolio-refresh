export const profile = {
  firstName: "Houda",
  lastName: "ES-SEYOURI",
  role: "Business Developer · Marketing Digital",
  availability: "Alternance ou stage de 6 mois dès décembre 2026",
  school: "MSc EDC Paris Business School",
  intro:
    "J'apprends vite, j'exécute avec rigueur et je transforme des idées en projets concrets, chiffrés et défendables : marketing digital, stratégie et coordination d'équipe.",
  email: "houda.syouri@gmail.com",
  phone: "+33776200689",
  phoneDisplay: "+33 7 76 20 06 89",
};

export const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#profil", label: "Profil" },
];

export const tools = [
  "Pack Office",
  "SAP / ERP",
  "Google Analytics",
  "Canva",
  "Figma",
  "Stitch",
  "Framer",
  "Replit",
  "CapCut",
  "WordPress",
  "CRM",
  "SEO / SEA",
  "Notion",
  "Trello",
  "Outils d'IA",
];

export type Figure = { value: number; prefix?: string; suffix?: string; label: string };

export const keyFigures: Figure[] = [
  { value: 145, label: "Prospects qualifiés" },
  { value: 15, suffix: " %", label: "Taux de conversion" },
  { value: 7000, suffix: " DH", label: "CA généré · Aghbal" },
  { value: 22, label: "Personnes managées" },
  { value: 15, label: "SKUs pilotés via SAP" },
  { value: 5, prefix: "+", label: "Dossiers soutenus devant jury" },
];

export const philosophy = {
  title: "La stratégie ne vaut que si elle survit au contact du réel.",
  quote:
    "On m'a confié des idées qui n'étaient pas les miennes. Mon travail est de leur trouver un public.",
  body: [
    "Le marketing digital qu'on m'a appris dans les livres et celui que j'ai pratiqué sur le terrain ne se ressemblent pas. Sur le terrain, il n'y a pas de brief parfait : il y a une coéquipière qui part en plein milieu du projet et qu'il faut remplacer en urgence, un stock de caroube que des familles ne savent pas monétiser, une compétition dans trois semaines et zéro support visuel.",
    "Je préfère un benchmark qui débouche sur une vraie décision à une présentation impeccable qui ne sert à personne, et un chiffre modeste mais vérifiable à une promesse en l'air. C'est ce qui s'est passé sur Baluxe, sur Aghbal, et sur chaque dossier que j'ai soutenu devant jury.",
  ],
};

export type Project = {
  name: string;
  context: string;
  badge: string;
  hook: string;
  challenge: string;
  execution: string;
  impactValue: string;
  impact: string;
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    name: "Baluxe",
    context: "Friperie digitale · Co-fondatrice",
    badge: "Repris en cours",
    hook: "Le premier vrai projet sur lequel j'ai travaillé.",
    challenge:
      "L'industrie textile pèse 10 % des émissions mondiales. Modèle de friperie digitale avec départ imprévu de l'opérationnelle en cours de route.",
    execution:
      "Reprise seule de l'étude de marché, du benchmark, de la recherche de sponsors et de la direction photo pour fixer la charte Instagram/TikTok.",
    impactValue: "100 %",
    impact: "Continuité assurée sans interruption de marque.",
    link: { href: "https://www.instagram.com/baluxe_officiel/", label: "Le compte Instagram Baluxe" },
  },
  {
    name: "Aghbal",
    context: "Projet Enactus · Project Initiator & Coordinatrice",
    badge: "CA vérifié",
    hook: "Un stock de caroube, personne pour le transformer en revenu.",
    challenge:
      "Monétisation de la caroube locale sous forme d'alternative saine au sucre (réduction des risques de diabète).",
    execution:
      "Coordination d'équipe, stratégie omnicanale (épiceries + réseaux sociaux) et préparation aux compétitions de pitch.",
    impactValue: "7 000+ DH",
    impact:
      "Chiffre d'affaires généré, sélection à l'Orient Startup Challenge comme meilleur projet de la région et demi-finale de la compétition nationale Enactus.",
  },
  {
    name: "Cire Trudon en Inde",
    context: "Géopolitique pour manager",
    badge: "Soutenu devant jury",
    hook: "Faire entrer une bougie française dans un marché verrouillé par les taxes.",
    challenge:
      "Positionnement d'une maison de luxe française face à 40 % de droits de douane et 28 % de TVA en Inde.",
    execution:
      "Création d'un business case shop-in-shop à Mumbai (Jio World Plaza) avec étude réglementaire, RH et douanière.",
    impactValue: "~70 000 €",
    impact: "Budget annuel maîtrisé et faisabilité démontrée devant jury.",
  },
  {
    name: "Terres rares & Agilité climatique",
    context: "Stratégie & Transition énergétique",
    badge: "Soutenu devant jury",
    hook: "Rendre la chaîne de valeur éolienne américaine indépendante des terres rares chinoises.",
    challenge:
      "La Chine contrôle ~90 % du raffinage mondial de terres rares, exposant la transition énergétique américaine à un risque géopolitique et à d'importantes tensions d'approvisionnement.",
    execution:
      "Stratégie asset-light basée sur la réluctance (firmware de contrôle sans aimants NdFeB), modélisation PESTEL/SWOT et réseau public-privé (DOE, DoD, OEM).",
    impactValue: "3 scénarios",
    impact:
      "Modèle de substitution validé sur 3 scénarios climatiques (2045) et stratégie de levée de capitaux conditionnée par paliers.",
  },
  {
    name: "Skan Face",
    context: "Retail Tech & IA · Gestion de projet",
    badge: "Soutenu devant jury",
    hook: "Un miroir interactif IA qui objective le diagnostic dermatologique en point de vente.",
    challenge:
      "Standardiser et fiabiliser les recommandations cosmétiques en magasin grâce à la donnée, sans remplacer l'expertise humaine des conseillères de vente.",
    execution:
      "Cadrage complet (MOA/COPIL/MOE), budget prévisionnel (CAPEX/OPEX), modélisation WBS/GANTT/PERT et intégration IA (computer vision & recommandation CRM).",
    impactValue: "+5 à 20 %",
    impact:
      "D'augmentation du panier moyen estimée, stratégie Made in France (Saint-Gobain) et ROI amorti en moins de 2 mois.",
  },
];

export const experiences = [
  {
    period: "2024 – 2025",
    title: "Assistante marketing et commerciale",
    type: "Stage de fin d'études",
    company: "Equatorial Coca-Cola Bottling Company",
    body: "J'ai piloté le reporting hebdomadaire de KPI sur un portefeuille de 15 SKUs via SAP Logistique, en centralisant plusieurs sources de données dans un tableau de bord décisionnel unique. J'ai coordonné l'exécution de 4 campagnes promotionnelles, du déploiement des matériaux POS en point de vente à la synchronisation de 3 départements internes, et identifié 2 SKUs sous-performants grâce à l'analyse des tendances de sell-out.",
  },
  {
    period: "2023 – 2024",
    title: "Ingénieure commerciale et communication digitale",
    type: "Stage d'initiation",
    company: "Soft Cactus, agence de communication digitale",
    body: "J'ai constitué une base de 145 prospects B2B et B2C qualifiés dans le secteur de la santé, avec un taux de conversion de 15 % en premier rendez-vous dès la première campagne d'outreach. J'ai aussi planifié et coordonné le contenu éditorial des réseaux sociaux via un calendrier de publication, en suivant l'engagement par post pour orienter les cycles suivants.",
  },
];

export const engagementStats: Figure[] = [
  { value: 22, label: "Membres managés" },
  { value: 6, label: "Projets d'impact co-créés" },
  { value: 4, label: "Forums & événements" },
];

export const engagements = [
  {
    period: "2023 – 2024",
    title: "Vice-Présidente · Cellule Présentation",
    org: "Association Enactus",
    body: "Management d'une équipe de 22 personnes et coordination des présentations orales. Qualification de l'équipe en demi-finale de la Compétition Nationale pour la 1ère fois après 4 ans d'attente. Développement et suivi de trois projets d'entrepreneuriat social (Aghbal, INO, Bio Bna).",
  },
  {
    period: "2022 – 2024",
    title: "Membre active",
    org: "Association Internationale Enactus",
    body: "Co-création et gestion opérationnelle de projets d'entrepreneuriat social (Baluxe, ReToy, LOOPY). Organisation de 2 forums d'entrepreneuriat et de networking ainsi que de 2 événements caritatifs.",
  },
];

export const pillars = [
  {
    title: "Stratégie et intelligence de marché",
    body: "Études de marché, benchmarks, lecture géopolitique appliquée au business. Chaque analyse débouche sur une décision concrète.",
    tags: ["Analyse PESTEL", "SWOT", "Business Model Canvas", "Benchmarking"],
  },
  {
    title: "Storytelling & Pitch",
    body: "Scénarisation, répétitions et défense de projets devant des jurys exigeants.",
    tags: ["Prise de parole", "Storytelling"],
  },
  {
    title: "Gestion de projet",
    body: "Reprise en main dans l'urgence, structuration MOA/MOE et rigueur opérationnelle.",
    tags: ["WBS / GANTT", "Gestion de crise"],
  },
  {
    title: "Innovation & Retail Tech",
    body: "Cadrage de solutions IA (vision par ordinateur, algorithmes de recommandation), parcours client phygital et conformité RGPD.",
    tags: ["Intelligence Artificielle", "Parcours phygital", "Cahier des charges UX/UI", "Conformité RGPD"],
  },
];

export const education = [
  {
    period: "2025 – 2027",
    title: "MSc Business Développement & Marketing Digital",
    school: "EDC Paris Business School · Paris, France",
    note: "Alternance dès déc. 2026",
    body: "Rythme : 3 semaines en entreprise / 1 semaine en formation. Spécialisation stratégie de croissance, marketing digital et gestion de projets complexes.",
  },
  {
    period: "2024 – 2025",
    title: "Licence d'Excellence Marketing Management Digital & E-Commerce",
    school: "Souissi Business School, Université Mohammed V · Rabat, Maroc",
    body: "Solides fondamentaux en performance digitale, mécanique e-commerce et stratégie commerciale omnicanale.",
  },
  {
    period: "2022 – 2024",
    title: "DUT Marketing & E-Commerce",
    school: "École Supérieure de Technologie · Oujda, Maroc",
    body: "Formation initiale axée sur la gestion de projet, les études de marché, la négociation et la création de contenu.",
  },
];

export const certifications = [
  {
    org: "Nestlé YEP",
    date: "17 sept.",
    title: "Entrepreneuriat · Génération d'idées",
    body: "Identification des besoins non résolus, méthodes d'idéation structurées et formalisation de la proposition de valeur.",
    tags: ["Idéation", "Innovation"],
    href: "https://drive.google.com/file/d/1IH3hzW0CdFY-zJBp9_nRi6hdtCZe2GQv/view?usp=drive_link",
  },
  {
    org: "Nestlé YEP",
    date: "21 sept.",
    title: "Entrepreneuriat · Création de solutions",
    body: "Du concept abstrait au prototype testable, itération agile centrée utilisateur et faisabilité produit.",
    tags: ["Design Thinking", "Prototypage"],
    href: "https://drive.google.com/file/d/1dkeLi0gV8UdgKu-XcZUtw2aMkv6oFA3h/view?usp=sharing",
  },
  {
    org: "Nestlé YEP",
    date: "22 sept.",
    title: "Successful Entrepreneur Training",
    body: "Structuration de modèles économiques viables, premières étapes de commercialisation et stratégie de déploiement.",
    tags: ["Business Model", "Go-to-market"],
    href: "https://drive.google.com/file/d/10c_lw07VFrBehwIZwaxlMW_0FeRnL30d/view?usp=sharing",
  },
  {
    org: "Nestlé YEP FoodTech",
    date: "24 sept.",
    title: "Food Product Development",
    body: "Cycle de développement de produits alimentaires, contraintes de formulation et passage du concept au produit fini.",
    tags: ["FoodTech", "R&D Produit"],
    href: "https://drive.google.com/file/d/1t3EHaQsZl6Vf3Zj6hNFE03t6I_E4q1Ru/view?usp=sharing",
  },
  {
    org: "Nestlé YEP FoodTech",
    date: "25 sept.",
    title: "Project Management",
    body: "Planification de projets scientifiques et techniques, coordination des jalons et mitigation des risques.",
    tags: ["Gestion de projet", "Planification"],
    href: "https://drive.google.com/file/d/1b_xouecOx4R3su3ACWYc3eOPRjxEx8li/view?usp=sharing",
  },
  {
    org: "Nestlé YEP FoodTech",
    date: "26 sept.",
    title: "Consumer Understanding",
    body: "Étude des attentes consommateurs, tests sensoriels et validation du marché pour maximiser l'adoption produit.",
    tags: ["Consumer Insights", "Étude marché"],
    href: "https://drive.google.com/file/d/1s-pQrv-fPTDmSyxiYQjIBz_jEaKZRE6V/view?usp=sharing",
  },
  {
    org: "Nestlé YEP FoodTech",
    date: "28 sept.",
    title: "Design of Experiments",
    body: "Plans d'expériences structurés, optimisation de formulations et analyse rigoureuse des données.",
    tags: ["Méthodologie", "Optimisation"],
    href: "https://drive.google.com/file/d/1K1BC1uAZWaHqtd0o_M1BQisKYL5i654z/view?usp=sharing",
  },
];

export const about =
  "Mon fil rouge : comprendre vite un sujet complexe qui n'est pas le mien, et le rendre présentable, chiffré, défendable.";

export const languages = [
  { flag: "🇫🇷", label: "Français", level: "Bilingue" },
  { flag: "🇺🇸", label: "Anglais", level: "C1" },
  { flag: "🇲🇦", label: "Arabe", level: "Maternelle" },
  { flag: "🇨🇳", label: "Mandarin", level: "HSK 2" },
];

export const hobbies = [
  { icon: "🎨", label: "Peinture acrylique" },
  { icon: "🏕️", label: "Voyages en solo" },
  { icon: "🐎", label: "Équitation" },
  { icon: "🎸", label: "Guitare" },
  { icon: "🎧", label: "Écouter de la musique" },
  { icon: "📚", label: "Lire des œuvres" },
  { icon: "🍳", label: "Cuisiner" },
  { icon: "🍜", label: "Déguster de nouvelles cuisines" },
];
