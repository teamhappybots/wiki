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
- **Set the right chemistry.** LiPo and LiHV are different modes. Charging a
  LiPo on the LiHV setting overcharges it — a fire risk; charging a LiHV on the
  LiPo setting just stops it short of full.[^b4d]
- Charge at **1C** (capacity in amps — an 850 mAh pack → 0.85 A). Higher is
  possible in a pinch but shortens pack life; stay at 1–2C.[^batteryuniversity][^b4d]
- Charge in a **fireproof container** (LiPo bag, ammo can, ceramic pot) on a
  non-flammable surface, never unattended, never overnight.
- Stop if a pack gets hot, puffs, or a cell reads oddly during balancing.
- Full charge is **4.20 V/cell** for LiPo, **4.35 V/cell** for LiHV. Never
  exceed it.

## Storage

- Store at **~3.8 V/cell** ("storage voltage"). Most chargers have a storage
  mode. Don't leave packs plugged into the robot or charger.[^b4d]
- Don't leave packs full for more than a day or two.
- Don't discharge a cell below **3.3 V** in use; below ~3.0 V it likely has
  damage, and below ~2.6 V dispose of the pack.[^b4d]
- Measure **each cell** at the balance lead, not just the pack total — one cell
  can collapse while the others look fine.
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
- Discharge a suspect pack slowly (a small resistive load over days, or a
  salt-water bath over weeks), then dispose of it at a battery recycler. Never
  the household trash.[^b4d]
- Have a way to move a venting pack outside — this is what the LiPo bag is for.
  Lithium fires can't be put out by normal means; get the pack out and let it
  burn. The white smoke is dense and toxic; don't breathe it.[^b4d]

Events require sane battery practice and will fail robots with exposed or
damaged packs at tech inspection.[^sparc]

## References

[^batteryuniversity]: Battery University (Cadex), [BU-808: How to Prolong Lithium-Based Batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries) — charge rate, full-charge and storage voltages, and failure modes.
[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — battery mounting, protection, and inspection requirements.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Section: Testing & Safety → LiPo Battery Safety.
