---
title: LiPo batteries
description: Cell count, capacity, C-rating, sag, and sizing a pack for drive plus weapon current.
sidebar:
  order: 1
---

Lithium-polymer (LiPo) is the default combat chemistry: high power density, high
discharge rate, cheap. Li-ion (18650/21700) appears where energy density matters
more than peak current; LiFePO₄ is rare in insect classes.

## Nomenclature

- **S** — cells in series. Sets voltage: `V_nominal = 3.7 × S`, `V_full = 4.2 × S`.
  2S = 7.4 V nominal, 3S = 11.1 V, 4S = 14.8 V.
- **P** — cells in parallel. Multiplies capacity and current.
- **Capacity (mAh / Ah)** — charge stored. A 450 mAh pack delivers 0.45 A for
  one hour, or 27 A for one minute.
- **C-rating** — max continuous discharge as a multiple of capacity.
  `I_max = C × capacity`. A 450 mAh 75C pack: `0.075 Ah × 75 = 33.75 A`
  continuous (manufacturer's optimistic figure).

## Sizing

1. **Voltage (S):** chosen with motor Kv to hit target drive and weapon rpm.
   Higher S = lower current for the same power = thinner wire, less sag — but
   more cell mass and higher-voltage-rated electronics.
2. **Peak current:** `I_peak ≈ weapon_spinup_current + drive_stall_current`.
   Weapon spin-up dominates.
3. **C-rating:** pick so `C × capacity` comfortably exceeds `I_peak` with margin
   (real sustained capability is well below the label). A pack run near its
   rating sags hard and heats up.
4. **Capacity for endurance:** estimate average current over a 2–3 minute match
   (drive duty + weapon duty) and size capacity so you use **≤ 70–80%** of it.
   Deep-cycling every match kills packs fast.[^runamok][^batteryuniversity]
5. **Mass:** LiPo energy density is ~150–180 Wh/kg. Beetleweight packs are
   commonly **8–12%** of robot mass — see [Weight budgeting](/fundamentals/weight-budgeting/).

## Sag

Under load, terminal voltage drops (internal resistance × current). Symptoms of
too much sag: slow weapon spin-up, ESC low-voltage cutoff mid-match, brownout
resets of the receiver. Fixes: higher C-rating, higher capacity, higher S (lower
current), shorter/thicker [wiring](/power/wiring/), better [connectors](/power/connectors/).

## Health and retirement

Retire a pack when it puffs, a cell drifts >0.05 V from its siblings at rest,
internal resistance climbs, or it can't hold 4.2 V. See
[Battery safety &amp; charging](/power/battery-safety/).

## References

[^runamok]: [Team Run Amok](https://runamok.tech/) — the [Tentacle Torque & Amp-Hour Calculator](https://runamok.tech/squid/newtorquecalc.htm) estimates match current draw and required pack capacity.
[^batteryuniversity]: Battery University (Cadex), [BU-808: How to Prolong Lithium-Based Batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries) — charge/discharge limits, depth-of-discharge, and cycle life.
