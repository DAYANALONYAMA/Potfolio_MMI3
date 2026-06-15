/*
═══════════════════════════════════════════════════════════════════════════
  🎬 PROJETS DE DAYANA
═══════════════════════════════════════════════════════════════════════════

  ⚠️ À LIRE EN PREMIER

  Les projets ci-dessous sont rédigés à partir de ton CV. Tu dois :
    ✓ Vérifier les contextes et missions
    ✓ Compléter les [À COMPLÉTER] avec tes vrais chiffres
    ✓ Adapter les projets "cours" avec tes vrais sujets
    ✓ Remplacer le projet personnel par un vrai projet à toi
    ✓ Ajouter tes images, vidéos, et LIENS (Drive / LinkedIn)


  ┌────────────────────────────────────────────────────────────────┐
  │  LES 3 CATÉGORIES (orthographe exacte)                          │
  ├────────────────────────────────────────────────────────────────┤
  │  "alternance"  → AÉSIO, CPAM                                     │
  │  "cours"       → projet tutoré, études UX                        │
  │  "personnel"   → projets perso, freelance                       │
  └────────────────────────────────────────────────────────────────┘


  ┌────────────────────────────────────────────────────────────────┐
  │  IMAGE & VIDÉO (l'aperçu de la carte)                           │
  ├────────────────────────────────────────────────────────────────┤
  │  image:       "assets/images/projet-1.jpg"  (obligatoire)       │
  │  videoHover:  "assets/videos/projet-1.mp4"  (optionnel, muet)   │
  │               → joue en boucle SANS SON au survol = teaser      │
  │               → laisse "" si pas de vidéo                       │
  └────────────────────────────────────────────────────────────────┘


  ┌────────────────────────────────────────────────────────────────┐
  │  🔗 LIENS (le visionnage COMPLET avec le son)                   │
  ├────────────────────────────────────────────────────────────────┤
  │  Ajoute autant de liens que tu veux. Ils apparaissent comme     │
  │  des boutons dans la fiche détaillée du projet.                 │
  │                                                                  │
  │  Exemples de "label" : "Voir la vidéo", "Voir sur LinkedIn",    │
  │  "Regarder sur Drive", "Voir le projet", "Étude de cas"…        │
  │                                                                  │
  │  liens: [                                                        │
  │    { label: "Voir la vidéo complète", url: "https://..." },     │
  │    { label: "Voir sur LinkedIn", url: "https://..." }           │
  │  ]                                                               │
  │                                                                  │
  │  → Si pas de lien, mets : liens: []                             │
  │                                                                  │
  │  ⚠️ DRIVE : règle le partage sur "Tous les utilisateurs         │
  │     disposant du lien" sinon les profs/RH auront une demande    │
  │     d'accès. Pour copier le lien : bouton Partager → Copier.    │
  └────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════
*/


