/* lang.js — iAdOps Cockpit · FR ↔ EN */
(function () {

/* ── DICTIONARY ────────────────────────────────────────────────────── */
const D = {
  // NAV & TABS
  'Le projet': 'The project',
  'Progression AdOps': 'AdOps progress',
  'Optimisation': 'Optimization',
  'Réalisations': 'Achievements',
  "L'actu": 'News',
  'On avance ensemble': 'Moving forward together',

  // ── index.html ──────────────────────────────────────────────────────
  'Industrialiser nos opérations': 'Industrializing our operations',
  "grâce à l'IA": 'with AI',
  'Fiabiliser, standardiser et automatiser les tâches à faible valeur — pour remettre du temps au service du client.':
    'Reliability, standardization and automation of low-value tasks — freeing up time for client expertise.',
  'Notre mission': 'Our mission',
  'Ce que fait le workstream iAdOps': 'What the iAdOps workstream does',
  "Nous outillons les équipes AdOps avec l'IA : chaque tâche répétitive du quotidien — set-up, contrôle qualité, rapport, bilan — devient un skill fiable, partagé et réutilisable par toute l'équipe. Le but n'est pas de faire plus vite pour faire plus, mais de libérer du temps d'expertise pour nos clients.":
    "We equip AdOps teams with AI: every repetitive daily task — set-up, quality control, report, wrap-up — becomes a reliable, shared and reusable skill for the whole team. The goal is not to go faster to do more, but to free up expertise time for our clients.",
  'FIABILISER': 'RELIABILITY',
  'Zéro erreur avant le go-live': 'Zero errors before go-live',
  'Un contrôle qualité systématique et des livrables homogènes.': 'Systematic quality control and consistent deliverables.',
  'STANDARDISER': 'STANDARDIZE',
  'Une méthode commune': 'A common method',
  "Piloter, itérer, généraliser — les mêmes skills pour toute l'équipe.": 'Pilot, iterate, scale — the same skills for the whole team.',
  'AUTOMATISER': 'AUTOMATE',
  'Du brief au bilan': 'From brief to wrap-up',
  'Rapports, bilans, set-up et QA produits via Claude.': 'Reports, wrap-ups, set-up and QA produced via Claude.',
  'RÉINVESTIR': 'REINVEST',
  'Du temps pour le client': 'Time for the client',
  'Le temps gagné réinvesti en qualité, conseil et stratégie.': 'Time saved reinvested in quality, advisory and strategy.',
  'Chantiers ouverts': 'Open workstreams',
  'Familles de sujets': 'Topic families',
  'AdOps embarqués': 'AdOps on board',
  'Marches du parcours': 'Progression steps',
  'Les sujets': 'Topics',
  '13 chantiers · 4 familles': '13 workstreams · 4 families',
  'Chaîne de production IA': 'AI production chain',
  'Set-up auto': 'Auto set-up',
  'QA / Contrôle qualité': 'QA / Quality control',
  'Rapport auto': 'Auto report',
  'Bilan auto': 'Auto wrap-up',
  'Analyses spécifiques': 'Specific analyses',
  'Socle : mémoire & collaboratif': 'Foundation: memory & collaboration',
  'Mémoire & espace collaboratif': 'Memory & collaborative workspace',
  'Outillage collaborateur': 'Contributor tooling',
  'Pilotage & adoption': 'Steering & adoption',
  "Adoption de l'équipe": 'Team adoption',
  'Innovation & transverse': 'Innovation & cross-cutting',
  'Assistants & générations IA': 'Assistants & AI generation',
  'ROI & mesure de la valeur': 'ROI & value measurement',
  'Pistes outils': 'Tool tracks',
  'Où en est chaque sujet': 'Where each topic stands',
  'S2 2026 · vue partielle, elle bouge': 'H2 2026 · partial view, it evolves',
  'Maturité': 'Maturity',
  'Réflexion': 'Exploration',
  'En cours': 'In progress',
  'Acquis': 'Acquired',
  'Espace Cowork partagé': 'Shared Cowork space',
  'test en cours': 'test in progress',
  'concours en cours': 'contest in progress',
  'Dashboard pilotage client': 'Client steering dashboard',
  'fiche, vie du client, to-do': 'card, client activity, to-do',
  '1 Claude par canal Slack': '1 Claude per Slack channel',
  "Où en est l'équipe, et ce qu'elle produit": "Where the team stands and what it produces",
  "Le parcours « Équipe Équipée », les trophées de chacun, les livrables et les tests en cours.":
    "The 'Equipped Team' journey, each person's trophies, deliverables and ongoing tests.",
  'Voir la progression →': 'View progress →',
  "L'actu du projet": 'Project news',
  'Ce qui bouge cette semaine': "What's moving this week",
  "Le grand chantier du moment, les usages déjà en production et la veille de l'équipe.":
    "The current main project, usages already in production, and team news.",
  "Lire l'actu →": 'Read the news →',

  // ── progression.html ────────────────────────────────────────────────
  'Adoption & livrables': 'Adoption & deliverables',
  'La progression des AdOps': 'AdOps progression',
  "Chacun avance à son rythme sur l'IA — et chaque usage débloque un trophée. Voici où en est l'équipe, et ce qu'elle a déjà produit.":
    "Everyone progresses at their own pace on AI — and each use unlocks a trophy. Here is where the team stands and what it has already produced.",
  'Le parcours': 'The journey',
  'Équipe Équipée · 6 marches': 'Equipped Team · 6 steps',
  'Initié': 'Initiate',
  'Actif': 'Active',
  'Aguerri': 'Seasoned',
  'Maître': 'Master',
  'Référent': 'Champion',
  'Claude en place & en marche': 'Claude set up & running',
  "Un livrable réel produit avec l'IA": 'A real deliverable produced with AI',
  'Les usages métier acquis': 'Business use cases acquired',
  'Automatisation & mesure': 'Automation & measurement',
  'Autonomie & innovation': 'Autonomy & innovation',
  'Forme les autres & diffuse': 'Trains others & spreads usage',
  'Le catalogue des trophées': 'Trophy catalogue',
  '23 trophées · 6 niveaux séquentiels': '23 trophies · 6 sequential levels',
  'NIVEAU 1 — INITIÉ': 'LEVEL 1 — INITIATE',
  'NIVEAU 2 — ACTIF': 'LEVEL 2 — ACTIVE',
  'NIVEAU 3 — AGUERRI': 'LEVEL 3 — SEASONED',
  'NIVEAU 4 — EXPERT': 'LEVEL 4 — EXPERT',
  'NIVEAU 5 — MAÎTRE': 'LEVEL 5 — MASTER',
  'NIVEAU 6 — RÉFÉRENT': 'LEVEL 6 — CHAMPION',
  'Installé': 'Installed',
  'Usage régulier': 'Regular use',
  '1er rapport': '1st report',
  '1er bilan': '1st wrap-up',
  'Multi-comptes': 'Multi-accounts',
  'Reformulation de mails': 'Email rewriting',
  'Recherche de data': 'Data research',
  'Analyse': 'Analysis',
  'Suivi campagne & optis': 'Campaign tracking & optimization',
  'Recap / dashboard campagne': 'Campaign recap / dashboard',
  'Zéro manuel': 'Zero manual',
  'Créateur de skill': 'Skill creator',
  'Gain de temps mesuré': 'Measured time saving',
  'Tâche programmée': 'Scheduled task',
  'Nouveau connecteur': 'New connector',
  'Set-up auto': 'Auto set-up',
  'QA sans faille': 'Flawless QA',
  'Bilan augmenté': 'Enhanced wrap-up',
  'Ambassadeur': 'Ambassador',
  'Workshop IA': 'AI workshop',
  "Nouveau cas d'usage": 'New use case',
  'Mentor cross-équipe': 'Cross-team mentor',
  'Claude installé sur le poste + connecteurs de base opérationnels.': 'Claude installed on the workstation + core connectors operational.',
  "Skill « automation-ia-ready » lancé et validé — environnement complet.": '"automation-ia-ready" skill launched and validated — complete environment.',
  'Utilise Claude plusieurs fois par semaine, spontanément.': 'Uses Claude several times a week, spontaneously.',
  'A produit au moins un rapport de campagne via un skill.': 'Has produced at least one campaign report via a skill.',
  'A produit au moins un bilan de campagne via Claude.': 'Has produced at least one campaign wrap-up via Claude.',
  'Utilise Claude sur au moins deux comptes clients différents.': 'Uses Claude on at least two different client accounts.',
  'Rédige / reformule ses mails clients avec Claude.': 'Writes / rewrites client emails with Claude.',
  'Fait rechercher / récupérer des données par Claude.': 'Has Claude search / retrieve data.',
  'Fait analyser des performances de campagne par Claude.': 'Has Claude analyze campaign performance.',
  'Suit ses campagnes et pilote ses optimisations avec Claude.': 'Tracks campaigns and drives optimizations with Claude.',
  'Produit un récap de campagne en cours / un dashboard de suivi.': 'Produces a campaign recap / tracking dashboard.',
  "Ne fait plus en manuel ce que Claude peut faire — réflexe par défaut.": "No longer does manually what Claude can do — the default reflex.",
  "A créé ou amélioré un skill réutilisable par l'équipe.": "Has created or improved a reusable skill for the team.",
  "A documenté un gain de temps chiffré sur une tâche.": "Has documented a quantified time saving on a task.",
  "A mis en place une automatisation récurrente (tâche programmée) qui tourne seule.": "Has set up a recurring automation (scheduled task) that runs on its own.",
  "A mis en place une automatisation récurrente qui tourne seule.": "Has set up a recurring automation that runs on its own.",
  "A branché un nouveau connecteur / MCP utile à l'équipe.": "Has connected a new connector / MCP useful to the team.",
  "A monté une campagne (LCM/DSP) sans saisie manuelle, via Claude.": "Has set up a campaign (LCM/DSP) without manual input, via Claude.",
  "Contrôle qualité systématique avant go-live, zéro erreur de paramétrage.": "Systematic quality control before go-live, zero configuration errors.",
  "A produit un bilan enrichi du contexte du compte (Slack, Notion, historique).": "Has produced a wrap-up enriched with account context (Slack, Notion, history).",
  "Forme les autres / propose des cas d'usage": "Trains others / proposes use cases",
  "Forme les autres / propose des cas d'usage.": "Trains others / proposes use cases.",
  "A animé / produit un workshop via Claude": "Has hosted / produced a workshop via Claude",
  "A animé / produit un workshop via Claude.": "Has hosted / produced a workshop via Claude.",
  "A proposé un nouveau cas d'usage IA": "Has proposed a new AI use case",
  "A proposé un nouveau cas d'usage IA.": "Has proposed a new AI use case.",
  "A formé / diffusé un usage à une autre équipe que les AdOps.": "Has trained / spread a use case to a team other than AdOps.",
  'Les trophées remis': 'Awarded trophies',
  'Une réalisation, un trophée': 'One achievement, one trophy',
  'Le premier bilan 100 % IA': 'The first 100% AI wrap-up',
  'Le bilan Hespéride entièrement produit avec Claude, restitué au client et approuvé à 100 %.':
    'The Hespéride wrap-up entirely produced with Claude, presented to the client and approved 100%.',
  'Le bilan éclair': 'The lightning wrap-up',
  "Bilan PPTX Point P × Havas généré depuis un Excel : 5 minutes de relecture au lieu d'une demi-journée.":
    'Point P × Havas PPTX wrap-up generated from Excel: 5 minutes of review instead of half a day.',
  'Le reporting quotidien': 'Daily reporting',
  'Les rapports Weldom Drive-to-Store produits et publiés chaque jour, en routine.':
    'Weldom Drive-to-Store reports produced and published every day, routinely.',
  'Le rapport standardisé': 'The standardized report',
  'Le rapport Excel de campagne sorti du Dashboard en une phrase, utilisé en multi-comptes.':
    'Excel campaign report extracted from the Dashboard in one sentence, used across multiple accounts.',
  'Le cockpit partagé': 'The shared cockpit',
  "Premier dashboard perso connecté au Dashboard Mobsuccess, partagé avec son tutoriel d'installation.":
    'First personal dashboard connected to the Mobsuccess Dashboard, shared with its installation tutorial.',
  'La donnée branchée': 'Connected data',
  'Matomo connecté dans Claude sur Decathlon : stats campagnes et site lues dans un seul outil.':
    'Matomo connected in Claude on Decathlon: campaign and site stats read in a single tool.',
  'Le pilotage des leads': 'Leads management',
  'Le cockpit Leads Ops : comptes, budgets, charge par personne et actions automatiques.':
    'The Leads Ops cockpit: accounts, budgets, workload per person and automatic actions.',
  'Le compte embarqué': 'The onboarded account',
  'Intersport passé sur la chaîne rapport → bilan via Claude.':
    'Intersport moved to the report → wrap-up chain via Claude.',
  "L'équipe, marche par marche": 'The team, step by step',
  '12 AdOps en piste': '12 AdOps on track',
  'En tribune': 'In the stands',
  "On regarde l'équipe jouer : on cadre, on outille, on encourage — les trophées sont les leurs.":
    "We watch the team play: we frame, we equip, we encourage — the trophies are theirs.",
  'Operations Partner Senior': 'Senior Operations Partner',
  'Operations Partner Junior': 'Junior Operations Partner',
  'trophées': 'trophies',
  'Régulier': 'Regular',
  'Suivi optis': 'Optis tracking',
  'Tâche prog.': 'Sched. task',
  'Gain mesuré': 'Measured gain',
  'Les points forts': 'Key strengths',
  'Ce que chacun maîtrise avec Claude': 'What each person masters with Claude',
  'Le cockpit de suivi': 'The tracking cockpit',
  'Le bilan express': 'The express wrap-up',
  "Bilan PPTX généré depuis un Excel de stats : 1 min de brief, 5 min de relecture au lieu d'une demi-journée.":
    "PPTX wrap-up generated from a stats Excel: 1 min brief, 5 min review instead of half a day.",
  "L'usage au quotidien": 'Daily use',
  "Utilise Claude sur ses comptes sans y penser : récaps, contrôles et rapports passent par la chaîne IA.":
    "Uses Claude on accounts without thinking about it: recaps, checks and reports go through the AI chain.",
  'La montée éclair': 'The lightning rise',
  "Arrivée récemment dans l'équipe, déjà 4 trophées au compteur — une montée en puissance remarquable dès les premières semaines.":
    "Recently joined the team, already 4 trophies earned — a remarkable ramp-up from the very first weeks.",
  'Le relais terrain': 'The field relay',
  "Fait remonter les cas réels des comptes pour que les skills collent au quotidien des équipes.":
    "Brings up real account cases so skills match the teams' daily reality.",
  "Tout ce que l'équipe a déjà produit": "Everything the team has already produced",
  'Bilans clients, reporting quotidien, analyses, cockpits — avec les gains de temps mesurés.':
    'Client wrap-ups, daily reporting, analyses, cockpits — with measured time savings.',
  'Voir les réalisations →': 'View achievements →',

  // ── optimisation.html ───────────────────────────────────────────────
  'Méthode & usages': 'Method & usage',
  "L'utilisation de l'équipe": 'Team usage',
  "Vue cumulée S2 — du 9 juin au 7 septembre 2026, avec la tendance du mois d'août.":
    "Cumulative H2 view — June 9 to September 7, 2026, with the August trend.",
  'La méthode Lead / Sidekick': 'The Lead / Sidekick method',
  "Comment l'équipe pilote Claude": 'How the team manages Claude',
  'Copier le prompt': 'Copy prompt',
  'Prompt copié !': 'Copied!',
  'août 2026': 'Aug 2026',
  'req': 'req',

  // ── realisations.html ────────────────────────────────────────────────
  "Ce que l'équipe a produit": "What the team has produced",
  'Livrables · skills · réalisations': 'Deliverables · skills · achievements',
  "Des livrables qui ont servi, des skills qui sont réutilisés, des bilans qui ont convaincu des clients. Voici ce que l'équipe a déjà produit.":
    "Deliverables that were used, skills that are reused, wrap-ups that convinced clients. Here is what the team has already produced.",
  'Bilans de campagne': 'Campaign wrap-ups',
  'Rapports & reporting automatisés': 'Reports & automated reporting',
  "Ce qui diffuse l'usage": 'What spreads usage',
  "Docs d'alignement & set-up d'opé": 'Alignment docs & operation set-up',
  'Partager le set-up avec les agences et clients': 'Share the set-up with agencies and clients',
  'Ouvrir le doc ↗': 'Open the doc ↗',
  'Télécharger le PDF': 'Download PDF',
  'Voir le PDF ↗': 'View PDF ↗',

  // ── actu.html ────────────────────────────────────────────────────────
  'Point du 1er septembre 2026': 'Update — September 1, 2026',
  "Le grand chantier du moment, les usages déjà en production et la veille que l'équipe partage chaque semaine.":
    "The current main project, usages already in production, and the news the team shares each week.",
  'Les éditions': 'Editions',
  'Un point toutes les une à deux semaines': 'An update every one to two weeks',
  'Le grand chantier du moment': 'Current main project',
  'Déjà en production': 'Already in production',
  "On embarque toute l'équipe": 'We bring the whole team on board',
  "Veille & retours d'expérience": 'News & experience sharing',
  'Les tests en cours': 'Ongoing tests',
  "Ce que l'équipe éprouve en ce moment": "What the team is currently testing",
  'Test collectif': 'Group test',
  'Prochain cran': 'Next step',
  'Fait': 'Done',
  'Pilotage & adoption': 'Steering & adoption',
  'Automatisation & chaîne de prod': 'Automation & production chain',
  'Automatisation & outillage': 'Automation & tooling',
  'QA & Brand safety': 'QA & Brand safety',
  // Chantier titles
  'Chacun son cockpit de suivi': 'Each their own tracking cockpit',
  'Le dashboard unifié — le best-of': 'The unified dashboard — the best-of',
  'Brief créa auto depuis Monday': 'Auto creative brief from Monday',
  'Claude dans Chrome = Cowork': 'Claude in Chrome = Cowork',
  'Whitelist IA de placement': 'AI publisher whitelist',
  // Step labels
  'Emeric a montré la voie': 'Emeric showed the way',
  'Chacun crée le sien': 'Each one creates their own',
  'Le dashboard standardisé': 'The standardized dashboard',
  'Squad lancée': 'Squad launched',
  'Faisabilité confirmée (Mobanksy)': 'Feasibility confirmed (Mobanksy)',
  'Mise en place par Chris & Ahmat': 'Implementation by Chris & Ahmat',
  'Catégorisation des publishers': 'Publisher categorization',
  'Publication Whiteliste_08_26': 'Publication Whiteliste_08_26',
  'Mise à jour mensuelle automatique': 'Automatic monthly update',
  // Squads
  'Nouveau · les squads': 'New · the squads',
  'Famille A · Chaîne de production IA': 'Family A · AI production chain',
  'Des squads dédiées, les sujets répartis': 'Dedicated squads, topics allocated',
  "Les sujets de la chaîne de production IA sont répartis entre 3 squads : chacune porte ses sujets de bout en bout — cadrage, tests, industrialisation — et rend compte au weekly. Plus de sujet sans propriétaire.":
    "AI production chain topics are split between 3 squads: each owns its topics end-to-end — framing, testing, scaling — and reports at the weekly. No topic without an owner.",
  'Rapport auto': 'Auto report',
  "Du pilote à la série : le bilan de vague en quelques minutes.": "From pilot to series: the wave wrap-up in a few minutes.",
  'Les demandes sur mesure : potentiels, audiences, deep-dives.': 'Custom requests: potentials, audiences, deep-dives.',
  '100 % des rapports produits via le skill, sans retouche.': '100% of reports produced via skill, without rework.',
  'Zéro erreur avant le go-live, sur tous les comptes.': 'Zero errors before go-live, on all accounts.',
  'Le chantier de fond : monter une campagne sans saisie manuelle.': 'The foundational project: setting up a campaign without manual input.',
  // Production cards
  'Le récap de campagne, chaque jour': 'Daily campaign recap',
  'La marge dans les dashboards': 'Margin in the dashboards',
  'Correctif connecteur MCP Mobsuccess': 'Mobsuccess MCP connector fix',
  'Le rapport du matin, sans rien faire': 'The morning report, hands-free',
  'Le livrable 5 min qui convainc': 'The 5-min deliverable that convinces',
  'Looker : go pour les dashboards': 'Looker: go for dashboards',
  'ChatGPT Ads ouvre en France': 'ChatGPT Ads opens in France',
  'Le skill bilan pour toute l\'équipe': 'The wrap-up skill for the whole team',
  'Animation Pacer × Carrefour': 'Pacer × Carrefour animation',
  // Canal section
  "On embarque toute l'équipe": 'We bring the whole team on board',
  'Chacun monte en puissance': 'Everyone levels up',
  "De l'installation de Claude à l'ambassadeur qui forme les autres : on valorise chaque étape. Le parcours « Équipe Équipée », les trophées et les livrables de l'équipe.":
    "From installing Claude to the ambassador who trains others: we value every step. The 'Equipped Team' journey, trophies and team deliverables.",
  'Voir la progression AdOps →': 'View AdOps progress →',
  // Tests section
  'CR 28/07 — Sujets en cours': 'Update 28/07 — Topics in progress',
  '4 sujets': '4 topics',
  'Contrôle avant lancement': 'Pre-launch control',
  'Skill de mise en ligne testé': 'Go-live skill tested',
  'Dashboard + to-do chez Emeric': "Dashboard + to-do at Emeric's",
  'Bilan Excel → one pager client': 'Excel wrap-up → client one-pager',
};

/* ── ENGINE ─────────────────────────────────────────────────────────── */
let lang = 'fr';
const saved = new WeakMap(); // node → original textContent

function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

function applyLang(target) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(n) {
      const p = n.parentElement;
      if (!p || p.closest('script,style,pre,code,svg')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) {
    const raw = node.textContent;
    const key = norm(raw);
    if (!key) continue;
    if (target === 'en') {
      if (D[key] !== undefined) {
        if (!saved.has(node)) saved.set(node, raw);
        node.textContent = D[key];
      }
    } else {
      if (saved.has(node)) {
        node.textContent = saved.get(node);
      }
    }
  }
  document.documentElement.lang = target;
  const btn = document.getElementById('_lt');
  if (btn) btn.textContent = target === 'fr' ? 'EN' : 'FR';
}

function toggle() {
  lang = lang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('iadops-lang', lang);
  applyLang(lang);
}

function inject() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const btn = document.createElement('button');
  btn.id = '_lt';
  btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  btn.onclick = toggle;
  Object.assign(btn.style, {
    background: 'rgba(255,255,255,.12)',
    border: '1px solid rgba(255,255,255,.24)',
    color: '#fff',
    fontFamily: 'Jost,sans-serif',
    fontSize: '13px',
    fontWeight: '600',
    padding: '6px 15px',
    borderRadius: '999px',
    cursor: 'pointer',
    letterSpacing: '.04em',
    transition: 'background .15s',
    flexShrink: '0'
  });
  btn.onmouseenter = () => { btn.style.background = 'rgba(255,255,255,.22)'; };
  btn.onmouseleave = () => { btn.style.background = 'rgba(255,255,255,.12)'; };
  nav.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', function () {
  lang = localStorage.getItem('iadops-lang') || 'fr';
  inject();
  if (lang === 'en') applyLang('en');
});

})();
