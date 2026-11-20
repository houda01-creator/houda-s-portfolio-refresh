# Mise à jour du portfolio

## 1. Nom en majuscules
Remplacer « Es-Seyouri » par « ES-SEYOURI » partout (menu, haut de page, pied de page, titre de l'onglet et aperçu de partage).

## 2. Disponibilité : décembre 2026
- Badge, titre principal (« Business Developer en alternance dès décembre 2026 »), parcours EDC (« Alternance dès déc. 2026 ») et description de la page.

## 3. Outils synchronisés avec le CV (ordre du CV)
Pack Office · SAP / ERP · Google Analytics · Canva · Figma · Stitch · Framer · Replit · CapCut · WordPress · CRM · SEO / SEA · Notion · Trello · Outils d'IA
(« Social Media », « Content Creation & Strategy » et « Data Analytics » sont retirés du bandeau d'outils : ce sont des compétences, déjà présentes ailleurs.)

## 4. Photos retirées, plus de mouvement
- Retrait du portrait en haut et de la photo Enactus ; la partie haute redevient pleine largeur avec les chiffres en dessous.
- Animations ajoutées :
  - défilement parallaxe des formes décoratives en arrière-plan (haut de page et section Enactus) ;
  - apparitions en cascade plus fluides des cartes de projets, compétences et certifications ;
  - fine barre de progression de lecture en haut de l'écran ;
  - transitions douces au survol des cartes et boutons.
  - Tout reste désactivé si l'appareil demande moins d'animations.

## 5. Couleurs plus professionnelles et contrastées
Nouvelle palette : fond ivoire clair, texte bleu nuit profond, accent bordeaux/terracotta plus sobre, section Enactus en bleu nuit. Contraste du texte renforcé.

## 6. Loisirs
Ajouter : Écouter de la musique, Lire des œuvres, Cuisiner, Déguster de nouvelles cuisines.

## Détails techniques
- Texte dans `src/data/portfolio.ts` ; `lastName: "ES-SEYOURI"`, `availability`, `tools`, `hobbies`, `education[0].note` ; meta dans `src/routes/index.tsx` et `__root.tsx`.
- Supprimer les pointeurs de photos (`lovable-assets delete`) et les classes portrait.
- Parallaxe : petit hook `useParallax` (requestAnimationFrame, variable CSS `--py`) ; barre de progression via CSS `animation-timeline: scroll()` avec repli.
- Palette via les jetons oklch de `src/styles.css`.
- Mettre à jour la mémoire (déc. 2026, palette) et lancer les tests.
