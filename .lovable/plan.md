
## Garder l'embed Cal.com sur la page principale

Au lieu de rediriger vers `/reservation`, le calendrier Cal.com s'affichera directement dans la section des offres, sous les cartes, quand l'utilisateur clique sur "Reserver un creneau".

### Fonctionnement

1. Au clic sur "Reserver un creneau", un state `activeCalEmbed` stocke l'ID de l'offre selectionnee
2. Une iframe Cal.com apparait sous les cartes d'offres, avec un scroll automatique vers l'embed
3. Un bouton "Fermer" permet de masquer l'iframe
4. L'iframe s'adapte automatiquement a la hauteur du contenu via un `postMessage` listener (Cal.com envoie des events de resize) ou une hauteur generique suffisante

### Modifications techniques

**`src/components/OffersSection.tsx`**
- Ajouter un state `activeCalEmbed: string | null` pour controler l'affichage de l'iframe
- Au clic sur "Reserver un creneau", setter ce state au lieu de naviguer vers `/reservation`
- Afficher l'iframe Cal.com sous les cartes quand `activeCalEmbed` est actif
- Utiliser `useRef` + `scrollIntoView` pour scroller vers l'embed
- Ecouter les messages `postMessage` de Cal.com pour adapter dynamiquement la hauteur de l'iframe (fallback a une hauteur min de 700px)
- Supprimer l'import de `useNavigate`

**Nettoyage optionnel**
- La page `/reservation` et sa route dans `App.tsx` peuvent etre conservees ou supprimees (pas critique)
