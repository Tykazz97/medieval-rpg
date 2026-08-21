import React from "react";
import BannerHeader from "../shared/BannerHeader.jsx";
import { CARACS, CARAC_ORDER } from "../../data/caracs.js";
import { color, border, radius, font } from "../../styles/theme.js";

function CaracRow({ carac, value, canAdd, onAdd }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", background: color.panel, borderRadius: radius.md, border,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: carac.color, display: "inline-block" }} />
          <span style={{ fontWeight: 600, fontSize: 13, color: color.parchment }}>{carac.label}</span>
        </div>
        <div style={{ fontSize: 11, color: color.mist, marginTop: 2, marginLeft: 16 }}>{carac.desc}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: font.data, fontSize: 16, fontWeight: 700, color: color.parchment, minWidth: 20, textAlign: "right" }}>
          {value}
        </span>
        <button
          disabled={!canAdd}
          onClick={onAdd}
          style={{
            width: 26, height: 26, borderRadius: radius.sm,
            background: canAdd ? color.gold : color.panelRaised,
            color: canAdd ? color.void : color.mist,
            border: "none", fontWeight: 700, fontSize: 14,
            cursor: canAdd ? "pointer" : "not-allowed",
            opacity: canAdd ? 1 : 0.5,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

function StatCell({ label, value, color: c }) {
  return (
    <div style={{ background: color.panel, borderRadius: radius.sm, border, padding: "8px 10px" }}>
      <div style={{ fontSize: 10, color: color.mist, marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ fontFamily: font.data, fontSize: 17, fontWeight: 700, color: c || color.parchment }}>{value}</div>
    </div>
  );
}

export default function StatsPanel({ player, stats, onAddCaracPoint }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Caractéristiques */}
      <div style={{ background: color.panel, borderRadius: radius.lg, border, overflow: "hidden" }}>
        <BannerHeader
          icon="📊"
          title="Caractéristiques"
          right={player.caracPoints > 0 ? `${player.caracPoints} point${player.caracPoints > 1 ? "s" : ""} disponible${player.caracPoints > 1 ? "s" : ""}` : "Aucun point disponible"}
        />
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          {CARAC_ORDER.map((key) => (
            <CaracRow
              key={key}
              carac={CARACS[key]}
              value={player.caracs[key] || 0}
              canAdd={player.caracPoints > 0}
              onAdd={() => onAddCaracPoint(key)}
            />
          ))}
        </div>
      </div>

      {/* Stats de combat calculées */}
      <div style={{ background: color.panel, borderRadius: radius.lg, border, overflow: "hidden" }}>
        <BannerHeader icon="⚔" title="Stats de combat" />
        <div style={{ padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <StatCell label="ATK Physique" value={stats.atkPhys} color={color.phys} />
          <StatCell label="ATK Magique" value={stats.atkMagie} color={color.mag} />
          <StatCell label="DEF Physique" value={stats.defPhys} color={color.phys} />
          <StatCell label="DEF Magique" value={stats.defMagie} color={color.mag} />
          <StatCell label="HP max" value={stats.maxHp} color={color.blood} />
          <StatCell label="Mana max" value={stats.manaMax} color={color.frost} />
          <StatCell label="Esquive" value={`${stats.esquive.toFixed(0)}%`} color={color.success} />
          <StatCell label="Critique" value={`${stats.critique.toFixed(1)}%`} color={color.gold} />
          <StatCell label="Vitesse" value={stats.vitesse} color={color.frost} />
          <StatCell label="PA / tour" value={stats.paMax} color={color.goldBright} />
          <StatCell label="Bonus Drop" value={`+${stats.dropBonus.toFixed(1)}%`} color={color.gold} />
        </div>
      </div>
    </div>
  );
}
