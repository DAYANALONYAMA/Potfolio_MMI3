# 🎨 Portfolio de Dayana — Mode d'emploi

Bienvenue ! Ce dossier contient ton site portfolio. Voici comment l'utiliser, le modifier, et le mettre en ligne gratuitement.

---

## 📁 Les fichiers du projet

| Fichier | À quoi ça sert ? | À éditer ? |
|---|---|---|
| `index.html` | Structure de la page (hero, à propos, timeline, contact…) | Oui, pour personnaliser certains textes |
| `styles.css` | Design (couleurs, polices, animations) | Optionnel |
| `projects.js` | **La liste de tes projets** | OUI, c'est LE fichier à éditer |
| `assets/images/` | Tes images de projets | Tu y déposes tes `.jpg` ou `.png` |
| `assets/videos/` | Tes vidéos de projets | Tu y déposes tes `.mp4` |

---

## ✏️ Travailler avec VS Code

1. Ouvre VS Code
2. `Fichier → Ouvrir un dossier...` → choisis `portfolio/`
3. Tu verras tous les fichiers dans la barre de gauche
4. Édite, puis sauvegarde (`Ctrl + S`)

### 💡 Installe l'extension **Live Server**

C'est l'extension qui rafraîchit ton site automatiquement à chaque sauvegarde.

- Icône Extensions à gauche de VS Code → cherche "Live Server" (Ritwick Dey) → Install
- Clic-droit sur `index.html` → "Open with Live Server"

---

## ➕ Comment ajouter un projet

Tout se passe dans `projects.js`. Tu y verras des blocs comme :

```javascript
{
  id: 1,
  categorie: "alternance",
  titre: "Stratégie marque employeur",
  // ...
},
```

**Pour ajouter :**
1. Copie un bloc complet (du `{` jusqu'au `},`)
2. Colle-le à la suite
3. Change l'`id` (numéro suivant)
4. Remplis tes infos
5. N'oublie pas la virgule après `},`

**Catégories valides** (orthographe exacte) :
- `"alternance"` — AÉSIO, CPAM
- `"cours"` — projet tutoré, études UX, projets de cours
- `"personnel"` — projets perso, freelance, associatifs

---

## 🖼️ Ajouter une image

1. Mets ton image dans `assets/images/`
2. Dans `projects.js`, à `image:` mets : `"assets/images/nom-image.jpg"`

**Conseils :**
- Format `.jpg` (photos) ou `.png` (screens, logos)
- 1200px de large minimum
- Compresse sur [squoosh.app](https://squoosh.app) → moins de 300 Ko par image
- Noms simples : `projet-1.jpg`, pas `Mon Projet Été (final).JPG`

---

## 🎬 Ajouter une vidéo

1. Mets ta vidéo dans `assets/videos/`
2. Dans `projects.js`, à `videoHover:` mets : `"assets/videos/nom-video.mp4"`

La vidéo se joue **en boucle, sans son, au survol** de la carte. Si tu n'as pas de vidéo, laisse `videoHover: ""` (vide).

**Conseils :**
- **MP4 obligatoire** (codec H.264)
- 5-15 secondes (boucle courte)
- 1080p max
- Compresse avec **HandBrake** (gratuit, [handbrake.fr](https://handbrake.fr)) → preset "Web Optimized" → 2-5 Mo par vidéo

---

## 🔗 Ajouter un lien (vidéo complète, LinkedIn…)

La vidéo au survol est **muette** : c'est juste un teaser. Pour que la personne voie le **vrai projet avec le son**, ajoute un lien externe (Drive, LinkedIn, YouTube…). Il apparaît comme un beau bouton dans la fiche du projet, et une pastille "▶ Vidéo" s'affiche sur la carte.

Dans `projects.js`, à la ligne `liens:` :

```javascript
liens: [
  { label: "Voir la vidéo complète", url: "https://drive.google.com/..." },
  { label: "Voir sur LinkedIn", url: "https://www.linkedin.com/..." }
]
```

Tu peux mettre autant de liens que tu veux. Si aucun, laisse `liens: []`.

### ⚠️ Drive : règle bien le partage

Sur Google Drive, fais : clic-droit sur la vidéo → **Partager** → change "Accès restreint" en **"Tous les utilisateurs disposant du lien"** → **Copier le lien**. Sinon tes profs et les RH tomberont sur une demande d'accès.

### 💡 Alternative encore plus pro : YouTube non répertorié

Si tu veux un lecteur parfait, sans demande d'accès et avec le son nickel : mets ta vidéo sur YouTube en **"Non répertorié"** (visible seulement avec le lien, pas dans les recherches). Puis colle le lien dans `liens:`.

---

## 🌐 Mettre en ligne (gratuitement)

### Méthode rapide : **Netlify Drop**

1. Va sur **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Glisse le **dossier entier** `portfolio/` dans la zone
3. Tu obtiens une URL `https://random-name.netlify.app`
4. Envoie ce lien à tes profs et aux RH 🎉

### Garder le site en ligne (recommandé)

Crée un compte Netlify gratuit après le drop, ça te permet de :
- Renommer en `dayana-lonyama.netlify.app`
- Mettre à jour le site (re-glisser le dossier)

### Nom de domaine personnalisé

Si tu veux `dayanalonyama.fr` (~10€/an) :
1. Achète le domaine sur **OVH** ou **Gandi**
2. Dans Netlify : `Domain settings → Add custom domain`
3. SSL gratuit inclus

---

## 🆘 En cas de problème

**Page blanche / site ne s'affiche pas :**
- Vérifie dans `projects.js` qu'il n'y a pas de virgule manquante ou de guillemet oublié
- Ouvre la console du navigateur (F12) pour voir l'erreur

**Mes images ne s'affichent pas :**
- Vérifie l'orthographe du chemin (majuscules / accents / espaces comptent)
- Noms simples sans accents ni espaces

**Ma vidéo ne se joue pas :**
- Format MP4 (H.264) obligatoire
- Recompresse avec HandBrake si elle vient d'un iPhone

---

## 🎯 Checklist avant rendu

- [ ] Vérifier les textes dans `index.html` (à propos, timeline, expériences)
- [ ] Ajouter ton lien LinkedIn (dans la section contact)
- [ ] Compléter tous les `[À COMPLÉTER]` dans `projects.js` avec tes vrais chiffres
- [ ] Ajouter les liens Drive / LinkedIn dans `liens:` pour les projets vidéo
- [ ] Vérifier que les liens Drive sont bien en partage public ("Tous ceux qui ont le lien")
- [ ] Adapter les projets "cours" 6 et 7 avec tes vrais projets MMI
- [ ] Remplacer le projet 8 "personnel" par un vrai projet à toi
- [ ] Ajouter les vraies images et vidéos dans `assets/`
- [ ] Vérifier que les inspirations correspondent à ce que tu suis vraiment
- [ ] Tester sur ordinateur ET sur téléphone
- [ ] Déployer sur Netlify
- [ ] Envoyer le lien 🚀

Bonne soutenance !
