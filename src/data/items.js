// ============================================================
// ITEMS — équipement du jeu, organisé par set.
// Les 3 sets communs (Vétéran/Guerrier, Mage, Assassin) dropent
// dans toute la Zone 1, indépendamment des régions.
// ============================================================

const ICON_BASE = "/assets/icons/items";

export const ITEMS = {
  // ---------------------------------------------------------
  // SET VÉTÉRAN — Guerrier : DEF Phys / HP
  // ---------------------------------------------------------
  chapeau_veteran: {
    id: "chapeau_veteran",
    name: "Heaume du Vétéran",
    type: "chapeau",
    rarity: "commune",
    set: "veteran",
    img: `${ICON_BASE}/veteran/chapeau_veteran.png`,
    def_phys: 6,
    hp: 10,
  },
  plastron_veteran: {
    id: "plastron_veteran",
    name: "Cuirasse du Vétéran",
    type: "plastron",
    rarity: "commune",
    set: "veteran",
    img: `${ICON_BASE}/veteran/plastron_veteran.png`,
    def_phys: 12,
    hp: 20,
  },
  gants_veteran: {
    id: "gants_veteran",
    name: "Gantelets du Vétéran",
    type: "gants",
    rarity: "commune",
    set: "veteran",
    img: `${ICON_BASE}/veteran/gants_veteran.png`,
    def_phys: 4,
    atk_phys: 3,
  },
  ceinture_veteran: {
    id: "ceinture_veteran",
    name: "Ceinture du Vétéran",
    type: "ceinture",
    rarity: "commune",
    set: "veteran",
    img: `${ICON_BASE}/veteran/ceinture_veteran.png`,
    def_phys: 5,
    hp: 10,
  },
  jambieres_veteran: {
    id: "jambieres_veteran",
    name: "Jambières du Vétéran",
    type: "jambieres",
    rarity: "commune",
    set: "veteran",
    img: `${ICON_BASE}/veteran/jambieres_veteran.png`,
    def_phys: 6,
    hp: 10,
  },

  // ---------------------------------------------------------
  // SET APPRENTI — Mage : ATK Magie / Mana
  // ---------------------------------------------------------
  chapeau_apprenti: {
    id: "chapeau_apprenti",
    name: "Capuche de l'Apprenti",
    type: "chapeau",
    rarity: "commune",
    set: "apprenti",
    img: `${ICON_BASE}/apprenti/chapeau_apprenti.png`,
    atk_magie: 6,
    mana: 10,
  },
  plastron_apprenti: {
    id: "plastron_apprenti",
    name: "Robe de l'Apprenti",
    type: "plastron",
    rarity: "commune",
    set: "apprenti",
    img: `${ICON_BASE}/apprenti/plastron_apprenti.png`,
    atk_magie: 12,
    mana: 20,
  },
  gants_apprenti: {
    id: "gants_apprenti",
    name: "Gants de l'Apprenti",
    type: "gants",
    rarity: "commune",
    set: "apprenti",
    img: `${ICON_BASE}/apprenti/gants_apprenti.png`,
    atk_magie: 3,
    def_magie: 4,
  },
  ceinture_apprenti: {
    id: "ceinture_apprenti",
    name: "Ceinture de l'Apprenti",
    type: "ceinture",
    rarity: "commune",
    set: "apprenti",
    img: `${ICON_BASE}/apprenti/ceinture_apprenti.png`,
    atk_magie: 5,
    mana: 10,
  },
  jambieres_apprenti: {
    id: "jambieres_apprenti",
    name: "Bottes de l'Apprenti",
    type: "jambieres",
    rarity: "commune",
    set: "apprenti",
    img: `${ICON_BASE}/apprenti/jambieres_apprenti.png`,
    atk_magie: 6,
    mana: 10,
  },
};

export const ITEM_ORDER = Object.keys(ITEMS);

// ============================================================
// SETS — bonus cumulatifs selon le nombre de pièces équipées
// ============================================================

export const SETS = {
  veteran: {
    key: "veteran",
    name: "Harnois du Vétéran",
    color: "#c2603f",
    pieces: ["chapeau_veteran", "plastron_veteran", "gants_veteran", "ceinture_veteran", "jambieres_veteran"],
    bonuses: {
      2: { desc: "+10 DEF Physique, +20 HP", def_phys: 10, hp: 20 },
      5: { desc: "+25 DEF Physique, +60 HP, 15% de chance de riposte", def_phys: 25, hp: 60, riposte: 0.15 },
    },
  },
  apprenti: {
    key: "apprenti",
    name: "Robes de l'Apprenti",
    color: "#5fa3c4",
    pieces: ["chapeau_apprenti", "plastron_apprenti", "gants_apprenti", "ceinture_apprenti", "jambieres_apprenti"],
    bonuses: {
      2: { desc: "+10 ATK Magique, +20 Mana", atk_magie: 10, mana: 20 },
      5: { desc: "+25 ATK Magique, +60 Mana, 10% de chance qu'un sort ne consomme pas de mana", atk_magie: 25, mana: 60, manaFree: 0.10 },
    },
  },
};

// Calcule les bonus de set actifs à partir des items équipés
export function calcSetBonuses(equipped) {
  const results = [];
  for (const setDef of Object.values(SETS)) {
    const equippedIds = Object.values(equipped)
      .filter(Boolean)
      .map((item) => item.id);
    const count = setDef.pieces.filter((pieceId) => equippedIds.includes(pieceId)).length;

    // Le bonus actif est le plus haut palier atteint
    const thresholds = Object.keys(setDef.bonuses).map(Number).sort((a, b) => b - a);
    for (const threshold of thresholds) {
      if (count >= threshold) {
        results.push({ set: setDef, count, threshold, bonus: setDef.bonuses[threshold] });
        break;
      }
    }
  }
  return results;
}
