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

  // ── progression.html — manquants ──────────────────────────────────────
  'Congé maternité': 'Maternity leave',
  "Le premier dashboard AdOps interactif, diffusé à l'équipe avec son tutoriel d'installation.":
    "The first interactive AdOps dashboard, shared with the team along with its installation tutorial.",

  // flip-trophy labels (sans emoji — le moteur les réinjecte automatiquement)
  'Mails': 'Emails',
  'Recherche': 'Research',
  'Recap': 'Recap',

  // ── actu.html — manquants ─────────────────────────────────────────────
  'Trois livrables en une semaine': 'Three deliverables in one week',
  'PUBLISHERS CATÉGORISÉS': 'CATEGORIZED PUBLISHERS',
  'Inclus (brand safe)': 'Included (brand safe)',
  'Exclus (jeux, contenu douteux)': 'Excluded (gaming, questionable content)',
  '✗ retirés': '✗ removed',
  'AVANTAGE': 'ADVANTAGE',
  "Whitelist d'inclusion → plus fiable qu'une blacklist réactive. Mise à jour mensuelle possible via tâche planifiée.":
    "Inclusion whitelist → more reliable than a reactive blacklist. Monthly update possible via scheduled task.",
  'CE QUE FAIT LE SKILL': 'WHAT THE SKILL DOES',
  'Détecte bilan vs point d\'étape': 'Detects wrap-up vs status update',
  'Pose les questions créa + logo': 'Asks the creative + logo questions',
  'Récupère les stats via MCP': 'Retrieves stats via MCP',
  'Contrôle la cohérence des chiffres': 'Checks the consistency of the figures',
  'Respecte la charte Mobsuccess': 'Follows the Mobsuccess charter',
  'NOUVEAU MODE CLAUDE DESIGN': 'NEW CLAUDE DESIGN MODE',
  "One-pagers Anis (Boulanger) et Célina (Botanic) également produits en ~10 min chacun le même jour.":
    "One-pagers for Anis (Boulanger) and Célina (Botanic) also produced in ~10 min each on the same day.",
  'Trophées AdOps': 'AdOps Trophies',
  "Skill · bilan & point d'étape": "Skill · wrap-up & status update",
  "Claude catégorise et trie les publishers RTB, écarte les inventaires douteux et tient à jour une whitelist d'inclusion. Plus fiable et plus rapide qu'une blacklist à courir après.":
    "Claude categorizes and sorts RTB publishers, filters out questionable inventory and keeps an inclusion whitelist up to date. More reliable and faster than a reactive blacklist.",
  "Claude analyse et note chaque publisher selon la brand safety — jeux, contenu douteux et inventaires à risque exclus.":
    "Claude analyzes and scores each publisher for brand safety — gaming, questionable content and risky inventory excluded.",
  "Ekaterina & Yannis publient la whitelist v08_26 — prête à être appliquée sur les comptes.":
    "Ekaterina & Yannis publish whitelist v08_26 — ready to be applied to accounts.",
  "Tâche planifiée Claude → actualisation mensuelle de la whitelist sans intervention manuelle.":
    "Scheduled Claude task → automatic monthly whitelist update with no manual intervention.",
  "Nicolas publie le skill « Bilan / Point d'étape » pour toute l'équipe. Il distingue automatiquement bilan (campagne terminée) et point d'étape (en cours), récupère les stats via les skills MCP et respecte la charte.":
    "Nicolas publishes the 'Wrap-up / Status Update' skill for the whole team. It automatically distinguishes wrap-up (completed campaign) from status update (in progress), retrieves stats via MCP skills and follows the charter.",

  // ── progression.html — bug flip-trophy ───────────────────────────────
  'Créateur skill': 'Skill creator',

  // ── optimisation.html — complet ──────────────────────────────────────
  'Optimisation · S2 2026': 'Optimization · H2 2026',
  'Mix de modèles': 'Model mix',
  '& calibrage': '& calibration',
  '129 000 requêtes analysées sur le S2. Qui sur-utilise Opus, qui pourrait basculer sur Haiku ? Un point par personne avec le conseil.':
    "129,000 requests analyzed over H2. Who's overusing Opus, who could switch to Haiku? A breakdown per person with guidance.",
  "Vue d'ensemble · 9 juin → 7 sept. 2026": 'Overview · Jun. 9 → Sep. 7, 2026',
  '14 AdOps · cumul S2': '14 AdOps · H2 cumulative',
  'requêtes totales': 'total requests',
  'coût net (partiel)': 'net cost (partial)',
  'Claude Design & sièges non comptés': 'Claude Design & seats not counted',
  'Sonnet — le bon défaut': 'Sonnet — the right default',
  'Opus — à surveiller': 'Opus — to watch',
  'MIX GLOBAL DES MODÈLES · S2 2026': 'GLOBAL MODEL MIX · H2 2026',
  "Le coût n'est pas exhaustif : Claude Design = 0 $ et une partie de Chat/Claude Code est incluse dans le siège. Se fier au mix de modèles plus qu'au coût.":
    "The cost is not exhaustive: Claude Design = $0 and part of Chat/Claude Code is included in the seat. Trust the model mix over the cost figure.",
  'Le guide du bon modèle': 'The right model guide',
  'Quel modèle pour quelle tâche': 'Which model for which task',
  'Le léger': 'The light one',
  'Tâches légères & répétitives : reformulation de mails, tri, extraction simple, réponses courtes.':
    'Light & repetitive tasks: email rewriting, sorting, simple extraction, short answers.',
  'Le défaut': 'The default',
  'Le défaut AdOps : rapport, bilan, analyse de perf, recap, recherche de data.':
    'The AdOps default: report, wrap-up, performance analysis, recap, data lookup.',
  'Le lourd': 'The heavy one',
  "Raisonnement lourd, refonte, gros multi-étapes, orchestration complexe d'outils.":
    'Heavy reasoning, redesign, large multi-step tasks, complex tool orchestration.',
  'Le créatif': 'The creative one',
  "Usages ultra-légers / créatifs très simples. Éviter pour l'analyse et le motion design.":
    'Ultra-light / very simple creative uses. Avoid for analysis and motion design.',
  'Par AdOps — mix de modèles, adéquation & conseil': 'Per AdOps — model mix, fit & guidance',
  '9 juin → 7 sept. 2026 · tendance août en bas de chaque carte':
    'Jun. 9 → Sep. 7, 2026 · August trend at the bottom of each card',
  "Trop d'Opus — réserve-le au raisonnement lourd, bascule le reste sur Sonnet.":
    'Too much Opus — save it for heavy reasoning, switch the rest to Sonnet.',
  "Adoption faible — peu de requêtes sur la période. Un accompagnement l'aiderait à embarquer.":
    'Low adoption — few requests over the period. Coaching would help onboarding.',
  'Zéro Haiku — passe les tâches légères (mails, tri, extraction) sur Haiku.':
    'Zero Haiku — switch light tasks (emails, sorting, extraction) to Haiku.',
  "Opus élevé — vérifie qu'il est bien réservé aux tâches complexes.":
    "Opus high — make sure it's really reserved for complex tasks.",
  'Haiku quasi nul — passe les tâches légères (mails, tri, extraction) sur Haiku.':
    'Near-zero Haiku — switch light tasks (emails, sorting, extraction) to Haiku.',
  'Bon calibrage — Sonnet par défaut, Opus mesuré.': 'Good calibration — Sonnet by default, measured Opus.',
  'La méthode équipe': 'The team method',
  'Fable en lead · Sonnet en sidekick': 'Fable as lead · Sonnet as sidekick',
  "Deux agents : lead (plan, ambiguïtés, revue finale) + sidekick moins cher (mécanique, volumineux). Le lead décide dynamiquement quand déléguer.":
    'Two agents: lead (plan, ambiguities, final review) + cheaper sidekick (mechanical, high-volume). The lead dynamically decides what to delegate.',
  'Config :': 'Config:',
  'Fable lead · Sonnet sidekick — surtout usages agentiques (Cowork, Claude Code)':
    'Fable lead · Sonnet sidekick — mainly agentic uses (Cowork, Claude Code)',
  'Laisse le lead arbitrer — il garde le jugement, délègue le volumineux/répétitif.':
    'Let the lead arbitrate — it keeps judgment, delegates high-volume/repetitive work.',
  'INSTRUCTION À COLLER DANS CLAUDE': 'INSTRUCTION TO PASTE INTO CLAUDE',
  'Copier': 'Copy',
  'Copié ✓': 'Copied ✓',

  // ── realisations.html — complet ──────────────────────────────────────
  'Les réalisations': 'Achievements',
  "Ce que les AdOps ont réellement produit avec Claude : bilans clients, reporting quotidien, analyses, cockpits — avec les gains de temps mesurés.":
    'What AdOps have actually produced with Claude: client wrap-ups, daily reporting, analyses, cockpits — with measured time savings.',
  '12 réalisations': '12 achievements',
  'Première': 'First',
  '5 min de review': '5 min review',
  'À la charte': 'On brand',
  '~10 min · devenu un skill': '~10 min · turned into a skill',
  "Skill partagé à l'équipe · 1er sept.": 'Skill shared with the team · Sept. 1',
  'Motion design · 1er sept.': 'Motion design · Sept. 1',
  "Point d'étape · Août 2026": 'Status update · Aug 2026',
  'Bilan intermédiaire · J7/14': 'Mid-campaign wrap-up · D7/14',
  "Le premier bilan de campagne 100 % produit par l'IA": 'The first campaign wrap-up 100% produced by AI',
  'Bilan intermédiaire B:BOT': 'Mid-campaign wrap-up B:BOT',
  'Convaincre son groupement avec les chiffres': 'Convincing your group with the numbers',
  "Bilan & Point d'étape — le skill de Nicolas": "Wrap-up & Status Update — Nicolas's skill",
  'Point d\'étape Drive to Store Botanic': 'Botanic Drive to Store Status Update',
  'Sourcing automatique via les connecteurs (Mobsuccess, Slack, Notion, Gmail) et les uploads créas/mesure de visites, mise en forme à la charte, export PDF. Restitution client faite, support approuvé à 100 %. Bonus : Claude a repéré dans Slack l\'usage de Pacer AI, absent du bilan manuel.':
    'Automatic sourcing via connectors (Mobsuccess, Slack, Notion, Gmail) and creative/visit measurement uploads, branded layout, PDF export. Client presentation done, deck approved 100%. Bonus: Claude spotted Pacer AI usage in Slack, missing from the manual wrap-up.',
  'PPTX complet généré depuis un Excel de stats, repassé à la charte. Brief d\'1 min, 2-3 phrases retouchées — contre une demi-journée de mise en page.':
    'Complete PPTX generated from a stats Excel, redesigned to brand. 1-min brief, 2-3 sentences touched up — vs. half a day of layout work.',
  'Passé via Claude Design : rendu à la charte, et base réutilisable pour décliner les activations suivantes (Été Acte 1).':
    'Run through Claude Design: rendered to brand, and a reusable base to roll out subsequent activations (Summer Act 1).',
  'Un bilan intermédiaire complet livré en trente minutes.': 'A complete mid-campaign wrap-up delivered in thirty minutes.',
  'Données ads (Meta, TikTok) et organique, charte importée depuis GitHub. Transformé en skill réutilisable : bilan complet en ~10 min, sans saisie manuelle.':
    'Ads data (Meta, TikTok) and organic, brand imported from GitHub. Turned into a reusable skill: complete wrap-up in ~10 min, no manual input.',
  "Les clientes Écouter Voir ne maîtrisent pas le digital et peinent à justifier l'investissement face à leurs directeurs de magasin. Stéphanie leur produit un one pager en fin de campagne : résultats chiffrés, dispositif local, recommandation claire. Exemple : Ouverture Luçon (85) — 2 248 €, 497 888 impressions, CTR interstitiel 3,17 %. Anis (Boulanger) et Célina (Botanic) ont adopté le format.":
    "Écouter Voir clients are unfamiliar with digital and struggle to justify investment to their store managers. Stéphanie produces a one-pager at campaign end: hard numbers, local setup, clear recommendation. Example: Luçon opening (85) — €2,248, 497,888 impressions, interstitial CTR 3.17%. Anis (Boulanger) and Célina (Botanic) adopted the format.",
  "Skill dispo à toute l'équipe : distingue automatiquement bilan (campagne terminée) et point d'étape (en cours), pose les questions créa + logo, récupère les stats via les MCP Mobsuccess et respecte la charte. Testé sur Botanic.":
    "Skill available to the whole team: automatically distinguishes wrap-up (completed campaign) from status update (in progress), asks creative + logo questions, retrieves stats via Mobsuccess MCP and follows the brand. Tested on Botanic.",
  "Fonctionnement de Pacer animé via Claude Design (mode Animation) : un .md en entrée → vidéo MP4 en quelques minutes. Produit pour l'appel d'offres Carrefour.":
    "How Pacer works, animated via Claude Design (Animation mode): a .md as input → MP4 video in a few minutes. Produced for the Carrefour pitch.",
  "22,3 M d'impressions · 169 000 clics · CTR 0,76 % · CPM 3,42 € — 77 magasins actifs, budget à 69,2 % à J12/14. Mis en page à la charte via le skill bilan.":
    "22.3M impressions · 169,000 clicks · CTR 0.76% · CPM €3.42 — 77 active stores, budget at 69.2% at D12/14. Laid out to brand via the wrap-up skill.",
  "1,4 M d'impressions · CTR Display 2,73 % · CPM 1,31 € sur 31 jours — Meta, Display & Snapchat. Format one pager produit à la charte, recommandation de reconduction incluse.":
    "1.4M impressions · Display CTR 2.73% · CPM €1.31 over 31 days — Meta, Display & Snapchat. One-pager format produced to brand, renewal recommendation included.",
  "8,43 M d'impressions · 17 397 clics · CPM 1,41 € — 233 magasins actifs sur 591, 5,9 M personnes touchées. Meta 100 %, Awareness vidéo Jordan enfant. Budget 39 % à mi-parcours.":
    "8.43M impressions · 17,397 clicks · CPM €1.41 — 233 active stores out of 591, 5.9M people reached. Meta 100%, children's Jordan awareness video. Budget 39% at mid-point.",
  "13,6 M d'impressions · 2,9 M de diffusions · CPM 22 € — 404 clubs RCBT, 347 villes, 206 agglomérations, 5 typologies de lieux (gyms, CC, mobilier urbain, métro, gares). 10 jours en 2 vagues.":
    "13.6M impressions · 2.9M broadcasts · CPM €22 — 404 RCBT clubs, 347 cities, 206 urban areas, 5 venue types (gyms, shopping centers, street furniture, metro, stations). 10 days in 2 waves.",
  'En routine sur les comptes': 'Routine on accounts',
  'Quotidien · en production': 'Daily · in production',
  'Standardisé · multi-comptes': 'Standardized · multi-account',
  'Automatisé': 'Automated',
  'Tâche planifiée · 6 août': 'Scheduled task · Aug 6',
  'Suivi annuel · 152 franchisés': 'Annual tracking · 152 franchisees',
  'Suivi annuel · 158 succursales · OTG': 'Annual tracking · 158 branches · OTG',
  'Le rapport Excel de campagne': 'Campaign Excel report',
  'Bilans et rapports Excel Intersport': 'Intersport Excel reports & wrap-ups',
  'Le récap de facturation': 'The billing recap',
  'Relance facturation automatisée': 'Automated billing follow-up',
  'Fil rouge annuel franchisés — Feu Vert': 'Annual franchise thread — Feu Vert',
  'Fil rouge annuel succursales — Feu Vert': 'Annual branch thread — Feu Vert',
  'Rapport multi-campagnes chaque jour : budget, impressions, livraison par levier, analyse rédigée. Publié dans Slack, avec HTML, PDF et dashboard live.':
    'Multi-campaign report every day: budget, impressions, delivery by channel, written analysis. Published in Slack, with HTML, PDF and live dashboard.',
  'Un Excel propre sorti du Dashboard en une phrase : global, par levier, par format, par magasin avec le budget planifié du Geo Planner. La première marche avant les bilans.':
    'A clean Excel extracted from the Dashboard in one sentence: overall, by channel, by format, by store with the planned budget from the Geo Planner. The first step before wrap-ups.',
  'Reprise de la chaîne rapport → bilan via Claude sur le compte.':
    'Rolling out the report → wrap-up chain via Claude on the account.',
  'Récap automatique des campagnes facturées, publié dans le canal facturation.':
    'Automatic recap of billed campaigns, published in the billing channel.',
  'Tâche planifiée Claude → Slack : détecte les campagnes terminées (+ lien rapport Excel) et les budgets sous-consommés (+ lien LCM). Critères réglables par personne, tourne seule.':
    'Scheduled Claude task → Slack: detects completed campaigns (+ Excel report link) and under-consumed budgets (+ LCM link). Adjustable criteria per person, runs on its own.',
  'Point conso au 11 sept. : 60 % de budget consommé (115,7 k€ / 192,7 k€), -9 pts vs 69 % du temps écoulé. Top 3 / Bottom 3 par magasin, CTR 0,35 %, CPM 1,81 €. Google PMAX, jan.→déc. 2026.':
    'Consumption update Sept. 11: 60% budget spent (€115.7k / €192.7k), -9 pts vs 69% of time elapsed. Top 3 / Bottom 3 by store, CTR 0.35%, CPM €1.81. Google PMAX, Jan.→Dec. 2026.',
  '76 % conso (108,7 k€ / 142,2 k€), -17 pts vs 93 % du temps écoulé. Alerte : 66/158 magasins en restriction OTG (22,8 k€ immobilisés). Sur les 96 qui diffusent normalement : 87 % de conso cumulée.':
    '76% consumption (€108.7k / €142.2k), -17 pts vs 93% of time elapsed. Alert: 66/158 stores under OTG restriction (€22.8k frozen). Of the 96 broadcasting normally: 87% cumulative consumption.',
  'Analyses, données & qualité': 'Analyses, data & quality',
  'Ce qui alimente la chaîne': 'What feeds the chain',
  'Brand safety · 31 août': 'Brand safety · Aug 31',
  'Matomo branché dans Claude': 'Matomo connected in Claude',
  'Le contrôle qualité avant lancement': 'Pre-launch quality control',
  'La mémoire Mobsuccess': 'The Mobsuccess memory',
  'Connexion API des stats Matomo à côté des stats campagnes : un seul outil pour tout lire, et des rapports Excel enrichis derrière.':
    'API connection for Matomo stats alongside campaign stats: a single tool to read everything, with enriched Excel reports behind it.',
  "Audit du set-up : OI, tracking, formats, geo planner, footfall, synchro DSP — avec une partie Meta approfondie.":
    'Set-up audit: IO, tracking, formats, geo planner, footfall, DSP sync — with an in-depth Meta section.',
  'Squad dédiée': 'Dedicated squad',
  "Knowledge Hub, mails d'équipe et Drives clients indexés, plus une mémoire par client : n'importe qui peut demander un doc à Claude.":
    "Knowledge Hub, team emails and client Drives indexed, plus a per-client memory: anyone can ask Claude for a document.",
  "Claude catégorise et trie les publishers, retire automatiquement les emplacements douteux et maintient une whitelist d'inclusion à jour — plus fiable qu'une blacklist à courir après.":
    "Claude categorizes and sorts publishers, automatically removes questionable placements and keeps an up-to-date inclusion whitelist — more reliable than a constantly-chased blacklist.",
  'Cockpits de pilotage': 'Steering cockpits',
  'Le premier écran du matin': 'The first screen of the morning',
  'Installé en 5 min': 'Set up in 5 min',
  'Le dashboard AdOps partagé': 'The shared AdOps dashboard',
  'Côté Leads': 'Leads side',
  'Le cockpit Leads Ops': 'The Leads Ops cockpit',
  "Suivi quotidien par client et par campagne, tendance 14 jours, CPM par format, recommandations, to-do du jour, journal d'optimisations, export Excel et vue client partageable en call. Diffusé à l'équipe avec son tutoriel : chacun installe sa copie.":
    "Daily tracking per client and per campaign, 14-day trend, CPM by format, recommendations, daily to-do, optimization log, Excel export and shareable client view for calls. Shared with the team along with its tutorial: each one installs their own copy.",
  "Comptes, équipe, budgets, campagnes en cours et à venir, charge par personne — avec des actions automatiques : rapport mi-campagne, récap Slack, brouillon d'email de fin de campagne.":
    "Accounts, team, budgets, ongoing and upcoming campaigns, workload per person — with automatic actions: mid-campaign report, Slack recap, end-of-campaign email draft.",
  'Outils & générateurs': 'Tools & generators',
  'Industrialiser la mise en ligne': 'Industrialize go-live',
  'Déployé en prod': 'Deployed in prod',
  "Ouvrir l'app ↗": 'Open the app ↗',
  "Application web qui génère les fichiers de bulk upload en un clic — wizard en 6 étapes, validation des champs, naming automatique. Deux générateurs disponibles : Snapchat Ads (Excel 111 colonnes) et Google Ads (CSV multi-formats). Développé avec Next.js, TypeScript et shadcn/ui.":
    "Web app that generates bulk upload files in one click — 6-step wizard, field validation, automatic naming. Two generators available: Snapchat Ads (111-column Excel) and Google Ads (multi-format CSV). Built with Next.js, TypeScript and shadcn/ui.",
  "Génère le fichier Excel natif Snapchat (111 colonnes) à partir d'un wizard structuré. Gestion complète des campagnes, ad sets et créatifs — avec intégration Zapier pour les insights post-campagne et vérification automatique du naming.":
    "Generates the native Snapchat Excel file (111 columns) from a structured wizard. Full management of campaigns, ad sets and creatives — with Zapier integration for post-campaign insights and automatic naming verification.",
  "Génère les fichiers CSV compatibles Google Ads Editor en 6 étapes guidées. Campagnes Performance Max, Demand Gen, Display — naming automatique par compte, marché et format, prêt à importer sans retouche manuelle.":
    "Generates Google Ads Editor-compatible CSV files in 6 guided steps. Performance Max, Demand Gen, Display campaigns — automatic naming by account, market and format, ready to import without manual adjustments.",
  'Cowork + Design · charte MS': 'Cowork + Design · MS brand',
  "Doc d'alignement set-up — Opé Picard × Havas": 'Set-up alignment doc — Op Picard × Havas',
  "Page partagée qui aligne tous les acteurs (Havas, Picard) sur le set-up de l'opération, signale les points en attente et bloquants, et intègre Katchr. Construite avec Cowork (scan de l'opé LCM) + le CSV des campagnes Google Ads (export Editor) + les URLs d'aperçus, mise à la charte via Claude Design.":
    "Shared page that aligns all stakeholders (Havas, Picard) on the operation set-up, flags pending and blocking points, and integrates Katchr. Built with Cowork (LCM op scan) + Google Ads campaigns CSV (Editor export) + preview URLs, branded via Claude Design.",
  'Animation, skills, squads': 'Animation, skills, squads',
  "On anime l'équipe": 'We animate the team',
  'le QG IA : veille, skills à installer, galères et wins.': 'the AI HQ: news, skills to install, struggles and wins.',
  'La veille du lundi': 'The Monday brief',
  'actus Claude et adtech, un cas d\'usage AdOps, une astuce de la semaine.':
    'Claude and adtech news, an AdOps use case, a tip of the week.',
  'Le point IA du weekly': 'The AI update at the weekly',
  'récurrent, avec l\'intervention des Ops.': 'recurring, with Ops contributions.',
  'On partage les skills': 'We share the skills',
  'Le diagnostic des connecteurs — vérifier que la machine est prête, puis installer les manques.':
    "The connector diagnostic — checking the machine is ready, then installing what's missing.",
  "L'autodiagnostic de skill — la grille qualité Mobsuccess avant tout partage.":
    'The skill self-diagnostic — the Mobsuccess quality grid before any sharing.',
  'Le rapport Excel et le contrôle qualité de campagne.': 'The Excel report and campaign quality control.',
  'Un dépôt commun de skills AdOps : on crée, on audite, on partage.':
    'A shared AdOps skill repository: we create, audit and share.',
  "On s'organise en squads": 'We organize into squads',
  'le pilotage global, lancé en mai 2026.': 'the global steering, launched in May 2026.',
  'Squad rapports & bilans': 'Reports & wrap-ups squad',
  'la chaîne rapport → bilan → bilan augmenté.': 'the report → wrap-up → enhanced wrap-up chain.',
  'audit avant lancement, récap de mise en ligne, suivi des optis.':
    'pre-launch audit, go-live recap, optimization tracking.',
  'Squad collaboratif': 'Collaborative squad',
  "l'espace Cowork partagé, testé sur Afflelou.": 'the shared Cowork space, tested on Afflelou.',
  'Les comptes embarqués': 'On-boarded accounts',
  '13 clients touchés par la chaîne IA': '13 clients reached by the AI chain',
  'Le double bénéfice, à chaque fois :': 'The double benefit, every time:',
  'du temps gagné, et un livrable de meilleure qualité — zéro faute, mise en page à la charte, contexte du compte enrichi automatiquement.':
    'time saved, and a higher-quality deliverable — zero errors, on-brand layout, account context enriched automatically.',

  // ── actu.html — édition 0 ────────────────────────────────────────────
  "Un dashboard perso, connecté au Dashboard Mobsuccess, qui devient le premier écran du matin : campagnes actives, alertes, to-do et actions en un clic. Objectif : un standard commun pour toute l'équipe.":
    "A personal dashboard, connected to the Mobsuccess Dashboard, that becomes the first screen of the morning: active campaigns, alerts, to-do and actions in one click. Goal: a shared standard for the whole team.",
  "Son dashboard présenté à l'équipe, avec tutoriel d'installation partagé.":
    'His dashboard presented to the team, with the installation tutorial shared.',
  "Base commune (le prompt d'Emeric) que chacun adapte à son scope et ses comptes.":
    "Common base (Emeric's prompt) that each person adapts to their scope and accounts.",
  'jeu. 30 juil. · présentations au weekly': 'Thu. July 30 · weekly presentations',
  "On assemble le best-of de tous les cockpits en un standard pour toute l'équipe.":
    'We assemble the best of all cockpits into a standard for the whole team.',
  'jeu. 6 août · le best-of': 'Thu. Aug. 6 · the best-of',
  "Dashboard AdOps — vue d'ensemble": 'AdOps Dashboard — overview',
  'Budget suivi': 'Tracked budget',
  'CTR moyen': 'Avg. CTR',
  'Campagnes actives': 'Active campaigns',
  'CAMPAGNES ACTIVES': 'ACTIVE CAMPAIGNS',
  'TO-DO DU JOUR': "TODAY'S TO-DO",
  'Vérifier délivrabilité Weldom': 'Check Weldom delivery',
  'Optimiser CTR Carrefour': 'Optimize Carrefour CTR',
  'Récap client Decathlon': 'Decathlon client recap',
  'ALERTES & RECOS': 'ALERTS & RECOMMENDATIONS',
  '2 magasins sans diffusion (Carrefour)': '2 stores with no delivery (Carrefour)',
  'Budget Google sous-consommé': 'Underspent Google budget',
  'Générer le rapport': 'Generate report',
  'Vue client (call)': 'Client view (call)',
  'Trois usages concrets': 'Three concrete use cases',
  'QA · récap quotidien': 'QA · daily recap',
  'Généré par Claude depuis le Dashboard Mobsuccess et': 'Generated by Claude from the Mobsuccess Dashboard and',
  'posté automatiquement dans le canal Slack du client': "automatically posted in the client's Slack channel",
  '. Déjà en place sur des comptes pilotes → bientôt étendu à': '. Already live on pilot accounts → soon extended to',
  'tous les clients': 'all clients',
  'Rapport & bilan augmenté': 'Report & enhanced wrap-up',
  'Le bilan client, augmenté par le contexte': 'The client wrap-up, enriched with context',
  "Le rapport factuel devient un bilan enrichi du contexte du compte (Slack, Notion, historique). Exemple : Hespéride, vague 2 (Drive-to-Store).":
    'The factual report becomes a wrap-up enriched with account context (Slack, Notion, history). Example: Hespéride, wave 2 (Drive-to-Store).',
  'Clics': 'Clicks',
  'Bilan Hespéride (PDF)': 'Hespéride wrap-up (PDF)',
  'One pager · conviction client': 'One-pager · client conviction',
  'Le one pager qui convainc les groupements': 'The one-pager that convinces retail groups',
  "Les clientes Écouter Voir ne sont pas calées en digital et se font malmener par leurs directeurs de magasin. Stéphanie leur produit un one pager en fin de campagne pour les aider à défendre l'investissement digital auprès de leur groupement.":
    "Écouter Voir clients are not digital-savvy and get pushed around by their store managers. Stéphanie produces a one-pager at campaign end to help them defend the digital investment to their retail group.",
  'Bilan de campagne': 'Campaign wrap-up',
  'PÉRIODE': 'PERIOD',
  'MAGASIN': 'STORE',
  'BUDGET INVESTI': 'INVESTED BUDGET',
  'CLICS': 'CLICKS',
  'CTR GLOBAL': 'OVERALL CTR',
  'CPM MOYEN': 'AVG. CPM',
  'Une couverture locale forte autour du magasin': 'Strong local reach around the store',
  'personnes exposées': 'people reached',
  'répétition': 'frequency',
  'Un engagement au-dessus de la moyenne': 'Above-average engagement',
  'CTR Interstitiel': 'Interstitial CTR',
  'Interstitiel': 'Interstitial',
  'Meta Vidéo': 'Meta Video',
  'Bannière': 'Banner',
  'Un budget investi efficacement': 'An effectively invested budget',
  'budget total': 'total budget',
  'CPM moyen': 'Avg. CPM',
  'CPC moyen': 'Avg. CPC',
  'durée': 'duration',
  'NOTRE RECOMMANDATION': 'OUR RECOMMENDATION',
  'Réalisé par Mobsuccess': 'Produced by Mobsuccess',
  'Bilan Écouter Voir — Luçon (PDF)': 'Écouter Voir wrap-up — Luçon (PDF)',
  "Chaque AdOps construit son dashboard perso à partir de la base d'Emeric, l'adapte à son scope, puis le présente au weekly. Le best-of deviendra le standard de l'équipe.":
    "Each AdOps builds their personal dashboard from Emeric's base, adapts it to their scope, then presents it at the weekly. The best-of will become the team standard.",
  'Présentations au weekly': 'Weekly presentations',
  'Dashboard standardisé': 'Standardized dashboard',
  'Stress-tester le skill QA sur d\'autres leviers et campagnes — montrer un exemple de rendu au prochain point.':
    'Stress-test the QA skill on other channels and campaigns — show a render example at the next update.',
  'Synchro, leviers, formats, créas, tracking et geoplanner — rendu en Slack canevas. Prochain chantier : rapport quotidien avec tâche programmée.':
    'Sync, channels, formats, creatives, tracking and geoplanner — output as Slack canvas. Next project: daily report with scheduled task.',
  "Optis historisées dans le dashboard, Claude propose aussi des améliorations. Prochaine étape : comparer avec les skills AdOps de Chris (lecture de log…).":
    "Optimizations logged in the dashboard, Claude also suggests improvements. Next step: compare with Chris's AdOps skills (log reading…).",
  'Bilan produit via Claude, quelques ajustements KPIs, puis retravail dans Claude Design avec les créas. Simplifier la procédure de récupération des visuels.':
    'Wrap-up produced via Claude, a few KPI adjustments, then rework in Claude Design with creatives. Simplify the visual retrieval process.',
  'Audit': 'Audit',
  'Optis': 'Optis',

  // ── actu.html — édition 1 ────────────────────────────────────────────
  "Chaque AdOps a présenté son cockpit au weekly du 30 juillet. Noura ouvre le Drive « COCKPITS ADOPS » pour assembler le best-of en un dashboard standardisé pour toute l'équipe.":
    'Each AdOps presented their cockpit at the July 30 weekly. Noura opens the "COCKPITS ADOPS" Drive folder to assemble the best-of into a standardized dashboard for the whole team.',
  'Weekly 30 juil. — démos en live': 'Weekly July 30 — live demos',
  'Chaque AdOps présente son cockpit perso (1 min). Le chantier du dashboard unifié est lancé.':
    'Each AdOps presents their personal cockpit (1 min). The unified dashboard project is launched.',
  'Drive « COCKPITS ADOPS » ouvert': '"COCKPITS ADOPS" Drive folder opened',
  "Noura crée le dossier de dépôt (HTML + notice). Deadline : 5 août. Noura & Ghofrane assemblent le best-of.":
    'Noura creates the upload folder (HTML + notes). Deadline: Aug. 5. Noura & Ghofrane assemble the best-of.',
  'Dashboard standardisé — le best-of': 'Standardized dashboard — the best-of',
  "Assemblage du meilleur de chaque cockpit en un standard unique pour l'équipe, avec layer d'actions auto.":
    'Assembly of the best of each cockpit into a single team standard, with an auto-action layer.',
  'COCKPITS DÉPOSÉS': 'SUBMITTED COCKPITS',
  'dashboard-emeric.html · référence': 'dashboard-emeric.html · reference',
  'Best-of unifié': 'Unified best-of',
  'assemblage en cours · Noura & Ghofrane': 'assembly in progress · Noura & Ghofrane',
  'Deux nouveaux usages': 'Two new use cases',
  'Pilotage · marge en temps réel': 'Steering · real-time margin',
  "Olivier découvre que le KPI buying_cost est lisible via Claude. Résultat : marge = spend − buying_cost directement dans les cockpits perso. Plus besoin d'aller chercher la donnée ailleurs.":
    "Olivier discovers that the buying_cost KPI is readable via Claude. Result: margin = spend − buying_cost directly in personal cockpits. No need to go look for the data elsewhere.",
  'en direct': 'live',
  'Prochaine étape : intégrer les fees mesure dans le calcul.': 'Next step: integrate measurement fees into the calculation.',
  'Connecteur · correctif MCP': 'Connector · MCP fix',
  "Le connecteur MCP Mobsuccess est mis à jour le 6 août, en même temps que le lancement de la tâche planifiée d'Ekaterina. Un point de fiabilité clé pour les skills qui lisent les données de campagne.":
    "The Mobsuccess MCP connector is updated on August 6, at the same time as Ekaterina's scheduled task launch. A key reliability fix for skills that read campaign data.",

  // ── actu.html — édition 2 ────────────────────────────────────────────
  "Un bouton sur le board Monday appelle un agent Mobsuccess qui lit la ligne, rédige le brief complet et le pousse directement sur le LCM. Zéro saisie manuelle, brief standardisé en quelques secondes.":
    'A button on the Monday board calls a Mobsuccess agent that reads the row, writes the full brief and pushes it directly to the LCM. Zero manual input, standardized brief in a few seconds.',
  'Steph, Yannis, Anis + AdContent embarquent sur le chantier brief auto.':
    'Steph, Yannis, Anis + AdContent join the auto-brief project.',
  'Monday supporte désormais les agents natifs. Testé avec Mobanksy : bouton → agent → brief complet → push LCM. Ça marche.':
    'Monday now supports native agents. Tested with Mobanksy: button → agent → full brief → LCM push. It works.',
  "Implémentation de l'agent sur le board Monday de production, connexion LCM.":
    'Implementation of the agent on the production Monday board, LCM connection.',
  'Début sept. · à venir': 'Early Sept. · upcoming',
  'LIGNE MONDAY': 'MONDAY ROW',
  'Client': 'Client',
  'Format': 'Format',
  'Objectif': 'Objective',
  'Agent Mobsuccess': 'Mobsuccess Agent',
  'BRIEF GÉNÉRÉ': 'GENERATED BRIEF',
  "Campagne Drive-to-Store pour Carrefour BIO — dispositif local autour des points de vente. Mettre en avant le rayon BIO accessible, ton chaleureux et naturel. Format interstitiel plein écran, CTA « Découvrir le magasin ».":
    'Drive-to-Store campaign for Carrefour BIO — local media around points of sale. Highlight the accessible BIO aisle, warm and natural tone. Full-screen interstitial format, CTA "Discover the store".',
  'Tâche programmée · rapport matinal': 'Scheduled task · morning report',
  "Chaque matin, une tâche Claude programmée envoie un DM Slack à Ekaterina avec les campagnes terminées la veille, un lien vers le rapport Excel, et la liste des campagnes en sous-dépense avec leur lien LCM direct.":
    "Every morning, a scheduled Claude task sends a Slack DM to Ekaterina with campaigns that ended the previous day, a link to the Excel report, and the list of underspending campaigns with their direct LCM link.",
  '1-pager livrable · méthode équipe': 'Deliverable 1-pager · team method',
  "Nicolas pousse l'équipe à créer des templates de livrables — des 1-pagers comme le test Botanic de Célina — réalisables en 5 à 10 min via Claude Design avec la charte Mobsuccess. La méthode Nicolas pour standardiser les rendus équipe.":
    "Nicolas encourages the team to create deliverable templates — 1-pagers like Célina's Botanic test — achievable in 5 to 10 min via Claude Design with the Mobsuccess charter. Nicolas's method to standardize team outputs.",
  'Test livrable': 'Test deliverable',
  'Bilan campagne': 'Campaign wrap-up',
  'Claude Design + charte MS · ~5 min': 'Claude Design + MS charter · ~5 min',
  'DURÉE': 'DURATION',
  'FORMAT': 'FORMAT',

  // ── actu.html — édition 3 ────────────────────────────────────────────
  "Claude dans Chrome devient une session Cowork à part entière : skills, connecteurs et historique directement dans le navigateur. La barrière des outils sans API (DSP, portails partenaires) tombe.":
    'Claude in Chrome becomes a full Cowork session: skills, connectors and history directly in the browser. The barrier of API-less tools (DSP, partner portals) is lifted.',
  'Claude dans Chrome = session Cowork': 'Claude in Chrome = Cowork session',
  'Skills, connecteurs et historique disponibles dans le navigateur — plus besoin de basculer entre Claude Code et le portail.':
    'Skills, connectors and history available in the browser — no more switching between Claude Code and the portal.',
  'Outils sans connecteur débloqués': 'Connector-free tools unlocked',
  'DSP, portails partenaires, interfaces sans MCP dédié : Claude peut cliquer et remplir directement. À généraliser sur tous les portails.':
    'DSP, partner portals, interfaces without a dedicated MCP: Claude can click and fill in directly. To be rolled out to all portals.',
  'Généralisation sur tous les portails': 'Rollout to all portals',
  "Documenter les parcours DSP + portails partenaires pour en faire des skills réutilisables par l'équipe.":
    "Document DSP + partner portal workflows to turn them into reusable skills for the team.",
  'À venir': 'Coming soon',
  'COWORK ACTIF': 'ACTIVE COWORK',
  'Historique': 'History',
  'PORTAILS DÉBLOQUÉS': 'UNLOCKED PORTALS',
  'Portails partenaires': 'Partner portals',
  'Interfaces sans MCP': 'Interfaces without MCP',
  'Deux avancées majeures': 'Two major advances',
  'Looker · feu vert': 'Looker · green light',
  "Le point Looker du 20 août aboutit à un feu vert. Les dashboards de reporting peuvent désormais s'appuyer sur Looker comme couche de visualisation, en complément des cockpits Claude.":
    'The Looker meeting of August 20 results in a green light. Reporting dashboards can now rely on Looker as a visualization layer, complementing Claude cockpits.',
  'Feu vert Looker': 'Looker green light',
  'Dashboards validés · intégration en cours': 'Dashboards validated · integration in progress',
  'Nouveau levier · ChatGPT Ads': 'New channel · ChatGPT Ads',
  "OpenAI ouvre ChatGPT Ads à la France (+31 pays EU) le 24 août. Ciblage par intention conversationnelle — un levier inédit à intégrer aux recos client dès maintenant.":
    'OpenAI opens ChatGPT Ads to France (+31 EU countries) on August 24. Conversational intent targeting — a new channel to include in client recommendations now.',
  'NOUVEAU LEVIER': 'NEW CHANNEL',
  'Ciblage par intention conversationnelle · disponible en France depuis le 24/08':
    'Conversational intent targeting · available in France since 24/08',
  'À intégrer aux recos': 'To add to recommendations',

  // ── actu.html — édition 4 (fragments) ───────────────────────────────
  'Claude Design · motion design': 'Claude Design · motion design',
  'Testé sur Botanic (1/09).': 'Tested on Botanic (Sept. 1).',
  "Nicolas exploite le nouveau mode « Animation » de Claude Design : un": 'Nicolas leverages the new "Animation" mode of Claude Design: a',
  "en entrée → une vidéo MP4 en quelques minutes. Premier cas d'usage :": 'as input → a MP4 video in a few minutes. First use case:',
  'animation du fonctionnement de Pacer AI sur Carrefour': 'animation of how Pacer AI works on Carrefour',
  "pour l'appel d'offres.": 'for the pitch.',
  'Fichier .md': '.md file',
  'Vidéo MP4': 'MP4 video',

  // ── actu.html — messages canal Slack (toutes éditions) ───────────────
  "le canal IA de l'équipe · créé le 22/07": "the team's AI channel · created 22/07",
  '· lun. 10:14': '· Mon. 10:14',
  'Veille IA adops — semaine du 27 juil.': 'AI AdOps brief — week of July 27',
  'Claude apprend vos process en vous regardant faire (écran → skill réutilisable)':
    'Claude learns your processes by watching you work (screen → reusable skill)',
  "Google Ads étiquette les pubs générées par IA (avant l'AI Act, 2 août)":
    'Google Ads labels AI-generated ads (ahead of AI Act, Aug. 2)',
  'Reporting & détection d\'anomalies automatisés : coût/conversion −20 à −30 %':
    'Automated reporting & anomaly detection: cost/conversion −20 to −30%',
  "OpenAI ouvre GPT-5.6 — un milieu de gamme aussi bon pour moitié prix":
    'OpenAI opens GPT-5.6 — a mid-range option just as good for half the price',
  'Astuce de la semaine :': 'Tip of the week:',
  '· 2ᵉ skill de la semaine': '· 2nd skill of the week',
  "Audite n'importe quel skill selon la grille officielle Mobsuccess (13 critères) et affiche un diagnostic + des correctifs. Idéal en duo avec":
    'Audits any skill against the official Mobsuccess grid (13 criteria) and displays a diagnostic + fixes. Ideal paired with',
  '· retour d\'expérience': '· experience sharing',
  'Bilan Point P × Havas × Widely, fait avec Claude Cowork':
    'Point P × Havas × Widely wrap-up, done with Claude Cowork',
  "Bilan PPTX généré depuis un Excel de stats. Brief d'1 min, relecture en ~5 min — contre une demi-journée habituellement.":
    'PPTX wrap-up generated from a stats Excel. 1-min brief, ~5 min review — vs. half a day usually.',
  'semaine du 3 août': 'week of Aug. 3',
  '· lun. 3 août · 10:09': '· Mon. Aug. 3 · 10:09',
  'Veille IA adops — semaine du 3 août': 'AI AdOps brief — week of Aug. 3',
  'Claude Cowork disponible en solo — mode de travail profond sur un projet':
    'Claude Cowork available solo — deep work mode on a project',
  'Anthropic ouvre les tâches planifiées en beta — automatiser sans coder':
    'Anthropic opens scheduled tasks in beta — automate without coding',
  'Google étiquette enfin les créas IA dans Google Ads (conformité AI Act)':
    'Google finally labels AI creatives in Google Ads (AI Act compliance)',
  'Meta AI dépasse 1 milliard d\'utilisateurs actifs': 'Meta AI surpasses 1 billion active users',
  '· mar. 5 août': '· Tue. Aug. 5',
  'Marge dans les cockpits — buying_cost via Claude': 'Margin in cockpits — buying_cost via Claude',
  "J'ai trouvé comment accéder au": 'I found how to access',
  'via Claude → on peut afficher la marge directement dans nos dashboards. Restent les fees mesure à intégrer.':
    'via Claude → we can display margin directly in our dashboards. Measurement fees still to integrate.',
  'semaine du 11 août': 'week of Aug. 11',
  '· lun. 11 août · 10:05': '· Mon. Aug. 11 · 10:05',
  'Veille IA adops — semaine du 11 août': 'AI AdOps brief — week of Aug. 11',
  'Claude dans Chrome = Cowork natif dans le navigateur — skills + connecteurs + historique':
    'Claude in Chrome = native Cowork in the browser — skills + connectors + history',
  "Anthropic lève 3,5 Mds $ (valorisation 60 Mds) — l'entreprise IA la mieux financée":
    'Anthropic raises $3.5B (valuation $60B) — the best-funded AI company',
  'Meta lance Movie Gen : génération vidéo pro directement depuis l\'interface Ads':
    'Meta launches Movie Gen: professional video generation directly from the Ads interface',
  'Filigrane invisible sur les images IA (conformité AI Act en vue)':
    'Invisible watermark on AI images (AI Act compliance ahead)',
  '· mer. 6 août': '· Wed. Aug. 6',
  'Tâche programmée — rapport matinal automatique': 'Scheduled task — automatic morning report',
  "J'ai mis en place une tâche Claude qui m'envoie chaque matin les campagnes terminées + lien Excel + campagnes en sous-dépense. Plus besoin d'aller chercher l'info.":
    "I set up a Claude task that sends me every morning the completed campaigns + Excel link + underspending campaigns. No more hunting for the info.",
  '· dim. 24 août': '· Sun. Aug. 24',
  'Templates livrables — méthode équipe': 'Deliverable templates — team method',
  "Je vous encourage tous à créer votre template de livrable client type (1-pager comme le test Botanic de Célina). 5-10 min avec Claude Design + charte MS. On partage en équipe pour standardiser nos rendus.":
    "I encourage everyone to create their own client deliverable template (1-pager like Célina's Botanic test). 5-10 min with Claude Design + MS charter. We share as a team to standardize our outputs.",
  'semaine du 24 août': 'week of Aug. 24',
  '· lun. 24 août · 10:08': '· Mon. Aug. 24 · 10:08',
  'Veille IA adops — semaine du 24 août': 'AI AdOps brief — week of Aug. 24',
  "ChatGPT Ads ouvre en France (+31 pays EU) — ciblage par intention conversationnelle à intégrer aux recos":
    'ChatGPT Ads opens in France (+31 EU countries) — conversational intent targeting to add to recommendations',
  'Looker feu vert : dashboards de reporting validés pour le cockpit':
    'Looker green light: reporting dashboards validated for the cockpit',
  'Brief créa auto validé avec Mobanksy — pipeline Monday → LCM fonctionnel':
    'Auto creative brief validated with Mobanksy — Monday → LCM pipeline working',
  'Google Ads : les enchères à cible (CPA / ROAS) changent de nom — rien ne change en pratique':
    'Google Ads: target bidding (CPA / ROAS) is being renamed — nothing changes in practice',
  'Templates livrables — faisabilité confirmée': 'Deliverable templates — feasibility confirmed',
  "Brief créa auto validé avec Mobanksy : bouton Monday → agent → brief LCM. Je vous encourage à créer vos templates livrables client (1-pager type Botanic). 5-10 min avec Claude Design + charte MS.":
    'Auto creative brief validated with Mobanksy: Monday button → agent → LCM brief. I encourage you to create your client deliverable templates (1-pager Botanic type). 5-10 min with Claude Design + MS charter.',
  'semaine du 1er sept.': 'week of Sept. 1',
  '· lun. 1 sept. · 10:12': '· Mon. Sept. 1 · 10:12',
  'Veille IA adops — semaine du 1er sept.': 'AI AdOps brief — week of Sept. 1',
  'Claude Design lance le mode Animation : .md → vidéo MP4 en quelques minutes':
    'Claude Design launches Animation mode: .md → MP4 video in a few minutes',
  'ChatGPT Ads désormais actif en France — premier levier conversationnel à cibler':
    'ChatGPT Ads now active in France — first conversational channel to target',
  "Fable 5.1 — nouveau modèle Anthropic spécialisé agentique, en tête d'Agent Arena":
    'Fable 5.1 — new Anthropic model specialized for agentic work, top of Agent Arena',
  'AI Act : filigrane obligatoire sur les images IA dès le 15/09 — à anticiper sur nos créas':
    'AI Act: mandatory watermark on AI images from 15/09 — to anticipate on our creatives',
  '· dim. 31 août': '· Sun. Aug. 31',
  'Whitelist IA de placement publiée — Whiteliste_08_26':
    'AI publisher whitelist published — Whiteliste_08_26',
  "Avec Yannis, on a produit la whitelist IA des publishers RTB. Claude catégorise, retire les jeux douteux, tient la liste à jour. Disponible pour tous les comptes.":
    "With Yannis, we produced the AI whitelist of RTB publishers. Claude categorizes, removes questionable content, keeps the list up to date. Available for all accounts.",
  '· lun. 1 sept.': '· Mon. Sept. 1',
  "Skill bilan / point d'étape — dispo pour toute l'équipe":
    'Wrap-up / status update skill — available for the whole team',
  "Le skill est disponible dans votre Claude. Testé sur Botanic avec Célina. Si vous avez un bilan à faire, c'est le moment de l'essayer !":
    "The skill is available in your Claude. Tested on Botanic with Célina. If you have a wrap-up to do, now's the time to try it!",

  // ── actu.html — éditions 5 & 6 (7 sept / 14 sept) ────────────────────
  'Les productions de la semaine': 'The week's productions',
  "Doc d'alignement Picard × Havas": 'Picard × Havas alignment doc',
  "Page (Cowork + Design) qui aligne tous les acteurs sur le set-up, signale les points en attente/bloquants et intègre Katchr. Scan de l'opé LCM + CSV Google Ads + URLs d'aperçus.":
    'Page (Cowork + Design) that aligns all stakeholders on the setup, flags pending/blocking points and integrates Katchr. LCM op scan + Google Ads CSV + preview URLs.',
  'Suivi budget Feu Vert': 'Feu Vert budget tracking',
  "Mini one-pagers de conso budget vs temps écoulé sur un fil rouge annuel (restrictions Google) — synthétique et partageable, ~15 min.":
    'Mini one-pagers of budget spend vs. time elapsed on an annual ongoing account (Google restrictions) — concise and shareable, ~15 min.',
  'One-pager + données Vistar (DOOH)': 'One-pager + Vistar data (DOOH)',
  "Le skill one-pager avec récupération des données Vistar désormais accessibles dans Claude. Waël l'a aussi testé sur un bilan intermédiaire ITS.":
    'The one-pager skill with Vistar data retrieval now accessible in Claude. Waël also tested it on an ITS mid-campaign summary.',
  "Un onglet qui analyse l'usage de chacun (outils utilisés, % par modèle) avec une reco perso, et une piste d'optimisation des tokens (Fable en lead / Sonnet en sidekick, élaborée avec Ahmat) à tester.":
    "A tab that analyzes each person's usage (tools used, % by model) with a personal recommendation, and a token optimization approach (Fable as lead / Sonnet as sidekick, developed with Ahmat) to test.",

  // édition 6 — 14 sept
  'MAM, le hub de gestion de campagnes': 'MAM, the campaign management hub',
  'MAM — la gestion de campagnes centralisée': 'MAM — centralized campaign management',
  "Un hub complet de pilotage des campagnes, construit par Yannis. Présenté au Meetup Ops (16/09) — très bien reçu, avec une session dédiée au feedback et aux idées — puis au Comité Innovation devant la direction : jugé « no-brainer, il faut avancer ».":
    "A complete campaign management hub built by Yannis. Presented at the Ops Meetup (16/09) — very well received, with a dedicated session for feedback and ideas — then at the Innovation Committee in front of management: deemed \"no-brainer, let's move forward\".",
  'Dashboard Boulanger (calls hebdo)': 'Boulanger dashboard (weekly calls)',
  "Remplace un Looker devenu lourd à maintenir : vue d'ensemble des perfs par campagne (CTR & CPM/jour à la demande cliente) + un onglet de comparaison de deux campagnes. Support des points hebdo.":
    'Replaces a Looker instance that became heavy to maintain: performance overview by campaign (CTR & CPM/day on client request) + a two-campaign comparison tab. Supports weekly check-ins.',
  'Suivi Google Ads (Intersport, Afflelou, Feu Vert)': 'Google Ads tracking (Intersport, Afflelou, Feu Vert)',
  'Récupère auto les infos Google Ads + LCM, compare les deux, alerte si dates divergentes ou campagne manquante côté Google, indique trend & perfs, actualisation horaire. Remplace le suivi Google Sheet manuel.':
    'Auto-fetches Google Ads + LCM data, compares both, alerts on divergent dates or missing Google campaigns, shows trend & performance, hourly refresh. Replaces the manual Google Sheet tracking.',
  'Génère les CSV bulk Google Ads Editor pour les PMax multi-magasins (formats, limites de caractères, budget calculé sur le non-margé), testé Maroc (23 magasins) & Belgique (4). En complément du nouveau module LCM PMax.':
    'Generates bulk Google Ads Editor CSV files for multi-store PMax (formats, character limits, budget calculated on non-margined), tested Morocco (23 stores) & Belgium (4). Complements the new LCM PMax module.',
  'Le design system dans Claude Design': 'The design system in Claude Design',
  "Depuis un brand book / des présentations → design system hébergé sur GitHub via Cowork → appelé dans Claude Design pour des rendus fidèles. Test en cours sur la charte MS pour l'AO Carrefour.":
    'From a brand book / presentations → design system hosted on GitHub via Cowork → called in Claude Design for faithful rendering. Currently testing with the MS charter for the Carrefour AO.',
  "L'IA essaime aux autres équipes": 'AI spreads to other teams',
  "La méthode AdOps s'étend : Paid Media Content (récup auto des créas, dont LinkedIn Ads), Conseil Newbiz (pédagogie IA) et Farly (cockpit de suivi + gamification). Sessions animées par Nico & Yannis.":
    'The AdOps method expands: Paid Media Content (auto creative retrieval, incl. LinkedIn Ads), Conseil Newbiz (AI training) and Farly (tracking cockpit + gamification). Sessions led by Nico & Yannis.',
  'Vistar (DOOH) & setup ZIP': 'Vistar (DOOH) & ZIP setup',
  "Connecteur MCP Vistar (DOOH) branché pour toute l'équipe en lecture seule, et setup ZIP Intersport avec un outil de vérification des remontées d'infos — à déployer client par client avec les leads.":
    'MCP Vistar (DOOH) connector connected for the whole team in read-only, and Intersport ZIP setup with a data verification tool — to deploy client by client with leads.',
  'Claude Design mieux intégré': 'Claude Design better integrated',
  "Design tourne désormais dans la conversation, sans ouvrir de fenêtre à part — plus fluide pour passer un livrable à la charte.":
    'Design now runs inside the conversation, without opening a separate window — smoother for styling a deliverable to the brand guidelines.',
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
      let translated = D[key];
      let prefix = '';
      if (translated === undefined) {
        // Handle emoji-prefixed text: "🚀 Installé" → prefix="🚀 ", rest="Installé"
        const sp = key.indexOf(' ');
        if (sp > 0 && sp <= 8 && !/[a-zA-ZÀ-ɏ]/.test(key.slice(0, sp))) {
          prefix = key.slice(0, sp + 1);
          translated = D[key.slice(sp + 1)];
        }
      }
      if (translated !== undefined) {
        if (!saved.has(node)) saved.set(node, raw);
        node.textContent = prefix + translated;
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
