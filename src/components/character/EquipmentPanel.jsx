import React from "react";
import SLOT_ICONS from "../icons/SlotIcons.jsx";
import BannerHeader from "../shared/BannerHeader.jsx";
import { color, border, radius } from "../../styles/theme.js";

const SLOT_LABELS = {
  chapeau: "Chapeau",
  cape: "Cape",
  plastron: "Plastron",
  amulette: "Amulette",
  gants: "Gants",
  ceinture: "Ceinture",
  anneau: "Anneau",
  jambieres: "Jambières",
  arme: "Arme",
  bouclier: "Bouclier",
};

// Disposition en silhouette — reprise de la V1, adaptée en grille CSS
// explicite pour plus de respiration sur un écran PC.
const GRID_LAYOUT = [
  [null, "chapeau", null],
  ["cape", "plastron", "amulette"],
  ["gants", "ceinture", "anneau"],
  [null, "jambieres", null],
  ["arme", null, "bouclier"],
];

function SlotButton({ slotKey, item, onEquipSlotClick, onUnequip }) {
  const icon = SLOT_ICONS[slotKey];
  const filled = !!item;

  return (
    <button
      onClick={() => (filled ? onUnequip(slotKey) : onEquipSlotClick(slotKey))}
      title={filled ? `${item.name} — clic pour retirer` : SLOT_LABELS[slotKey] || slotKey}
      style={{
        width: 64,
        height: 64,
        padding: 0,
        margin: 0,
        lineHeight: 0,
        appearance: "none",
        WebkitAppearance: "none",
        borderRadius: radius.md,
        background: filled ? color.panelRaised : color.panel,
        border: filled ? `1.5px solid ${color.gold}` : border,
        color: filled ? color.goldBright : color.mist,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s ease",
        boxShadow: filled ? "0 0 12px rgba(184,146,63,0.15)" : "none",
        position: "relative",
      }}
      onMouseEnter={(e) => { if (!filled) e.currentTarget.style.borderColor = color.lineBright; }}
      onMouseLeave={(e) => { if (!filled) e.currentTarget.style.borderColor = color.line; }}
    >
      {filled && item.img ? (
        <img src={item.img} alt={item.name} width="40" height="40" style={{ objectFit: "contain" }} />
      ) : (
        icon || <span style={{ fontSize: 10 }}>{SLOT_LABELS[slotKey]}</span>
      )}
    </button>
  );
}

export default function EquipmentPanel({ equipped, onEquipSlotClick, onUnequip }) {
  return (
    <div style={{ background: color.panel, borderRadius: radius.lg, border, overflow: "hidden" }}>
      <BannerHeader icon="🛡" title="Équipement" />

      <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        {GRID_LAYOUT.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 10 }}>
            {row.map((slotKey, ci) =>
              slotKey ? (
                <SlotButton
                  key={slotKey}
                  slotKey={slotKey}
                  item={equipped[slotKey]}
                  onEquipSlotClick={onEquipSlotClick}
                  onUnequip={onUnequip}
                />
              ) : (
                <div key={ci} style={{ width: 64, height: 64 }} />
              )
            )}
          </div>
        ))}
      </div>

      <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: color.blood, display: "inline-block" }} />
          <span style={{ fontSize: 12, color: color.parchmentDim, fontFamily: "'Cinzel', serif", letterSpacing: "0.03em" }}>
            RELIQUES
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          {["relique1", "relique2", "relique3", "relique4"].map((slotKey) => (
            <SlotButton
              key={slotKey}
              slotKey={slotKey}
              item={equipped[slotKey]}
              onEquipSlotClick={onEquipSlotClick}
              onUnequip={onUnequip}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
