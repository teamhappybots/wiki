---
title: Battery safety & charging
description: Charging practice, storage voltage, balance, physical protection, and damaged-pack handling.
sidebar:
  order: 2
---

LiPo packs are the main workshop hazard in insect-class combat robotics. A
damaged or abused cell can vent flammable gas and ignite.

## Charging

- Use a **balance charger** and always plug in the **balance lead**.
- Charge at **1C** unless the manufacturer explicitly allows more. A 450 mAh
  pack → 0.45 A.[^batteryuniversity]
- Charge in a **fireproof container** (LiPo bag, ammo can, ceramic pot) on a
  non-flammable surface, never unattended, never overnight.
- Stop if a pack gets hot, puffs, or a cell reads oddly during balancing.
- Full charge is **4.20 V/cell**. Never exceed it.

## Storage

- Store at **3.8–3.85 V/cell** ("storage voltage"). Most chargers have a storage
  mode.[^batteryuniversity]
- Don't leave packs full for more than a day or two.
- Don't let a pack sit below **3.3 V/cell**; below ~3.0 V under no load it's
  likely damaged.
- Cool, dry, in a fire-safe container.

## Physical protection in the robot

- Mount the pack where weapon impacts and internal debris **can't reach it** —
  behind structure, not against thin armor.
- No hard points pressing into the pack; no fasteners that can puncture it under
  shock.
- Secure it so it can't come loose in a big hit (strap, tray, hook-and-loop
  plus a positive retainer).
- Route the discharge leads so they can't be cut or pinched.

## Damaged packs

- A pack that took a hit, was pierced, or puffed is **done** — do not charge it.
- Discharge a suspect pack slowly (e.g. through a resistive load or a
  salt-water bath per local guidance), then dispose of it at a battery
  recycler.
- Have a way to move a venting pack outside; a metal container with a lid helps.

Events require sane battery practice and will fail robots with exposed or
damaged packs at tech inspection.[^sparc]

## References

[^batteryuniversity]: Battery University (Cadex), [BU-808: How to Prolong Lithium-Based Batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries) — charge rate, full-charge and storage voltages, and failure modes.
[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — battery mounting, protection, and inspection requirements.
