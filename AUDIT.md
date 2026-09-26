# Audit stratégique du portfolio — Jean N'TCHOUGAN

Date : 2 septembre 2026  
Périmètre : dépôt local et configuration de déploiement. Le site de production n'a pas pu être chargé par l'outil de consultation externe ; les constats d'interface sont donc fondés sur le code source. Aucune donnée de trafic, de Core Web Vitals terrain, ni de réponse du service d'envoi de courriel n'était disponible.

## 1. Résumé exécutif

Le dépôt contient un portfolio React 19 / TypeScript / Vite, responsive et bilingue (français/anglais), avec cinq routes : accueil, à propos, services, projets et contact. La base est saine : composants modestes, données séparées, routes explicites, sitemap, robots.txt, CV téléchargeable et projets réels liés à l'activité professionnelle.

Le site positionne actuellement Jean avant tout comme un développeur FullStack. Il prouve quelques expériences utiles (web, mobile, e-commerce, Odoo), mais il ne relie pas assez explicitement ces réalisations à des besoins métier, à l'intégration de systèmes ni à une trajectoire crédible vers la transformation digitale. Les projets sont des cartes techniques et non encore des études de cas.

**Décision recommandée : C — PARTIAL REBUILD.**  
Conserver la stack, les routes principales, les composants de base et les réalisations. Recomposer le message, le hero, l'architecture éditoriale, les pages projets et les fondations SEO/accessibilité. Une refonte totale n'est pas justifiée : le produit est simple, maintenable et visuellement cohérent, mais des pans importants doivent être reconstruits autour du positionnement.

## 2. Méthode et état initial

- Instructions : aucun `AGENTS.md` ni `AGENT.md` présent à la racine.
- Stack : React 19, TypeScript, React Router DOM 7, Vite 7, Tailwind CSS 4, DaisyUI et Lucide.
- Déploiement : Vercel, avec réécriture SPA vers `index.html`.
- Routes : `/`, `/about`, `/services`, `/projects`, `/contact`, plus 404 côté client.
- Assets : portrait local ; trois captures locales de projets ; une image Unsplash distante pour ANUBA ; CV PDF local.
- SEO existant : description, canonical, Open Graph/Twitter, `robots.txt` et sitemap.
- Tests : aucun framework ni script de test détecté. `npm run lint` échoue avec 43 erreurs Prettier (retours CRLF dans `eslint.config.js`, formatage de `use-reveal.ts` et `services.tsx`). `npx tsc --noEmit` passe et `npm run build` réussit. `npm audit --omit=dev --audit-level=low` retourne 4 vulnérabilités de production (3 high, 1 moderate) dans `nanoid`, `postcss` et `react-router`/`react-router-dom`.
- Git : worktree propre avant l'audit (`5980ef9 connexion backend`).

## 3. Positionnement et marque personnelle

### Positionnement actuel

Le hero et les métadonnées décrivent essentiellement un « FullStack Developer » ou « Software Developer ». Le bénéfice est formulé comme la construction d'applications web et mobiles fiables. Les services portent majoritairement sur des capacités techniques (frontend, backend, APIs, e-commerce, dashboards). L'expérience inclut pourtant analyse fonctionnelle, Odoo, plateformes e-commerce et amélioration continue : ces éléments sont insuffisamment exploités comme preuves d'une approche de solution.

### Positionnement recommandé

> Développeur d'applications et professionnel du numérique basé à Lomé, je conçois des solutions web, mobiles et intégrées pour aider les entreprises et organisations à structurer, digitaliser et faire évoluer leurs opérations.

Signature de preuve, plus concise :

> Applications web et mobiles · Intégration de systèmes · ERP / Odoo

Cette formulation reste réaliste : elle parle d'une contribution et de domaines pratiqués, sans revendiquer une expertise déjà acquise en transformation digitale à grande échelle.

### Vision professionnelle

