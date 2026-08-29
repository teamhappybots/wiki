---
title: Connectors
description: XT30/XT60, bullet connectors, servo connectors, and where to solder instead.
sidebar:
  order: 4
---

Every connector adds resistance, mass, and a failure point. Use them where you
genuinely need to disconnect; solder the rest.

## Power connectors

| Connector | Current | Use |
| --- | --- | --- |
| **XT30** | ~15–30 A | Antweight main power, beetleweight drive branches |
| **XT60** | ~30–60 A | Beetleweight main battery connection |
| **XT90 / AS150** | 60–90+ A | Heavy classes |
| **4 mm bullet** | ~40–60 A | Motor-to-ESC on brushless (phase leads) |
| **3.5 mm bullet** | ~25–40 A | Small brushless phase leads |

Match the connector to the **battery lead** rating and the
[removable-link](/power/switches-links/) current. A loose or undersized power
connector overheats, sags voltage, and can arc.

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
