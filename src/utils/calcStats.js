import { applyCaracEffects } from "../data/caracs.js";

// ============================================================
// Calcule les stats finales d'un joueur = base + caracs + équipement
// Le joueur (player) a la forme :
// {
//   level, baseHp, baseMana,
//   caracs: { force, intelligence, agilite, vitalite, chance, vitesse },
//   equipped: { chapeau: item|null, plastron: item|null, ... }
// }
// Chaque item d'équipement peut porter : atk_phys, atk_magie, def_phys,
// def_magie, hp, mana, esquive, critique, dropBonus, vitesse
// ============================================================

const EQUIP_STAT_KEYS = [
  "atk_phys", "atk_magie", "def_phys", "def_magie",
  "hp", "mana", "esquive", "critique", "dropBonus", "vitesse",
];

export function calcStats(player) {
  const caracBonus = applyCaracEffects(player.caracs || {});

  const equip = { atk_phys: 0, atk_magie: 0, def_phys: 0, def_magie: 0, hp: 0, mana: 0, esquive: 0, critique: 0, dropBonus: 0, vitesse: 0 };
  const equipped = player.equipped || {};
  for (const item of Object.values(equipped)) {
    if (!item) continue;
    for (const key of EQUIP_STAT_KEYS) {
      if (item[key]) equip[key] += item[key];
    }
  }

  return {
    atkPhys: (caracBonus.atkPhys || 0) + equip.atk_phys,
    atkMagie: (caracBonus.atkMagie || 0) + equip.atk_magie,
    defPhys: equip.def_phys, // DEF uniquement via équipement
    defMagie: equip.def_magie,
    maxHp: (player.baseHp || 100) + (caracBonus.maxHpBonus || 0) + equip.hp,
    manaMax: (player.baseMana || 30) + (caracBonus.manaMax || 0) + equip.mana,
    esquive: Math.min(75, (caracBonus.esquive || 0) + equip.esquive),
    critique: Math.min(75, (caracBonus.critique || 0) + equip.critique),
    dropBonus: (caracBonus.dropBonus || 0) + equip.dropBonus,
    vitesse: (caracBonus.vitesse || 10) + equip.vitesse,
    paMax: 6, // base fixe, non modifiable par caracs pour l'instant
  };
}