> Construire progressivement une expertise en systèmes d'information, ERP et intégration afin de contribuer à la transformation digitale des entreprises et organisations africaines avec des solutions adaptées à leurs réalités.

### Dimension africaine

Elle doit être une vision documentée, non un slogan. La localisation à Lomé est déjà présente dans l'expérience, mais absente de la proposition de valeur et du SEO éditorial. Elle peut apparaître dans une courte section « Vision », dans les études de cas lorsque le contexte le permet, et dans un futur contenu de retour d'expérience. Ne pas affirmer un impact continental non démontré.

### Lecture en 5 secondes

| Question                  | État actuel                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| Qui ?                     | Oui : Jean et son rôle technique sont visibles.                                           |
| Quelle expertise ?        | Oui, mais trop large : FullStack, web, mobile.                                            |
| Quel problème résout-il ? | Partiellement : « construire » est clair, les enjeux opérationnels ne le sont pas.        |
| Pour qui ?                | Partiellement : fondateurs, entreprises et équipes sont mentionnés mais non prioritaires. |
| Quelle vision ?           | Non : ni transformation digitale ni trajectoire ne sont explicitées.                      |
| Quelle action ?           | Oui : projets ou contact, avec deux CTA visibles.                                         |

## 4. UX, UI et conversion

### Ce qui fonctionne

- Navigation courte et prévisible, sticky, avec menu mobile et sélecteur de langue.
- Grille responsive simple, densité visuelle sobre, portrait et contrastes sombres cohérents.
- CTA répétées vers les projets et le contact ; formulaire concis ; coordonnées alternatives accessibles.
- Animation de révélation légère, avec prise en charge de `prefers-reduced-motion`.
- Les cartes et sections sont réutilisables et les pages ne sont pas surchargées d'effets « développeur ».

### À améliorer

- Le hero est esthétique mais ne porte pas l'ambition stratégique : il faut une hiérarchie « résultat / public / moyens / preuve », plutôt que l'intitulé de poste seul.
- Le parcours mélange portfolio, services de développement indépendant et références à un studio/agence dans les traductions ; l'offre principale manque de cadre.
- La page Services liste huit prestations au même niveau. Regrouper par résultats (solutions métier, intégration/ERP, produits web/mobile) réduirait la charge cognitive.
- Les cartes projet renvoient surtout vers des démos externes ; le visiteur ne peut pas examiner le problème, le rôle, les décisions ni l'impact. ANUBA n'a pas de lien de démo, mais son image et son titre sont rendus comme liens sans destination.
- Les boutons de filtre de projets ne communiquent pas leur état sélectionné via `aria-pressed` et aucun message n'indique le résultat du filtrage.
- Le formulaire confirme uniquement le succès ; une erreur réseau est uniquement inscrite dans la console. Il faut un message d'erreur visible, réessai, validation client utile et état de champ accessible.
- Le CTA primaire recommandé est « Discuter d'un besoin / projet de digitalisation » ; « Voir les réalisations » doit rester le CTA de réassurance.

### Identité visuelle

Le bleu nuit, le blanc et les surfaces discrètes évoquent sérieux et précision. C'est une base adaptée à un professionnel du numérique, mais l'absence de système de marque plus distinctif et le recours à une image Unsplash générique pour ANUBA affaiblissent la preuve. La police annoncée (« Plus Jakarta Sans ») n'est ni importée ni auto-hébergée : elle dépend donc du poste du visiteur et retombe probablement sur Inter ou système.

## 5. Copywriting et contenu

Le texte évite globalement les clichés, mais reste souvent générique : « reliable », « clean architecture », « scalable », « built with intent ». Il faut les relier à un cas réel, une décision ou un effet observable.

