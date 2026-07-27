# Jean — Portfolio React

Ce projet est un site portfolio moderne construit avec React, TypeScript, Vite et Tailwind CSS.

## Description

Le site présente une page d'accueil composée de sections : héros, présentation, services, projets, compétences, et un CTA final avant le footer.

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Router DOM
- Lucide React
- Zod
- ESLint + Prettier

## Structure principale

- `src/App.tsx` : point d'entrée principal de l'application React.
- `src/main.tsx` : bootstrap de l'application.
- `src/routes/index.tsx` : page d'accueil et sections principales.
- `src/components/` : composants réutilisables (Navbar, Hero, Section, ProjectCard, ServiceCard, Footer, etc.).
- `src/data/` : données des projets, services et compétences.
- `src/i18n/` : gestion des traductions et de la langue.

## Section CTA

La section CTA entre la section des compétences et le footer se trouve dans :

- `src/routes/index.tsx`

## Commandes utiles

- `npm install` : installe les dépendances.
- `npm run dev` : lance le serveur de développement.
- `npm run build` : génère la version de production.
- `npm run preview` : prévisualise le build de production.
- `npm run lint` : lance ESLint sur le projet.
- `npm run format` : formate le code avec Prettier.

## Setup

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Ouvrez le navigateur sur `http://localhost:5173`.

## Notes

La configuration Vite est définie dans `vite.config.ts` avec le plugin React, Tailwind CSS et le support de chemins TypeScript.
