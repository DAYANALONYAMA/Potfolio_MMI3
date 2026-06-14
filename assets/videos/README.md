# 🎬 Dossier VIDÉOS

Mets tes vidéos de projets dans ce dossier.

## Format obligatoire
- **`.mp4` uniquement** (codec H.264)
- Les `.mov`, `.avi`, `.webm` ne marcheront pas sur tous les navigateurs

## Comment convertir une vidéo en MP4
1. Télécharge **HandBrake** : [handbrake.fr](https://handbrake.fr) (gratuit)
2. Ouvre ta vidéo
3. Preset **"Web Optimized"** ou **"Fast 1080p30"**
4. Format : MP4
5. Exporte

## Conseils
- **Durée** : 5-15 secondes (c'est une boucle au survol)
- **Résolution** : 1080p max
- **Poids** : 2-5 Mo par vidéo (sinon ton site sera lent)
- **Pas de son nécessaire** : la vidéo est silencieuse au survol

## Comment les utiliser

Dans `projects.js`, à la ligne `videoHover:` :

```
videoHover: "assets/videos/projet-1.mp4",
```

Si tu n'as pas de vidéo pour un projet, laisse `videoHover: ""` (chaîne vide).