| Élément  | Constat                                                               | Direction recommandée                                                                                        |
| -------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Hero     | Présente le métier, pas la valeur métier.                             | Mettre la conception de solutions et la digitalisation de processus en premier, puis le socle technique.     |
| À propos | Bon socle de principes et expérience factuelle.                       | Ajouter la trajectoire : développement → solutions → intégration/ERP → systèmes d'information.               |
| Services | Catalogue technique de huit items.                                    | Trois capacités orientées besoin ; ne promettre ERP/diagnostic que si le périmètre réel est défini.          |
| Projets  | Technologie, catégorie, résumé bref.                                  | Études de cas : contexte, utilisateurs, problème, rôle, solution, architecture, contraintes, résultat connu. |
| Contact  | Invitation utile, promesse de réponse sous deux jours non vérifiable. | Conserver si c'est un engagement réel ; préciser le type de demandes prioritaires.                           |

Une section « Insights » n'est pertinente qu'avec une cadence soutenable (par exemple une note ou une étude de cas après une réalisation significative). Prioriser 2–3 études de cas solides plutôt qu'un blog vide.

## 6. Projets, crédibilité et E-E-A-T

| Projet        | Évaluation                                                                                                                      | Recommandation                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ANUBA         | Très pertinent : cas mobile, devis/commande de pièces, besoin concret. Mais image générique et aucun lien Play Store/démo/code. | **Mettre en avant** ; obtenir une capture et le lien public autorisé ; documenter flux, rôle et contraintes. |
| KEINAGROUP    | Pertinent pour e-commerce, Odoo et activité d'entreprise.                                                                       | **Mettre en avant** ; transformer en étude de cas avec périmètre exact et contribution de Jean.              |
| ANIEK & AYO   | Pertinent pour Odoo et contenu/e-commerce, mais actuellement descriptif.                                                        | **Améliorer** avec preuve de personnalisation, intégration et contexte.                                      |
| KBS Construct | Preuve web utile, mais moins alignée avec la vision Afrique / systèmes.                                                         | **Rétrograder** après les trois précédents, sauf étude montrant un enjeu métier plus fort.                   |

La crédibilité technique est raisonnable grâce aux expériences et sites déployés, mais l'autorité et la confiance restent limitées par l'absence d'études de cas, de rôle attribué projet par projet, de liens de preuve pour ANUBA, de témoignages autorisés, de publications et de politique de confidentialité pour le formulaire. Les pourcentages de compétences ne sont pas utilisés : c'est positif. Les groupes de compétences doivent progressivement être remplacés ou complétés par des liens vers leurs preuves.

Évaluation par audience : recruteur **7/10** (profil et expériences lisibles), CTO/Lead **6/10** (stack visible, mais architecture et contribution peu vérifiables), entreprise/organisation **5/10** (besoins métier et résultats insuffisamment exposés).

## 7. SEO, GEO et recherche locale

### Forces

- `robots.txt`, sitemap XML, canonical et métadonnées sociales existent.
- Le nom, la localisation dans le contenu, les compétences et les projets sont indexables dans le HTML côté client après rendu JavaScript.
- URLs simples et navigation interne claire.

### Lacunes

- `index.html` contient deux balises `meta[name=description]`, ce qui rend le signal ambigu.
- Le document est initialement `lang="en"` puis est corrigé côté client : un crawler ou une capture pré-hydratation reçoit une information linguistique incohérente.
- Toutes les routes partagent le même title, description, canonical et Open Graph. Les pages À propos, projets, services et contact n'ont pas de métadonnées spécifiques.
- Les routes hors accueil n'ont pas de H1 : `Section` produit un H2. Cela nuit à la structure sémantique et à la compréhension des pages.
- Aucun JSON-LD (Person / ProfilePage / WebSite), favicon, manifeste ou image OG vérifiée n'est présent dans le dépôt ; les URLs OG référencent `og-image.jpg` qui n'existe pas localement.
- Le sitemap ne contient pas de `lastmod`, et les pages SPA nécessitent JavaScript pour afficher le contenu. Pour une visibilité SEO exigeante, pré-rendu/SSR ou génération statique est à étudier avant une migration lourde.
- Les alt des captures sont génériques et seulement en anglais ; l'image ANUBA est décorative/générique plutôt qu'une preuve du produit.
- Le site ne couvre pas naturellement les requêtes « développeur FullStack Togo », « développeur Odoo Togo » et « transformation digitale Togo » par des pages/études de cas structurées. Les intégrer dans un texte utile, jamais dans une liste artificielle de mots-clés.

