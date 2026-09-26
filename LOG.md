# Journal d'audit

## 2026-09-02

- **Action** : inspection initiale du dépôt, des instructions disponibles, de la documentation, de la stack, des routes, des composants, des données et des assets.
  **Fichiers concernés** : dépôt complet, notamment `README.md`, `package.json`, `src/`, `public/` et `vercel.json`.
  **Raison** : établir l'état réel du portfolio avant toute proposition de refonte.
  **Résultat** : SPA React 19 / TypeScript / Vite avec cinq routes, bilingue, sans framework de test identifié.
  **Tests effectués** : aucun à cette étape.

- **Action** : vérification Git et des commandes de qualité disponibles.
  **Fichiers concernés** : configuration et dépendances du projet.
  **Raison** : protéger les changements préexistants et produire des constats reproductibles.
  **Résultat** : branche `main`, `AUDIT.md` déjà non suivi ; lint en échec avec 43 erreurs Prettier, TypeScript et build réussis, audit des dépendances en échec avec 4 vulnérabilités de production.
  **Tests effectués** : `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm audit --omit=dev --audit-level=low`.

- **Action** : mise à jour du rapport d'audit et création de ce journal.
  **Fichiers concernés** : `AUDIT.md`, `LOG.md`.
  **Raison** : conserver les résultats vérifiés et les limites de la phase 1.
  **Résultat** : diagnostic, priorités, architecture cible et validation de phase documentés.
  **Tests effectués** : contrôle documentaire et vérification Git après édition.

## 2026-09-02 — Phase 2

- **Action** : stabilisation des fondations techniques avant la refonte UX/UI.
  **Fichiers concernés** : `index.html`, `public/favicon.svg`, `public/sitemap.xml`, `src/App.tsx`, `src/components/Section.tsx`, `src/components/ProjectCard.tsx`, `src/routes/index.tsx`, `src/routes/projects.tsx`, `src/routes/contact.tsx`, `src/i18n/translations.ts`, ainsi que le formatage de `eslint.config.js`, `src/hooks/use-reveal.ts` et `src/routes/services.tsx`.
  **Raison** : corriger les erreurs de lint, les H1 manquants, les interactions et messages accessibles, les liens de projet sans destination et les métadonnées techniques évidentes.
  **Résultat** : lint valide ; une seule description ; titres, canonical et métadonnées sociales adaptés à chaque route côté client ; favicon ; sitemap enrichi ; H1 unique par page ; filtres de projets annoncés ; formulaire avec erreurs accessibles et réessai ; ancres absentes supprimées.
  **Tests effectués** : `npm run lint`, `npx tsc --noEmit`, `npm run build` (succès). Le premier build a été bloqué par le sandbox (`spawn EPERM`) puis validé hors sandbox.

## 2026-09-02 — Phase 3

- **Action** : repositionnement UX/UI et copywriting sans refonte du système visuel.
  **Fichiers concernés** : `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/data/services.ts`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/services.tsx`, `src/i18n/translations.ts` et `src/App.tsx`.
  **Raison** : faire passer la valeur métier avant la stack tout en présentant l'intégration, l'ERP/Odoo et la transformation digitale comme une trajectoire crédible.
  **Résultat** : hero orienté besoin de digitalisation ; trois axes de contribution ; réalisations conservées ; trajectoire et vision explicites ; contenus FR/EN ; style visuel et animations légères conservés.
  **Tests effectués** : `npm run lint`, `npx tsc --noEmit`, `npm run build` (sortie de production contenant le nouveau contenu vérifiée).

## 2026-09-26 — Phase 4 : Refonte Visuelle & Architecture One-Page

- **Action** : refonte visuelle et structurelle complète du portfolio personnel en landing page one-page (`#home`, `#about`, `#services`, `#stack`, `#projects`, `#contact`).
  **Fichiers concernés** :
  - `src/styles.css` : implémentation du système de tokens Dark (référence historique, `#020917`) et Light (déclinaison authentique avec `#020917` en premier plan et `#f8fafc` en fond), scroll-padding-top, scrollbars adaptatives, typographie Plus Jakarta Sans / Inter.
  - `index.html` : préchargement Google Fonts, script inline anti-FOUC pour la persistance du thème.
  - `src/context/ThemeContext.tsx` : contexte et hook `useTheme` avec persistance `localStorage` (`site.theme`) et synchronisation de l'attribut `data-theme`.
  - `src/components/Navbar.tsx` : header moderne avec navigation par ancres fluides, ScrollSpy automatique (`useActiveSection`), toggle Dark/Light avec icônes Sun/Moon, sélecteur de langue EN/FR et menu mobile responsive sans overflow.
  - `src/components/Hero.tsx` : hero orienté valeur et impact métier, statut de disponibilité dynamique, badges de compétences clés, portrait encadré sobrement et CTAs directes.
  - `src/components/AboutSection.tsx` : section humaine et professionnelle intégrant parcours, 3 piliers d'ingénierie, roadmap de trajectoire en 6 étapes et repères d'expérience.
  - `src/components/ServicesSection.tsx` : 4 services structurés autour des problèmes résolus (Application Development, Business Digitalization, Systems Integration, ERP Architecture).
  - `src/components/StackSection.tsx` : architecture de compétences structurée en 5 domaines (Frontend, Backend, Mobile, Database, Tools & Infra).
  - `src/components/ProjectsSection.tsx` & `src/components/ProjectCard.tsx` : mini études de cas structurées (Contexte, Solution, Rôle, Stack, Résultat) avec filtres par catégorie et liens directs.
  - `src/components/ContactSection.tsx` : formulaire accessible connecté au backend Render, coordonnées directes (WhatsApp, Email, Lomé) et téléchargement direct du CV.
  - `src/components/Footer.tsx` : footer épuré avec navigation par ancres et liens professionnels.
  - `src/routes/index.tsx` & `src/App.tsx` : assemblage de la page one-page, redirection des anciennes URLs vers leurs ancres correspondantes, métadonnées bilingues.
    **Raison** : répondre à l'ensemble des exigences de la mission de refonte visuelle tout en respectant strictement la stack, les couleurs définies et la charte technique.
    **Tests effectués** :
  - TypeScript compilation : `npx tsc --noEmit` -> Code 0 (0 erreur).
  - Linting et formatage : `npm run lint` & `npm run format` -> Code 0 (0 erreur).
  - Production build : `npm run build` -> Code 0 (Vite v7.3.6 production bundle généré en 10s).
  - Serveur de dev et réponse HTTP : `http://localhost:5175/` -> Status 200 OK.

