// ============================================================
// Icônes de slots — vraies images Ludo (utilisées en priorité).
// Fallback vers les SVG dessinés (SlotIcons.jsx) si absent.
//
// Fichiers réels dans /public/assets/icons/slots/ — Vite les sert
// directement à la racine, pas d'import ni de base64 inline.
// Ça garde le bundle JS léger même en ajoutant beaucoup d'assets.
// ============================================================

const BASE = "/assets/icons/slots";

const SLOT_LUDO_ICONS = {
  chapeau: `${BASE}/chapeau.png`,
  cape: `${BASE}/cape.png`,
  plastron: `${BASE}/plastron.png`,
  amulette: `${BASE}/amulette.png`,
  gants: `${BASE}/gants.png`,
  ceinture: `${BASE}/ceinture.png`,
  anneau: `${BASE}/anneau.png`,
  jambieres: `${BASE}/jambieres.png`,
  arme: `${BASE}/arme.png`,
  bouclier: `${BASE}/bouclier.png`,
  relique1: `${BASE}/relique1.png`,
  relique2: `${BASE}/relique2.png`,
  relique3: `${BASE}/relique3.png`,
  relique4: `${BASE}/relique4.png`,
};

export default SLOT_LUDO_ICONS;