Pour le GEO/AI search, rendre explicites dans le texte et le JSON-LD : nom, localisation professionnelle (Lomé, Togo), activité actuelle, expertise démontrée, employeurs/réalisations autorisés et vision. Les réponses génératives auront alors des assertions contextualisées plutôt qu'une simple liste de stack.

## 8. Accessibilité — revue WCAG 2.2 AA orientative

| Gravité | Emplacement         | Impact                                                                                                                      | Correction                                                                                               |
| ------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Haute   | Routes hors accueil | Pas de H1.                                                                                                                  | Ajouter un H1 unique par page ; conserver les H2 pour les sous-sections.                                 |
| Haute   | Formulaire contact  | L'échec de soumission est invisible aux lecteurs d'écran et utilisateurs visuels.                                           | Ajouter un état d'erreur avec `role="alert"`, texte actionnable et associer les erreurs aux champs.      |
| Moyenne | Filtres projets     | L'état actif n'est pas programmatique.                                                                                      | Ajouter `aria-pressed` et annoncer le nombre de projets affichés.                                        |
| Moyenne | Focus               | Seuls quelques composants ont un `:focus-visible` explicite ; les styles DaisyUI restent à vérifier sur tous les contrôles. | Définir un focus visible cohérent, à fort contraste, pour liens, boutons, filtres, icônes et formulaire. |
| Moyenne | Boutons tactiles    | Le sélecteur de langue et certaines icônes peuvent être sous les 24 × 24 CSS px recommandés.                                | Porter les cibles à au moins 24 px (idéalement 44 px pour le tactile).                                   |
| Basse   | Images              | Alt génériques non localisés et parfois peu informatifs.                                                                    | Employer des alt descriptifs liés au contenu, ou `alt=""` quand l'image est seulement décorative.        |

Points positifs : balises `main`, `header`, `nav`, `footer`, labels explicites du formulaire, `aria-live` pour le succès, `aria-label` pour les icônes et respect de la réduction de mouvement. Les contrastes exacts et l'ordre de tabulation doivent être vérifiés au navigateur avec un audit automatisé et manuel après refonte.

## 9. Performance et responsive

La structure est légère et Vite produira un bundle moderne. Le portrait LCP est déclaré `loading="eager"` et `fetchPriority="high"`, ce qui est approprié si l'image reste au-dessus de la ligne de flottaison. Les autres images sont en lazy loading. Les captures locales pèsent environ 200–274 Ko chacune ; elles devront être compressées et idéalement servies en WebP/AVIF avec dimensions explicites. L'image Unsplash ajoute une dépendance tierce et peut nuire à la cohérence/performance.

Risques à traiter : bibliothèque DaisyUI potentiellement plus large que nécessaire, toutes les routes chargées dans le bundle initial (pas de lazy routes), aucune stratégie explicite de police, et aucune mesure LCP/INP/CLS terrain. Les images possèdent une zone d'affichage définie par `aspect-video`, ce qui limite le CLS des cartes. Les grilles utilisent des breakpoints adaptés (mobile → `sm`/`md`/`lg`) ; la validation visuelle réelle reste nécessaire sur 320 px, 375 px, 768 px, 1024 px et ≥1440 px.

## 10. Audit technique et sécurité

### Architecture et code

