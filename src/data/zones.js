// ============================================================
// ZONES — chaque zone contient des régions + un donjon final.
// Zone 1 uniquement pour l'instant : on approfondit avant
// d'ajouter du contenu.
// ============================================================

export const ZONES = {
  aldenmoor: {
    key: "aldenmoor",
    name: "Les Prairies d'Aldenmoor",
    regions: [
      {
        key: "prairies_sauvages",
        name: "Prairies Sauvages",
        difficulty: "facile",
        desc: "Herbes hautes et fermes abandonnées — les premiers signes de troubles.",
        enemies: ["loup_des_plaines", "sanglier_sauvage", "bandit_des_routes"],
        miniBoss: "cavalier_dechu",
      },
      {
        key: "champs_calcines",
        name: "Champs Calcinés",
        difficulty: "intermédiaire",
        desc: "La corruption se voit désormais — terres brûlées, cultures pourries, ciel assombri.",
        enemies: ["squelette_fermier", "corbeau_charognard", "epouvantail_hante"],
        miniBoss: "epouvantail_ancestral",
      },
      {
        key: "lisiere_des_ombres",
        name: "Lisière des Ombres",
        difficulty: "difficile",
        desc: "À la frontière de la prairie et d'une forêt sombre, la magie corrompue est manifeste.",
        enemies: ["loup_garou", "esprit_errant", "chevalier_dechu"],
        miniBoss: "veilleur_corrompu",
      },
    ],
    dungeon: {
      key: "manoir_englouti",
      name: "Le Manoir Englouti",
      desc: "Ancien manoir seigneurial, siège du rituel qui a corrompu toute la région.",
      boss: "dame_en_deuil",
    },
  },
};

// ============================================================
// ENNEMIS — regroupés par région
// ============================================================

export const ENEMIES = {
  // --- Région 1 : Prairies Sauvages ---
  loup_des_plaines: { key: "loup_des_plaines", name: "Loup des plaines", desc: "Rapide, attaque en meute, dégâts physiques faibles mais nombreux." },
  sanglier_sauvage: { key: "sanglier_sauvage", name: "Sanglier sauvage", desc: "Tanky, charge puissante, dégâts physiques moyens." },
  bandit_des_routes: { key: "bandit_des_routes", name: "Bandit des routes", desc: "Arme simple, vole parfois de l'or." },
  cavalier_dechu: {
    key: "cavalier_dechu", name: "Le Cavalier Déchu", miniBoss: true,
    desc: "Ancien chevalier protecteur des prairies, corrompu. Coup chargé infligeant un debuff DEF, phase de rage à bas HP.",
  },

  // --- Région 2 : Champs Calcinés ---
  squelette_fermier: { key: "squelette_fermier", name: "Squelette de fermier", desc: "Mort-vivant lent mais résistant, armé d'une faux rouillée." },
  corbeau_charognard: { key: "corbeau_charognard", name: "Corbeau charognard", desc: "Vole, rapide, attaque en groupe, inflige un léger Poison." },
  epouvantail_hante: { key: "epouvantail_hante", name: "Épouvantail hanté", desc: "Statique puis s'anime, inflige des dégâts de Feu." },
  epouvantail_ancestral: {
    key: "epouvantail_ancestral", name: "L'Épouvantail Ancestral", miniBoss: true,
    desc: "Version massive et maléfique de l'épouvantail. Invoque des corbeaux, inflige Feu + Poison.",
  },

  // --- Région 3 : Lisière des Ombres ---
  loup_garou: { key: "loup_garou", name: "Loup-garou", desc: "Évolution corrompue du loup, rapide, dégâts physiques élevés, rage à bas HP." },
  esprit_errant: { key: "esprit_errant", name: "Esprit errant", desc: "Spectre, dégâts magiques qui ignorent une partie de la DEF Phys, inflige parfois Givre." },
  chevalier_dechu: { key: "chevalier_dechu", name: "Chevalier déchu", desc: "Ancien soldat corrompu, équilibre ATK/DEF, capacité de Feu noir." },
  veilleur_corrompu: {
    key: "veilleur_corrompu", name: "Le Veilleur Corrompu", miniBoss: true,
    desc: "Mi-spectre mi-chevalier, dégâts physiques et magiques, inflige Givre, invoque un esprit errant.",
  },

  // --- Donjon : Le Manoir Englouti ---
  dame_en_deuil: {
    key: "dame_en_deuil", name: "La Dame en Deuil", boss: true,
    desc: "Noble ayant invoqué une magie interdite pour ramener son époux (le Cavalier Déchu). Combat en 2 phases : magie/Givre, puis rituel final incontrôlable (Feu/Poison/Givre).",
  },
};
