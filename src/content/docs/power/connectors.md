---
title: Connectors
description: XT30 for insect classes, bullet connectors, servo connectors, and where to solder instead.
sidebar:
  order: 4
---

Every connector adds resistance, mass, and a failure point. Use them where you
genuinely need to disconnect; solder the rest.

## Power connectors

| Connector | Pair mass | Current | Use in insect classes |
| --- | --- | --- | --- |
| **XT30** | ~2–3 g | ~15 A cont., 30–40 A burst | **The default main battery connector** for antweight and beetleweight |
| **XT60** | ~5–6 g | ~30 A cont., 60 A burst | Only if a high-current spinner build genuinely sustains >15 A average, or you want the margin at a small weight cost |
| **XT90 / AS150** | ~12 g+ | 60–90+ A | Hobbyweight and up — overkill and wasted grams in insect classes |
| **4 mm bullet** | ~2 g | ~40–60 A | Motor-to-ESC on brushless (phase leads) |
| **3.5 mm bullet** | ~1.5 g | ~25–40 A | Small brushless phase leads |

**Use XT30 for the main battery connection** in a beetleweight. Weapon spin-up
current is brief, and the XT30 handles those bursts fine; a full XT60 is 3&nbsp;g
of margin you rarely need and is uncommon in current insect builds. Move up only
if you have measured a sustained current that actually warrants it.

Match the connector to the **battery lead** gauge and the
[removable-link](/power/switches-links/) current. A loose or undersized power
connector overheats, sags voltage, and can arc — but so does a needlessly heavy
one bolted to thin wire.

## Signal connectors

- **0.1" (2.54 mm) servo connectors (JR/Futaba)** — receiver to ESC signal.
  Retain them: a dab of hot glue or a friction lock so a hit doesn't unseat the
  signal lead (which triggers [failsafe](/power/radio/) mid-match).
- **JST-XH** — LiPo balance leads. Never carry discharge current on these.

## Solder vs connector

Solder directly (no connector) at:

- ESC-to-motor on brushed motors,
- distribution/bus joints inside the robot,
- anywhere you won't routinely separate.

Keep connectors at:

- the **battery** (you swap and charge it),
- the **removable link** (required — it's your safety disconnect),
- brushless **phase leads** if you need to swap motor direction or service the
  motor.

## Practice

Solder connectors properly — tin both sides, full fillet, no cold joints — and
heat-shrink. A high-resistance power connector is a common cause of "weapon
won't spin up" and "ESC keeps cutting out."