- **Medium** — `ProjectCard` crée des ancres vers `p.demo` même lorsqu'il est absent (ANUBA), ce qui produit un lien non fonctionnel/non pertinent.
- **Medium** — une partie du modèle de détail projet et de ses traductions existe, mais aucune route de détail n'est déclarée. Le contenu promet une granularité qui n'est pas accessible.
- **Medium** — `Section` est employé comme titre de page mais génère un H2 ; les routes n'ont donc pas de contrat sémantique de page.
- **Low** — condition redondante dans Hero (`lang === "fr" ? ... : ...` avec le même rendu).
- **Low** — README et configuration conservent des références TanStack Start alors que l'application est un SPA Vite/React Router ; cela peut induire en erreur lors de la maintenance.
- **Low** — `zod`, `clsx`, `tailwind-merge` et `tw-animate-css` ne sont pas référencés dans le code analysé. Vérifier avant retrait, ne pas supprimer durant la phase de refonte sans validation.
- **Medium** — aucun test de composant, de route, de formulaire ou d'accessibilité ; seul lint/build est prévu.
- **Medium** — le lint échoue à cause de 43 erreurs de formatage. C'est corrigible automatiquement, mais doit redevenir vert avant tout ajout fonctionnel.

### Sécurité et données

- **Medium** — le formulaire envoie nom, email, sujet et message vers un service Render externe codé en dur. Le dépôt ne permet pas d'auditer son CORS, sa validation, sa limitation de débit, son stockage, ni sa politique de confidentialité.
- **Medium** — aucune information de confidentialité/traitement des données n'accompagne le formulaire, alors qu'il collecte des données personnelles.
- **Low** — pas de secret ou clé API exposé dans les sources analysées ; les liens `target="_blank"` dans les emplacements relevés utilisent `rel="noopener noreferrer"`.
- **Info** — `npm audit --omit=dev` est à zéro vulnérabilité au moment de l'audit. Cela n'a pas valeur de garantie sur le service de contact ni la configuration HTTP de l'hébergeur.

À prévoir côté hébergeur/API : HTTPS, headers CSP adaptés, `X-Content-Type-Options`, `Referrer-Policy`, limitation anti-spam, validation/normalisation serveur, journalisation minimale et mécanisme de consentement/notice approprié. Les vulnérabilités signalées par `npm audit` doivent être examinées et corrigées ou documentées avant la mise en production ; aucune mise à jour automatique n'est appliquée pendant la phase d'audit.

## 11. Analytics

Aucun analytics n'est présent. Installer uniquement après décision de mesure. Une solution légère et respectueuse de la vie privée (Plausible ou Umami auto-hébergé, selon l'infrastructure) suffit. Événements utiles : clic CV, clic GitHub/LinkedIn, clic WhatsApp/email, ouverture d'étude de cas, soumission réussie/échouée du formulaire. Ne pas collecter le contenu des messages.

## 12. Score actuel

| Domaine           |    Score /10 |
| ----------------- | -----------: |
| Positionnement    |            5 |
| Personal Branding |            5 |
| UX                |            7 |
| UI                |            7 |
| Copywriting       |            5 |
| SEO               |            4 |
| Accessibilité     |            6 |
| Performance       |            6 |
| Code              |            6 |
| Conversion        |            6 |
| **Total**         | **57 / 100** |

## 13. Problèmes priorisés

### P0 — bloquant

- Aucun bloquant de sécurité ou d'exécution identifié dans le périmètre audité. Le build de production n'a volontairement pas été lancé pour préserver le dépôt en lecture seule ; TypeScript passe.

### P1 — critique

1. Recentrer le positionnement, le hero et les services sur la conception de solutions et une trajectoire crédible vers la transformation digitale.
2. Transformer les projets clés en preuves : contexte, problème, rôle, solution, décisions, résultat documenté et liens vérifiés.
3. Réparer les fondations SEO : une seule description, métadonnées par route, H1 par page, image OG réelle, structured data et stratégie de rendu.
4. Rendre l'échec du formulaire visible et accessible ; clarifier le traitement des données et vérifier l'API.
5. Remettre le lint au vert avant tout nouveau développement.
6. Évaluer les 4 vulnérabilités de dépendances de production signalées par `npm audit`, en particulier l'alerte élevée concernant `react-router` 7.18.1, puis mettre à jour la chaîne de dépendances avec tests de non-régression.

