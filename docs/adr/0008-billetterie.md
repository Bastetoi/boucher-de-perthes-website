# 0008 – Billetterie par liens externes
Statut : accepted (plateforme confirmée)

## Décision proposée
Chaque représentation porte un `ticketUrl` pointant vers une plateforme externe **AssoConnect** (module billetterie). Le site n'encaisse rien et ne stocke aucune donnée personnelle. Bouton « Réserver » mis en avant ; état « complet » / « terminé » géré par champ `status`.

## Conséquences
- Un lien AssoConnect par représentation (une page de billetterie par date, ou une par spectacle : à confirmer).
- La page AssoConnect s'ouvre dans un nouvel onglet (`rel="noopener"`) ; pas d'iframe en v1.

## Question ouverte
Une billetterie AssoConnect par date ou par spectacle ? (impacte le champ `ticketUrl`)
