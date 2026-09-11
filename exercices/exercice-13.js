/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" 
 * ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
// standard general-purpose formula for for generating a random integer between any two bounds  Math.floor(Math.random() * (max - min + 1)) + min

function genererMotDePasse(longueur)
{
    let passwd = ""
    for(let i = 1 ; i <= longueur ; i++)
    {
        let random = Math.floor(Math.random()*10)
        if(i%2 == 0)
            passwd = passwd + "A" 
        else
            passwd = passwd + random
    }
    return passwd
}
console.log(genererMotDePasse(8))