## 2026-09-26 — Phase 5 : Épuration Radicale (~2/3 de texte en moins) & Signature Visuelle Three.js

- **Action** : ajustement majeur de la refonte vers une direction artistique minimaliste, visuelle et premium (« montrer davantage et expliquer moins »).
  **Fichiers concernés** :
  - `package.json` : ajout maîtrisé de `three` et `@types/three` (sans bibliothèques d'animation additionnelles).
  - `src/components/ThreeCanvas.tsx` : composant 3D interactif représentant un système dynamique (maillage icosaèdre + nuage de nœuds constellation), réactif à la souris, adaptable au thème (Dark/Light), avec limitation du pixel ratio, gestion du resize et respect de `prefers-reduced-motion`.
  - `src/components/Hero.tsx` : composition très aérée (Nom, Titre, phrase courte percutante, 2 CTAs, canvas 3D et portrait intégré sobrement).
  - `src/components/AboutSection.tsx` : suppression des longs blocs narratifs et de la roadmap lourde, passage à une formule condensée + 3 cartes principes + 3 repères clés.
  - `src/components/ServicesSection.tsx` : passage à 4 blocs concis et percutants (Applications, Digitalisation, Intégration, Architecture) lisibles en 3 secondes.
  - `src/components/StackSection.tsx` : matrice graphique compacte en 5 catégories (Frontend, Backend, Mobile, Data, Tools) sans texte verbeux.
  - `src/components/ProjectCard.tsx` & `src/components/ProjectsSection.tsx` : passage au ratio 70% visuel / 30% texte. Suppression des blocs descriptifs lourds (Contexte, Solution, Rôle, Résultat) au profit d'un teaser visuel fort, d'une phrase claire, des tags de stack et d'un lien direct.
  - `src/components/ContactSection.tsx` : formulaire compact et coordonnées directes épurées.
  - `src/components/Navbar.tsx` : épuration des indicateurs superflus, navigation minimale avec contrôles discrets de langue et de thème.
    **Raison** : corriger la densité textuelle excessive, offrir un espace négatif généreux et apporter une signature visuelle technique et vivante via Three.js.
    **Tests effectués** :
  - TypeScript compilation : `npx tsc --noEmit` -> Code 0 (0 erreur).
  - Linting et formatage : `npm run lint` & `npm run format` -> Code 0 (0 erreur).
  - Production build : `npm run build` -> Code 0 (Vite v7.3.6 production bundle généré en 12.77s).
  - Serveur de dev et réponse HTTP : `http://localhost:5175/` -> Status 200 OK.

## 2026-09-26 — Phase 6 : Curseur Personnalisé & Background Animé Architectural

- **Action** : ajout de deux éléments de signature visuelle discrets, haut de gamme et techniques (curseur personnalisé fluide et arrière-plan architectural animé subtil).
  **Fichiers concernés** :
  - `src/components/CustomCursor.tsx` : curseur minimal en CSS/React (point central + anneau extérieur avec amorti `lerp`), état interactif discret au survol des liens/boutons/cartes, désactivé sur les écrans tactiles (`pointer: fine`), masqué hors fenêtre et respectueux de `prefers-reduced-motion` (sans bibliothèque tierce).
  - `src/components/AnimatedBackground.tsx` : arrière-plan architectural Canvas 2D ultra-léger représentant des nœuds et lignes de structure système très espacés, dérive imperceptible, opacité infime (0.02 à 0.05), pause automatique si l'onglet est inactif et gel statique sous `prefers-reduced-motion`.
  - `src/App.tsx` : intégration globale du curseur et du background animé avec gestion rigoureuse des plans (`z-0` pour l'arrière-plan, `z-10` pour le contenu, `z-50` pour le curseur).
  **Raison** : renforcer l'identité visuelle de développeur sérieux et d'ingénierie logicielle sans distraire l'utilisateur ni concurrencer l'animation Three.js du Hero.
  **Tests effectués** :
  - TypeScript compilation : `npx tsc --noEmit` -> Code 0 (0 erreur).
  - Linting et formatage : `npm run lint` & `npm run format` -> Code 0 (0 erreur).
  - Production build : `npm run build` -> Code 0 (Vite v7.3.6 production bundle généré en 12.22s).
  - Serveur de dev et réponse HTTP : `http://localhost:5175/` -> Status 200 OK.

