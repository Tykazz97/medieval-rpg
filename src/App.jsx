import React, { useState } from "react";
import AppShell from "./components/layout/AppShell.jsx";
import CharacterSheet from "./components/character/CharacterSheet.jsx";
import ComingSoon from "./components/shared/ComingSoon.jsx";
import { usePlayer } from "./hooks/usePlayer.js";

const TAB_TITLES = {
  combat: "Combat",
  carte: "Carte du monde",
  forge: "Forge",
  sac: "Sac & Inventaire",
  journal: "Journal de quêtes",
};

export default function App() {
  const [activeTab, setActiveTab] = useState("personnage");
  const { player, stats, unequipSlot, addCaracPoint } = usePlayer();

  // Pour l'instant, cliquer sur un slot vide ne fait rien (pas encore
  // d'inventaire/items connectés) — sera branché à l'étape suivante.
  const handleEquipSlotClick = (slotKey) => {
    console.log("Slot cliqué (à connecter à l'inventaire) :", slotKey);
  };

  return (
    <AppShell active={activeTab} onChangeTab={setActiveTab}>
      {activeTab === "personnage" && (
        <CharacterSheet
          player={player}
          stats={stats}
          onEquipSlotClick={handleEquipSlotClick}
          onUnequip={unequipSlot}
          onAddCaracPoint={addCaracPoint}
        />
      )}
      {activeTab !== "personnage" && <ComingSoon title={TAB_TITLES[activeTab] || activeTab} />}
    </AppShell>
  );
}