const projets = [


  // ══════════════════════════════════════════════════════════════
  // PROJETS ALTERNANCE — AÉSIO MUTUELLE (2025-2026)
  // ══════════════════════════════════════════════════════════════

  {
    id: 1,
    categorie: "alternance",
    titre: "Stratégie marque employeur",
    sousTitre: "Benchmark concurrentiel et recommandations stratégiques",
    image: "assets/images/benchmark.png",
    videoHover: "",
    couleur: "#D94824",

    annee: "2025-2026",
    duree: "1 semaine",
    role: "Chargée de projet marque employeur",

    // 🔗 Liens externes (laisse [] si aucun)
      liens: [
      { label: "Consulter le document", url: "https://drive.google.com/file/d/1AMgiBMv8KZb5jYfwQy2vDj459RsUhImE/view?usp=sharing" }
    ],

   contexte: "Dans le cadre de mon alternance chez AÉSIO Mutuelle, j'ai été missionnée pour réaliser une analyse comparative de la marque employeur dans le secteur mutualiste. J'ai recueilli sur Glassdoor les avis concernant AÉSIO ainsi que ceux de cinq concurrents opérant sur le même secteur d'activité. Mon travail a consisté à identifier nos avis négatifs les plus récurrents, à les comparer à ceux des concurrents, puis à exploiter ces données sous forme de visualisations graphiques. L'objectif final : obtenir une vision globale de notre positionnement face à la concurrence et formuler des recommandations concrètes pour améliorer notre marque employeur.",

    objectifs: [
    "Recueillir les avis sur Glassdoor d'AÉSIO et de cinq concurrents du secteur mutualiste",
    "Identifier les avis négatifs récurrents et les comparer aux pratiques concurrentes",
    "Restituer les données sous forme de visualisations graphiques claires",
    "Formuler des recommandations stratégiques pour améliorer la marque employeur"
  ],

    outils: ["Glassdoor", "PowerPoint"],

   competences: [
    "Comprendre — Appréhender un contexte économique, sociologique et communicationnel : analyse du secteur mutualiste à travers la perception des collaborateurs et anciens collaborateurs",
    "Comprendre — Extraire et interpréter des indicateurs quantitatifs : recueil, tri et analyse des avis Glassdoor pour en tirer des tendances exploitables",
    "Comprendre — Analyser la stratégie de communication d'un acteur : étude comparative du positionnement employeur d'AÉSIO face à cinq concurrents du secteur",
    "Concevoir — Proposer une recommandation marketing : formulation de recommandations concrètes pour améliorer la marque employeur, restituées à la direction de la communication",
    "Entreprendre — Gérer un projet : cadrage de la mission, structuration de la démarche d'analyse et livraison du rapport final"
  ],
   

    resultats: "Livraison d'un rapport de benchmark et de recommandations adopté par la direction de la communication. 5 concurrents analysés, recommandations retenues pour orientation des actions marque employeur.",
   
    autoEvaluation: "J'ai acquis des compétences en recueil d'avis et en transformation de données qualitatives en indicateurs comparatifs exploitables, ainsi qu'en formulation de recommandations stratégiques argumentées. Mon analyse reste cependant descriptive : je suis en voie d'acquisition sur l'exploitation de données plus complexes, ce que mon Master Data Management à BSB viendra renforcer."
  },


  {
    id: 2,
    categorie: "alternance",
    titre: "Montage vidéo",
    sousTitre: "Adaptation et déploiement des vidéos Welcome to the Jungle en conformité avec la charte de l'entreprise",
    image: "assets/images/wtj.png",
    videoHover: "",
    couleur: "#B33A1B",

    annee: "2025-2026",
    duree: "Projet terminé",
    role: "Monteuse autonome",

    // 🔗 EXEMPLE de liens — remplace les URL par les tiennes
    liens: [
      { label: "Voir la vidéo complète", url: "https://www.linkedin.com/feed/update/urn:li:activity:7404052185866514434" }
    ],

    contexte: "Dans le cadre de mon alternance au sein du pôle communication, l'entreprise disposait de rushs vidéos produits par Welcome to the jungle mais non exploitables en l'état, ne correspondant pas à la charte graphique interne ",

    objectifs: [
      "Recharter ces contenus à l'identité visuelle de l'entreprise",
      "Diffuser sur les bons canaux : site carrière, YouTube et LinkedIn",
      "Renforcer la stratégie de marque employeur"
    ],

    outils: ["Premiere Pro"],

     competences: [
    "Comprendre — Présenter une organisation, ses activités et son environnement : Appropriation de la charte graphique d’AÉSIO Mutuelle afin de la transposer en habillage vidéo.",
    "Comprendre — Évaluer un dispositif multimédia existant : analyse des rushs Welcome to the Jungle pour identifier ce qui était exploitable",
    "Concevoir — Mettre au point une stratégie de communication en adaptant le message : déclinaison des vidéos pour les bons canaux (site carrière, YouTube, LinkedIn) au service de la marque employeur",
    "Exprimer — Monter une vidéo : reprise complète au montage des rushs sur Premiere Pro",
    "Exprimer — Optimiser les médias en fonction de leurs usages et supports de diffusion : déclinaison des formats pour LinkedIn, YouTube et site carrière"
  ],

    resultats: "[5 vidéos montées, à retrouver sur la page LinkedIn ou sur le site Carrières d'AÉSIO Mutuelle.]",
    autoEvaluation: "Je maîtrise le rechartage de contenus vidéo existants en respectant une charte graphique, ainsi que la déclinaison multicanale. j'ai exécuté la déclinaison mais je n'ai pas piloté le choix des canaux. Piste d'amélioration : sur les prochains projets, m'impliquer dès l'amont sur la stratégie de diffusion, pas seulement sur la production."
  },


  {
    id: 3,
    categorie: "alternance",
    titre: "Production vidéo",
    sousTitre: "Production d'une vidéo pour outiller le réseau commercial d'AÉSIO mutuelle",
    image: "assets/images/Serelia.png",
    videoHover: "assets/videos/V2.mp4",
    couleur: "#B33A1B",

    annee: "2025-2026",
    duree: "Projet terminé",
    role: "Captation & montage autonomes",

    // 🔗 EXEMPLE de liens — remplace les URL par les tiennes
    liens: [
      { label: "Voir la vidéo complète", url: "https://drive.google.com/file/d/1CkCHS0_d100vShb9NLVV0aVp-o1cU4Df/view?usp=sharing" }
    ],

    contexte: "Le réseau commercial manquait de visibilité sur Sérélia partenaire externe de l'entreprise. Après un recueil de besoin avec l'équipe concernée, j'ai pris en charge l'intégralité de la production : déplacement à Nantes pour la captation vidéo dans les locaux de Sérélia, puis le montage de la vidéo. ",

    objectifs: [
      "Rassurer le réseau sur la qualité du partenaire ",
      "Expliquer concrètement le parcours de traitement des dossiers  ",
      "Partager des bonnes pratiques concrètes"
    ],

    outils: ["Matériel vidéo (caméra, son, lumière)", "Premiere Pro"],

     competences: [
    "Comprendre — Identifier les cibles : recueil des besoins du réseau commercial pour adapter le contenu à leurs attentes opérationnelles",
    "Comprendre — Présenter une organisation, ses activités et son environnement : restitution du fonctionnement de Sérélia, partenaire externe, pour le rendre lisible et concret",
    "Concevoir — Mettre au point une stratégie de communication en adaptant le message : choix d'un format vidéo immersif (tournage sur site) pour répondre à un enjeu de confiance entre le réseau commercial et le partenaire",
    "Exprimer — Tourner et monter une vidéo : captation sur site à Nantes et montage complet sur Premiere Pro, en autonomie",
    "Entreprendre — Gérer un projet : organisation du déplacement, coordination avec les équipes Sérélia, planification du tournage et livraison finale"
  ],


    resultats: "[1 vidéo produite, durée moyenne 3 minutes, diffusée au sein du réseau commercial pour outiller les conseillers dans leurs échanges sur la prise en charge des dossiers.]",
    autoEvaluation: "Cette mission a confirmé ma maîtrise de la chaîne vidéo en autonomie (recueil de besoin, déplacement, captation, montage). C'est sur la coordination avec une équipe externe que j'ai le plus progressé, en apprenant à cadrer les attentes en amont du tournage pour éviter les imprévus sur place. Piste d'amélioration : vérifier la mise au point après chaque changement de personne filmée"
  },


  {
  id: 4,
  categorie: "alternance",
  titre: "Déclic et des voix",
  sousTitre: "Posts LinkedIn pour la saga podcast d'AÉSIO Mutuelle",
  image: "assets/images/declic-et-de-voix.png",
  videoHover: "",
  couleur: "#4A4339",

  annee: "2025-2026",
  duree: "4 épisodes",
  role: "Rédaction & storytelling",

   liens: [
      { label: "Voir le projet", url: "https://www.linkedin.com/feed/update/urn:li:activity:7470354068427776000" }
    ],

  contexte: "« Déclic et des voix » est une saga de podcasts produite par AÉSIO Mutuelle qui donne la parole à celles et ceux qui ont osé changer de cap, saisir une opportunité, ou simplement imaginer la suite autrement. Au fil des épisodes, des collaborateurs racontent leurs doutes, leurs virages, les rencontres qui ont tout changé. L'idée portée par la marque employeur : chez AÉSIO, ces évolutions ne sont pas des exceptions, elles sont encouragées dans tous les sens. Ma mission a été de rédiger les posts LinkedIn destinés à teaser chaque épisode et à inviter la communauté à aller écouter le podcast.",

  objectifs: [
    "Teaser chaque épisode pour générer de l'écoute",
    "Respecter une ligne éditoriale commune à tous les épisodes (accroche, parcours, déclic, conseil)",
    "Valoriser la marque employeur d'AÉSIO à travers les parcours de ses collaborateurs",
    "Construire un storytelling cohérent et singulier pour chaque témoignage"
  ],

  outils: ["LinkedIn", "Word"],

  competences: [
    "Comprendre — Identifier les cibles : adaptation du ton et du format à l'audience LinkedIn d'AÉSIO (collaborateurs, candidats potentiels, communauté professionnelle)",
    "Comprendre — Interpréter les éléments sémiotiques : appropriation de la ligne éditoriale et du ton de voix de la marque employeur AÉSIO",
    "Concevoir — Communiquer sur les réseaux sociaux : production de contenus respectant une ligne éditoriale structurée et un calendrier d'épisodes",
    "Concevoir — Mettre au point une stratégie de communication en adaptant le message aux objectifs : déclinaison du message du podcast au format court LinkedIn pour générer du clic vers l'écoute",
    "Exprimer — Produire un écrit communicationnel dans un style juste et pertinent : rédaction de 4 posts respectant la structure éditoriale commune (accroche, parcours, déclic, conseil)",
    "Exprimer — Imaginer, écrire et scénariser une communication multimédia (niveau 2) : construction d'un storytelling autour de chaque invité, articulé entre format audio long et format texte court",
    "Exprimer — Produire un écrit journalistique sourcé et documenté (niveau 2) : écoute attentive de chaque épisode pour en extraire la phrase d'accroche, les éléments clés du parcours et les pépites de récit"
  ],

  resultats: "4 posts LinkedIn publiés sur la page d'AÉSIO Mutuelle dans le cadre de la saga « Déclic et des voix ». Chaque post a respecté la structure éditoriale commune tout en valorisant la singularité de chaque témoignage, contribuant à la visibilité de la démarche marque employeur.",
  autoEvaluation: "J’ai désormais une bonne maîtrise de la rédaction de posts LinkedIn en respectant une ligne éditoriale définie, ainsi que de la transformation d’un contenu long (podcast) en format court. J’ai également développé ma capacité à repérer des phrases d’accroche pertinentes à partir de l’écoute de contenus audio. Piste d'amélioration : je dois encore progresser sur l’analyse des performances de mes publications (engagement, clics vers le podcast), car je n’ai pas toujours exploité les données disponibles."
},


  // ══════════════════════════════════════════════════════════════
  // PROJETS ALTERNANCE — CPAM D'EURE-ET-LOIR (2024-2025)
  // ══════════════════════════════════════════════════════════════
{
  id: 5,
  categorie: "alternance",
  titre: "Mon espace santé en salon",
  sousTitre: "Visuel événementiel pour le service prévention de la CPAM",
  image: "assets/images/flyer.jpeg",
  videoHover: "",
  couleur: "#4A4339",

  annee: "2024-2025",
  duree: "Mission ponctuelle",
  role: "Technicienne PAO",

  liens: [
    { label: "Voir la version originale", url: "https://drive.google.com/file/d/1YSxfprMvEsac1l5w_bnUn1z9vWQHBwBF/view?usp=sharing" }
  ],

  contexte: "À l'occasion d'un salon organisé à Chartres, le service prévention de la CPAM d'Eure-et-Loir m'a confié la création d'un visuel pour promouvoir Mon espace santé auprès des familles. L'enjeu : capter l'attention des parents et des enfants dans un environnement visuellement saturé. N'ayant pas trouvé d'image stock adéquate, j'ai rédigé un prompt précis pour une IA générative en y intégrant mes contraintes visuelles et mon message cible. J'ai ensuite construit une accroche claire en lien avec l'illustration, et finalisé le visuel sur Adobe Express en respectant l'ensemble de la charte graphique de l'Assurance Maladie.",

  objectifs: [
    "Concevoir un visuel qui parle simultanément aux parents et aux enfants",
    "Respecter la charte graphique de l'Assurance Maladie",
    "Hiérarchiser les messages pour faciliter la compréhension immédiate du dispositif",
    "Servir de support d'échange entre agents et visiteurs du salon"
  ],

  outils: ["Adobe Express", "IA générative d'images", "Charte Assurance Maladie"],

  competences: [
  "Comprendre — Identifier les cibles : définition des parents et des enfants comme cibles prioritaires, avec des attentes différentes",
  "Comprendre — Présenter une organisation, ses activités et son environnement : respect de la charte graphique et des objectifs du service prévention de l'Assurance Maladie",
  "Comprendre — Analyser des formes médiatiques et leur sémiotique : choix d'un visuel et d'un message clairs et lisibles dans un environnement événementiel saturé",
  "Comprendre — Analyser la stratégie de communication d'un acteur : adaptation du message aux objectifs de sensibilisation santé dans un cadre événementiel grand public",
  "Exprimer — Imaginer, écrire et scénariser une communication multimédia : rédaction d'une accroche pertinente et hiérarchisation des messages essentiels",
  "Exprimer — Créer, composer et retoucher des visuels : prompting d'une IA générative, sélection et composition du visuel final",
  "Exprimer — Réaliser et produire une communication plurimédia : conception du visuel final sur Adobe Express dans le respect de la charte Assurance Maladie"
  ],

  resultats: "Visuel validé par le service prévention sans modification. Utilisé pendant toute la durée du salon, il a rempli sa mission : attirer l'attention des familles, faciliter la compréhension immédiate du dispositif Mon espace santé, et servir de support d'échange aux agents présents sur le stand.",
  autoEvaluation: "Ce projet m’a permis d’apprendre à utiliser l’IA de manière réfléchie, comme un outil au service d’une intention créative et non comme une solution de facilité. Pour progresser, je souhaite tester davantage mes créations auprès d’un échantillon de la cible visée (ici les parents) avant leur validation, afin de recueillir des retours externes et éviter de me baser uniquement sur une validation interne."
},

{
  id: 6,
  categorie: "alternance",
  titre: "Ça bouge à la CPAM 28 !",
  sousTitre: "Série vidéo interne mensuelle",
  image: "assets/images/CPAM-Bouge.png",
  videoHover: "assets/videos/video_9.mp4",
  couleur: "#D94824",

  annee: "2024-2025",
  duree: "6 mois",
  role: "Conception, réalisation & montage",

liens: [
      { label: "Voir la vidéo complète", url: "https://drive.google.com/file/d/1NFGurasVeCKY7O0toyq_o4n93QNam0Tt/view?usp=drive_link" }
    ],


  contexte: "À mon arrivée en septembre 2024 au sein du service communication, on m'a confié la mission de poursuivre la production de la série de vidéos « Ça bouge à la CPAM ». Cette série, déjà lancée avant mon arrivée, vise à présenter les nouveaux arrivants à travers des interviews courtes et dynamique. Un épisode est publié chaque mois. En rejoignant l'équipe, j'ai dû m'approprier le format existant tout en veillant à ce qu'il reste aligné avec la grande cause nationale portée cette année-là par l'Assurance Maladie, à savoir la promotion de l'activité physique. Le décor, le ton des questions et l'ambiance générale devaient donc refléter ce thème. En fin d'année, j'ai proposé un épisode spécial à l'occasion des fêtes, avec un format un peu différent. À partir de mai 2025, un changement de thématique a été introduit : la transition écologique est devenue la nouvelle cause nationale. Ma mission a alors été de concevoir un tout nouveau format pour relancer la série en cohérence avec cette nouvelle cause. Pour ce premier épisode sur la transition écologique : j'ai imaginé un nouveau fil conducteur, une petite scénette symbolique autour de la plantation d'un bleuet. Chaque interviewé réalisait une action dans le processus de plantation (par exemple : arroser la terre), la scène passant du noir et blanc à la couleur pour souligner le geste. J'ai rédigé des questions simples mais réfléchies, en lien avec la cause, tout en favorisant des réponses spontanées (les personnes interviewées ne connaissaient pas les questions à l'avance). J'ai préparé le décor, planifié le tournage (réservation de la salle, organisation des prises de vue, accueil et mise en confiance des participants). J'ai validé avec ma responsable les questions, les plannings et le scénario, sachant qu'elle n'était pas présente le jour du tournage. Le jour J, deux personnes prévues étaient absentes. J'ai su réagir rapidement en ajustant la scénette sans compromettre la cohérence du message ni la fluidité des transitions. Le tournage et le montage se sont déroulés sans difficulté majeure.",

  objectifs: [
    "Poursuivre la production d'une série existante en respectant son format",
    "Aligner la série sur la grande cause nationale de l'Assurance Maladie",
    "Concevoir un nouveau format pour relancer la série sur la transition écologique",
    "Publier un épisode chaque mois",
    "Favoriser des réponses spontanées des interviewés"
  ],

  outils: ["Premiere Pro", "Caméra"],

  competences: [
  "Comprendre — Présenter une organisation, ses activités et son environnement : compréhension des enjeux de communication de la CPAM et de sa ligne éditoriale",
  "Comprendre — Évaluer un dispositif multimédia existant : analyse du format en place pour en conserver les points forts et l'adapter au nouveau message",
  "Comprendre — Analyser des formes médiatiques et leur sémiotique : mise en scène symbolique (plantation du bleuet, passage à la couleur) pour porter le message écologique",
  "Comprendre — Analyser la stratégie de communication d'un acteur : adaptation du contenu aux campagnes nationales de l'Assurance Maladie (activité physique, puis écologie)",
  "Concevoir — Mettre au point une stratégie de communication en adaptant le message : conception d'un nouveau format pour relancer la série autour de la transition écologique",
  "Exprimer — Imaginer, écrire et scénariser une communication multimédia : rédaction du fil conducteur, des questions et de la chorégraphie de plantation",
  "Exprimer — Tourner et monter une vidéo : production complète des épisodes, du décor au montage final",
  "Entreprendre — Gérer un projet : planification du tournage, validation en amont, gestion des imprévus le jour J"
  ],

  resultats: "Grâce à cette mission, j'ai renforcé mes compétences en gestion de projet vidéo : rédaction, scénarisation, tournage, montage et adaptation en cas d'imprévu. J'ai également appris à aligner une production interne sur une communication institutionnelle plus large, en lien avec une cause nationale.",
    autoEvaluation: "Mon expérience acquise depuis mon arrivée m'a permis d'être à l'aise à chaque étape du processus du tournage au montage. Ce n'était pas toujours le cas au début : lors de mon premier montage à mon arrivée en septembre, j'ai fait plusieurs erreurs techniques (mauvaise fluidité, coupes trop brusques, décalage son/image). Ma responsable m'a fait un retour qui m'a permis de progresser. Depuis, j'ai optimisé ma méthode de montage en travaillant par séquences complètes, amélioré mon dérushage pour mieux structurer les interviews, et appris à poser des questions plus adaptées pour éviter les coupes gênantes au montage."
},
  

  // ══════════════════════════════════════════════════════════════
  // PROJETS EN COURS / TUTORÉS — BUT MMI
  // ══════════════════════════════════════════════════════════════

  {
  id: 7,
  categorie: "cours",
  titre: "Application de gestion de restaurant",
  sousTitre: "Conception UX d'un outil métier pour deux entrepreneurs (projet pédagogique)",
  image: "assets/images/Dominic.png",
  videoHover: "",
  couleur: "#4A4339",

  annee: "2024-2025",
  duree: "Projet pédagogique en binôme",
  role: "UX Designer (binôme)",

  liens: [
      { label: "Voir le projet ", url: "https://drive.google.com/file/d/1OPzzoVp2BV6Ml-NPQB5OdKl3kH2_U1Eh/view?usp=sharing" }
    ],

  contexte: "Dans le cadre du cours Design d'expérience, nous avons reçu une demande fictive : imaginer une application de gestion de restaurant pour deux entrepreneurs, Dominic et son collaborateur. L'objectif était de concevoir une interface intuitive, simple d'utilisation et adaptée à leurs besoins professionnels. Avec ma binôme, nous avons mené l'intégralité de la démarche de conception centrée utilisateur, du brief initial jusqu'au prototype interactif cliquable.",

  objectifs: [
    "Comprendre les besoins métiers de deux entrepreneurs de la restauration",
    "Concevoir une architecture d'information cohérente avec la logique des utilisateurs",
    "Produire un prototype interactif testable simulant l'expérience finale",
    "Appliquer une démarche UX complète, du brief au wireframe interactif"
  ],

  outils: ["Figma", "Méthode 6-1", "One Up", "Card sorting", "Infinity Map"],

  demarche: [
    "Brief : compréhension de la demande, du contexte et des attentes des deux entrepreneurs",
    "User research : étude des besoins des utilisateurs dans le domaine de la restauration",
    "Personas : création de profils types pour cibler les usages principaux",
    "Benchmark : analyse d'applications similaires pour identifier les bonnes pratiques",
    "Card sorting : organisation des contenus et fonctionnalités selon la logique des utilisateurs",
    "Infinity Map : construction de l'architecture de l'information",
    "Méthode 6-1 : génération d'idées de design par croquis rapides",
    "One Up : sélection et développement du concept retenu",
    "Wireframe : maquettes basse fidélité des écrans",
    "Wireframe interactif : prototype cliquable pour tester la navigation"
  ],

  competences: [
    "Comprendre — Identifier les cibles (critères socio-économiques, démographiques, géographiques, culturels) : création des personas et étude des attentes spécifiques des restaurateurs",
    "Comprendre — Réaliser des entretiens utilisateurs et bâtir le modèle des attentes : user research orientée sur les pratiques métiers de la restauration",
    "Comprendre — Cartographier les expériences utilisateur (niveau 2) : construction de l'architecture et du parcours à partir des données récoltées (card sorting, infinity map)",
    "Concevoir — Concevoir un produit ou un service en termes d'usage et de fonctionnalité : définition des fonctionnalités clés de l'application au service du métier de restaurateur",
    "Concevoir — Co-construire de manière itérative par ateliers de créativité et idéation : utilisation des méthodes 6-1 et One Up pour générer puis sélectionner des concepts",
    "Exprimer — Designer une interface web (wireframes, UI) : réalisation des wireframes basse fidélité adaptés à l'usage professionnel",
    "Exprimer — Prototyper une expérience interactive : création d'un wireframe interactif cliquable pour simuler et tester la navigation"
  ],

  resultats: "Livraison d'un prototype interactif fonctionnel, ergonomique et adapté aux besoins du client fictif. Cette mission a permis de pratiquer l'intégralité de la chaîne de conception centrée utilisateur, du brief au prototype cliquable, et de développer une vraie méthodologie UX réutilisable sur d'autres projets."
},

{
  id: 8,
  categorie: "cours",
  titre: "La Guilde du Jeu",
  sousTitre: "Stratégie de communication pour une boutique de jeux de société dijonnaise",
  image: "assets/images/Guilde_du_jeu.png",
  videoHover: "",
  couleur: "#B33A1B",

  annee: "2025-2026",
  duree: "Projet pédagogique en équipe",
  role: "Stratège communication (équipe)",
liens: [
      { label: "Voir le projet ", url: "https://drive.google.com/file/d/15cPwODg5SRb3gXbStAl3-X3YLjnD_fgV/view?usp=drive_link" }
    ],

  contexte: "La Guilde du Jeu, boutique de jeux de société à Dijon, souhaitait augmenter ses ventes et attirer de nouveaux clients. Face à une concurrence locale active et une communication encore peu développée, la boutique a sollicité notre équipe dans le cadre d'un projet pédagogique pour renforcer sa présence en ligne et améliorer son image de marque. Notre mission : analyser le marché dijonnais des jeux de société et proposer une stratégie de communication adaptée à ses différentes cibles, des passionnés réguliers aux bars partenaires de la ville.",

  objectifs: [
    "Développer la notoriété des produits jeux de société auprès du public dijonnais",
    "Augmenter la visibilité et la présence sur les réseaux sociaux (Instagram, Facebook)",
    "Conquérir de nouveaux prospects sur le marché local",
    "Différencier la boutique face à une concurrence locale active"
  ],

  outils: ["Analyse SWOT", "Instagram", "Facebook", "Visites terrain", "PowerPoint"],

  competences: [
    "Comprendre — Appréhender un contexte économique, sociologique, culturel et communicationnel : étude du secteur des jeux de société à Dijon et de son écosystème local (boutiques concurrentes, bars partenaires, publics cibles)",
    "Comprendre — Identifier les cibles : segmentation en trois niveaux (passionnés, occasionnels, bars partenaires) avec critères socio-démographiques, géographiques et besoins associés (divertissement, accessibilité, sentiment d'appartenance)",
    "Comprendre — Interpréter les éléments sémiotiques : comparaison des axes éditoriaux, de la direction artistique et du ton de voix des boutiques concurrentes",
    "Comprendre — Analyser la stratégie de communication d'un acteur (niveau 2) : analyse comparative des stratégies des concurrents pour identifier opportunités et axes de différenciation",
    "Comprendre — Auditer une marque (niveau 2) : analyse des réseaux sociaux et sites web des concurrents, complétée par des visites terrain dans chaque boutique pour évaluer le positionnement physique",
    "Concevoir — Proposer une recommandation marketing : définition des cibles prioritaires, des objectifs cognitifs et des points de contact à activer (site, Instagram, Facebook)",
    "Concevoir — Mettre au point une stratégie de communication adaptée aux objectifs : construction d'une stratégie différenciante en réponse à la concurrence locale et adaptée aux besoins de chaque cible",
    "Entreprendre — Gérer un projet avec une méthode classique : cadrage de la mission, structuration de la démarche d'analyse, synthèse SWOT et restitution"
  ],

  resultats: "Livraison d'une stratégie de communication complète pour La Guilde du Jeu, articulée autour d'une analyse concurrentielle approfondie, d'une matrice SWOT et de recommandations différenciées par cible. Ce projet m'a permis de pratiquer l'adaptation d'une communication à une cible précise, la conception d'une stratégie pour un secteur défini et l'analyse d'un marché pour en identifier les points clés."
},
 

  // ══════════════════════════════════════════════════════════════
  // PROJET PERSONNEL
  // ⚠️ REMPLACE par un vrai projet personnel à toi
  // ══════════════════════════════════════════════════════════════

  {
  id: 9,
  categorie: "cours",
  titre: "Analyse UX du site Apple",
  sousTitre: "Audit du parcours utilisateur sur l'achat d'un iPhone 15 Pro (SAÉ 201)",
  image: "assets/images/SAE.png",
  videoHover: "",
  couleur: "#161310",

  annee: "2023-2024",
  duree: "Projet pédagogique — 10 étapes analysées",
  role: "Analyste UX",

  liens: [
    { label: "Consulter le document", url: "https://drive.google.com/file/d/1q2Zry1pZ3tqoqJ5Q2ANxZuyR83u-90P8/view?usp=sharing" }
  ],

  contexte: "Dans le cadre de la SAÉ 201 « Exploration des usages », j'ai mené un audit UX complet du site Apple sur un parcours précis : la découverte et la comparaison de l'iPhone 15 Pro, de la page d'accueil jusqu'à la page de comparaison des modèles. Le travail a consisté à documenter dix étapes successives du parcours, en croisant pour chacune les actions de l'utilisateur, son ressenti, les outils de suivi mobilisables, des hypothèses de recommandation et des questions d'entretien à poser pour valider les hypothèses.",

  objectifs: [
    "Décomposer un parcours d'achat en étapes fines (clics, scrolls, choix de navigation)",
    "Identifier à chaque étape les frictions et les moments de satisfaction de l'utilisateur",
    "Mobiliser les bons outils de suivi (Google Analytics, SimilarWeb) pour quantifier l'expérience",
    "Formuler des hypothèses de recommandation et concevoir un protocole de validation par entretien"
  ],

  outils: ["Google Analytics", "SimilarWeb", "Captures d'écran annotées", "Grille d'audit UX"],

  competences: [
    "Comprendre — Évaluer un site web existant en s'appuyant sur des guides de bonnes pratiques : audit d'un parcours réel sur le site Apple, étape par étape",
    "Comprendre — Interpréter les éléments sémiotiques : analyse du langage visuel d'Apple (typographie élégante, visuels imposants, animations, codes graphiques différents selon les sections du site)",
    "Comprendre — Extraire et interpréter des indicateurs quantitatifs : mobilisation de métriques (taux de rebond, durée moyenne de visite, taux de clic, taux de conversion) via Google Analytics et SimilarWeb",
    "Comprendre — Réaliser des entretiens utilisateurs : conception d'un guide d'entretien complet avec des questions spécifiques pour chaque étape du parcours",
    "Comprendre — Identifier et décrire les parcours client (niveau 2) : description détaillée des 10 étapes du parcours, croisant actions concrètes et ressenti à chaque moment",
    "Comprendre — Cartographier les expériences utilisateur (niveau 2) : identification des points de friction (changements brutaux de codes graphiques, surcharge informationnelle, longueur de page) et des moments de satisfaction (esthétique, animations, navigation fluide)",
    "Comprendre — Mener des tests d'utilisabilité (niveau 2) : formulation d'hypothèses de recommandation argumentées et conception d'un protocole d'entretien pour les valider"
  ],

  resultats: "Audit UX détaillé sur 10 étapes du parcours d'achat iPhone 15 Pro, croisant pour chaque étape les actions utilisateur, le ressenti, les indicateurs quantitatifs et les questions d'entretien. Plusieurs recommandations concrètes formulées : ajout d'un sommaire sur la page iPhone, repositionnement du bandeau promotionnel, mise en avant du lien « Comparer les iPhone », réduction de la surcharge textuelle sur la page de comparaison."
},


  // ──────────────────────────────────────────────────────────────
  // Pour ajouter un projet : copie un bloc { ... }, colle-le ici,
  // change l'id, n'oublie pas la virgule au bloc précédent.
  // ──────────────────────────────────────────────────────────────

];

/* LIGHTBOX — pop-up image plein écran */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.insp-tile img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function fermerLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', fermerLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) fermerLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) fermerLightbox();
});