### P2 — important

1. Ajouter routes/pages d'études de cas ou une présentation détaillée depuis les cartes, avec état correct pour les projets sans démo.
2. Ajouter état ARIA aux filtres, focus cohérent et vérification complète clavier/contrastes.
3. Remplacer l'image générique ANUBA et optimiser les captures de projets.
4. Corriger la documentation/références TanStack obsolètes, retirer les dépendances réellement inutiles après vérification.
5. Ajouter une couverture minimale de tests (routes, projet, formulaire) et un contrôle a11y.

### P3 — secondaire

1. Mettre en place des analytics sobres après arbitrage.
2. Ajouter contenu/insights à cadence soutenable.
3. Consolider un système de marque (favicon, OG, typographie réellement distribuée).

## 14. Architecture recommandée

```text
Accueil
├─ Hero : valeur métier + identité actuelle + CTA
├─ Capacités : solutions web/mobile, intégration, ERP/Odoo
├─ Réalisations sélectionnées (preuves)
├─ Trajectoire et expérience
├─ Vision : digitalisation des organisations africaines
└─ CTA contact

Réalisations
└─ Études de cas individuelles (ANUBA, KEINAGROUP, ANIEK & AYO, KBS)

À propos
├─ Parcours, principes de travail, expérience et formation
└─ Vision professionnelle

Contact
└─ Formulaire sécurisé, accessible, informations de traitement et canaux directs
```

La page Services peut demeurer si Jean propose activement ces services. Dans ce cas, elle doit être formulée par besoin et ses engagements doivent correspondre précisément au périmètre disponible. Ne pas créer une page « Expertise transformation digitale » qui présenterait une ambition comme un acquis.

## 15. Roadmap après validation

1. **Cadrage éditorial** : valider proposition de valeur, publics prioritaires, résultats réellement mesurables, rôle exact sur chaque projet et autorisations de publication.
2. **Fondations** : corriger lint, sémantique H1, erreurs de lien, traitement d'erreur formulaire, focus et notice de données ; ajouter les tests minimums.
3. **Recomposition** : réécrire hero, à propos, capacités et CTA ; construire les études de cas à partir des informations validées.
4. **SEO/partage** : métadonnées par route, canonical cohérent, OG réel, favicon, JSON-LD Person/ProfilePage, sitemap enrichi ; décider du pré-rendu si la visibilité le justifie.
5. **Qualité** : build, lint, tests, navigation clavier, audit axe/Lighthouse, vérification manuelle aux largeurs cibles et contrôle des liens/démos.
6. **Mesure et contenu** : activer analytics sobres si approuvés ; publier uniquement les études de cas/articles pouvant être maintenus.

## 16. Conclusion

Le portfolio possède un bon socle produit et des réalisations qui peuvent soutenir un positionnement plus fort. La priorité n'est pas de changer de stack ni d'ajouter des effets visuels : c'est de rendre visible une capacité déjà amorcée à comprendre des besoins, concevoir des solutions et intégrer des systèmes. La refonte doit rester progressive, étayée par des preuves et explicitement validée avant toute modification de code.

## 17. Validation de la phase 1

- Audit réalisé le 2 septembre 2026 en lecture du dépôt local.
- État Git observé : branche `main`, historique récent intact, `AUDIT.md` non suivi par Git avant cette mise à jour ; aucun autre changement local détecté.
- Commandes exécutées : `npm run lint` (échec, 43 erreurs Prettier), `npx tsc --noEmit` (réussi), `npm run build` (réussi), `npm audit --omit=dev --audit-level=low` (échec avec 4 vulnérabilités signalées).
- Aucun test navigateur, audit Lighthouse/Axe ou test de largeur réelle n'a été conclu : aucune page navigateur n'était partagée et aucun framework de test/audit n'est présent dans le dépôt. Ces vérifications restent requises en phase 2.
- Aucun fichier de code, configuration applicative ou dépendance n'a été modifié pendant cette phase.
