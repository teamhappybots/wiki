---
title: Wiring & current capacity
description: Wire gauge selection, silicone wire, routing, strain relief, and the main power bus.
sidebar:
  order: 3
---

## Gauge selection

Size wire to the **current it carries** and the **length of the run**. Combat
wiring is short, so ampacity (heating) usually governs, not voltage drop. A good
rule of thumb: **never run heavier wire (or bigger connectors) than the leads on
your battery.**[^b4d]

| AWG | Rough continuous current (chassis wiring, silicone) | Typical use (beetleweight) |
| --- | --- | --- |
| 24 | ~5 A | Signal wires, LEDs |
| 20–22 | ~8–10 A | Drive motor leads |
| 18 | ~15 A | Main power and weapon feed on small-weapon builds; BEC / receiver |
| 16 | ~20 A | **Main battery lead and weapon ESC feed on most beetleweights** |
| 14 | ~30 A | Heavy weapon feed only if the battery leads are 14 AWG |

These are guidance figures — derate for bundling, high ambient temperature, and
long runs.[^powerwerx] Weapon spin-up current is brief, so the weapon feed can be
sized closer to sustained current than to absolute peak. Beetleweights have moved
to lighter wire than older guides assume: 16 AWG main/weapon and 20–22 AWG drive
is standard now, and 12–14 AWG is hobbyweight territory.[^b4d]

## Use silicone-insulated, fine-strand wire

High strand count survives vibration and flexing; silicone insulation tolerates
heat and abrasion far better than PVC. It's the combat standard.

## The power bus

- One **main positive** and **main negative** from the battery, through the
  [removable link](/power/switches-links/), to a distribution point.
- Branch to weapon ESC and drive ESC(s) from there — star topology, short stubs.
- Keep the weapon's high-current path away from receiver and signal wiring to
  reduce noise.

## Mechanical

- **Strain-relieve every termination** — the wire will see 100+ g shocks. Anchor
  wires near connectors and solder joints so the joint isn't the flex point.
- Protect against **internal debris and the weapon** — route through channels,
  behind structure, in loom or spiral wrap.
- Leave **service loops** so a hit that shifts a component doesn't rip a wire
  out.
- Heat-shrink all solder joints; double-shrink high-current ones.

## References

[^powerwerx]: [Powerwerx wire gauge / AWG reference table](https://powerwerx.com/help/wire-gauge-awg-reference-table) and [recommended wire-gauge calculator](https://powerwerx.com/wire-gauge-selection-chart-calculator). Chassis-wiring ampacity assumes short runs in open air; silicone insulation's higher temperature rating (150&nbsp;°C) allows more current per gauge than PVC.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies: The Ultimate Guide to Building your Own 3lb Death Machine* (Fall 2025 revision) — a builder-maintained beginner guide widely distributed through the NHRL Discord. Section: Electronics & Wiring.
