import { useState, useMemo, useCallback } from "react";
import { calcStats } from "../utils/calcStats.js";
import { ITEMS, ITEM_ORDER } from "../data/items.js";

const EMPTY_EQUIPPED = {
  chapeau: null, cape: null, plastron: null, amulette: null,
  gants: null, ceinture: null, anneau: null, jambieres: null,
  arme: null, bouclier: null,
  relique1: null, relique2: null, relique3: null, relique4: null,
};

// Inventaire de test — les items du Set Vétéran pour valider le flux
// équiper/déséquiper avant de brancher un vrai système de loot.
function testInventory() {
  return ITEM_ORDER.map((id, i) => ({ ...ITEMS[id], uid: `test-${i}` }));
}

function initialPlayer() {
  return {
    name: "Héros",
    level: 1,
    xp: 0,
    baseHp: 100,
    baseMana: 30,
    hp: 100,
    mana: 30,
    caracPoints: 0,
    caracs: { force: 0, intelligence: 0, agilite: 0, vitalite: 0, chance: 0, vitesse: 0 },
    equipped: { ...EMPTY_EQUIPPED },
    inventory: testInventory(),
    gold: 0,
  };
}

export function usePlayer() {
  const [player, setPlayer] = useState(initialPlayer);

  // Stats dérivées, recalculées seulement quand player change (évite le
  // recalcul à chaque render qui ralentissait l'ancienne version)
  const stats = useMemo(() => calcStats(player), [player]);

  const equipItem = useCallback((item) => {
    setPlayer((prev) => {
      const slot = item.type; // ex: "chapeau", "arme", ...
      return {
        ...prev,
        equipped: { ...prev.equipped, [slot]: item },
        inventory: prev.inventory.filter((i) => i.uid !== item.uid),
      };
    });
  }, []);

  const unequipSlot = useCallback((slotKey) => {
    setPlayer((prev) => {
      const item = prev.equipped[slotKey];
      if (!item) return prev;
      return {
        ...prev,
        equipped: { ...prev.equipped, [slotKey]: null },
        inventory: [...prev.inventory, item],
      };
    });
  }, []);

  const addCaracPoint = useCallback((caracKey) => {
    setPlayer((prev) => {
      if (prev.caracPoints <= 0) return prev;
      return {
        ...prev,
        caracPoints: prev.caracPoints - 1,
        caracs: { ...prev.caracs, [caracKey]: (prev.caracs[caracKey] || 0) + 1 },
      };
    });
  }, []);

  return { player, setPlayer, stats, equipItem, unequipSlot, addCaracPoint };
}

export { EMPTY_EQUIPPED };
