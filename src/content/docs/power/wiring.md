---
title: Wiring & current capacity
description: Wire gauge selection, silicone wire, routing, strain relief, and the main power bus.
sidebar:
  order: 3
---

## Gauge selection

Size wire to the **current it carries** and the **length of the run**. Combat
wiring is short, so ampacity (heating) usually governs, not voltage drop.

| AWG | Rough continuous current (chassis wiring, silicone) | Typical use (beetleweight) |
| --- | --- | --- |
| 18 | ~15 A | Receiver power, small servo leads |
| 16 | ~20 A | Light drive motor leads |
| 14 | ~30 A | Drive motor leads, secondary bus |
| 12 | ~45 A | Main battery lead, weapon ESC feed |
| 10 | ~65 A | High-power weapon feed, heavy classes |

These are guidance figures — derate for bundling, high ambient temperature, and
long runs. Weapon spin-up current is brief, so the weapon feed can be sized
closer to sustained current than to absolute peak, within reason.

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
