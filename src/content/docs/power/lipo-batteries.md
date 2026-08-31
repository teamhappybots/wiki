---
title: LiPo & LiHV batteries
description: Cell count, LiHV vs LiPo, capacity, C-rating, sag, and sizing a pack for drive plus weapon current.
sidebar:
  order: 1
---

Lithium-polymer is the default combat chemistry: high power density, high
discharge rate, cheap. Li-ion (18650/21700) appears where energy density matters
more than peak current; LiFePO₄ is rare in insect classes.

## LiPo vs LiHV

Most current beetleweight packs are **LiHV** (high-voltage lithium-polymer), not
standard LiPo. LiHV cells charge to a higher voltage — **4.35 V/cell** vs
4.20 V — and sit at 3.8 V nominal, so a LiHV pack delivers more energy and power
for the same size and is generally preferred.[^b4d]

> Set the correct chemistry on your charger. Charging a LiPo pack on the LiHV
> setting overcharges it and can start a fire; charging a LiHV pack on the LiPo
> setting just leaves it partly full.[^b4d]

## Nomenclature

- **S** — cells in series. Sets voltage. LiPo: `V_full = 4.2 × S`. LiHV:
  `V_full = 4.35 × S`. A 4S LiHV pack is 15.2 V nominal, 17.4 V full.
- **P** — cells in parallel. Multiplies capacity and current. Rare in
  insect-size packs.
- **Capacity (mAh / Ah)** — charge stored. An 850 mAh pack delivers 0.85 A for
  one hour, or ~51 A for one minute.
- **C-rating** — claimed max discharge as a multiple of capacity.
  `I_max = C × capacity`. Manufacturers heavily overstate this; it is only
  useful for comparing packs **from the same maker**.[^b4d]
- **Watt-hours (Wh)** — total energy, `V_nominal × Ah`. The right number when
  comparing packs across voltages: swapping to a higher S at the same Wh (and a
  proportionally lower motor Kv) gives the same power at lower current.

## Sizing

1. **Voltage (S):** beetleweights run **3S–6S**. Higher S = lower current for
   the same power = thinner wire and less sag, at the cost of cell mass and
   higher-voltage electronics. 4S is the common baseline.[^b4d]
2. **Peak current:** `I_peak ≈ weapon_spinup_current + drive_stall_current`.
   Weapon spin-up dominates; drive draw is small by comparison.
3. **C-rating:** pick a pack whose *real* sustained capability (well below the
   label) exceeds `I_peak`. A pack run near its rating sags hard and heats up.
4. **Capacity for endurance:** size so you use **≤ 70–80%** of the pack over a
   3-minute match. Deep-cycling every match kills packs fast.[^runamok][^batteryuniversity]
5. **Mass:** energy density is ~150–180 Wh/kg. Beetleweight packs are commonly
   **8–12%** of robot mass — see [Weight budgeting](/fundamentals/weight-budgeting/).

### Typical picks (beetleweight)

| Robot | Pack |
| --- | --- |
| Wedge / lifter / grabber (no spinner) | 3S–4S, ≥450 mAh, C-rating not critical |
| Spinner — baseline | **4S 850 mAh** |
| Big horizontal, beater bar, or unusually fast weapon | 4S 1100 mAh, or higher S at equal Wh |

GNB / Gaoneng LiHV packs above ~60C are the common go-to for price and
availability; the plain 60C ("purple") packs can't feed most spinners. Tattu,
Palm Beach Bots, BetaFPV Lava, and Bonka are other known-good brands.[^b4d]

## Sag

Under load, terminal voltage drops (internal resistance × current). Symptoms of
too much sag: slow weapon spin-up, ESC low-voltage cutoff mid-match, brownout
resets of the receiver. Fixes: higher C-rating, higher capacity, higher S (lower
current), shorter/thicker [wiring](/power/wiring/), better [connectors](/power/connectors/).

## Health and retirement

Retire a pack when it puffs ("spicy pillow"), a cell drifts >0.05 V from its
siblings at rest, internal resistance climbs, or it can't hold full charge. See
[Battery safety &amp; charging](/power/battery-safety/).

## References

[^runamok]: [Team Run Amok](https://runamok.tech/) — the [Tentacle Torque & Amp-Hour Calculator](https://runamok.tech/squid/newtorquecalc.htm) estimates match current draw and required pack capacity.
[^batteryuniversity]: Battery University (Cadex), [BU-808: How to Prolong Lithium-Based Batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries) — charge/discharge limits, depth-of-discharge, and cycle life.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Electronics & Wiring → Batteries; Testing & Safety → LiPo Battery Safety.
