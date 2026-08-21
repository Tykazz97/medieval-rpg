// ============================================================
// ALDENMOOR — DESIGN TOKENS
// Palette héraldique sombre : or vieilli + sang + parchemin
// ============================================================

export const color = {
  // Surfaces
  void: "#0a0a0f",        // fond général, le plus profond
  panel: "#14141f",       // surface de panneau standard
  panelRaised: "#1c1c2b", // surface survolée / active
  line: "#2a2a3d",        // bordures, séparateurs
  lineBright: "#3a3a52",  // bordure au survol

  // Accents
  gold: "#b8923f",        // accent primaire, héraldique/royal
  goldBright: "#d9b568",  // or au survol / actif
  blood: "#8c2a2a",       // danger, combat, HP
  bloodBright: "#b03a3a",

  // Texte
  parchment: "#d9d0bd",   // texte principal
  parchmentDim: "#a89f8c",// texte secondaire
  mist: "#74748a",        // texte tertiaire / désactivé

  // Types de dégâts (cohérent dans toute l'app)
  phys: "#c2603f",   // physique — rouille/fer
  mag: "#7c6fd9",    // magique — arcane violet
  fire: "#e0742f",   // feu
  poison: "#6f9c4a", // poison
  frost: "#5fa3c4",  // givre

  // États
  success: "#5c9c5c",
  danger: "#b03a3a",
};

export const font = {
  display: "'Cinzel', serif",       // titres, bannières — usage restreint
  body: "'Inter', sans-serif",      // UI, texte courant
  data: "'JetBrains Mono', monospace", // chiffres, stats
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 14,
};

export const shadow = {
  panel: "0 4px 24px rgba(0,0,0,0.4)",
  raised: "0 2px 10px rgba(0,0,0,0.5)",
  glowGold: "0 0 16px rgba(184,146,63,0.25)",
};

// Raccourci pratique pour les bordures fines cohérentes
export const border = `1px solid ${color.line}`;
export const borderBright = `1px solid ${color.lineBright}`;
