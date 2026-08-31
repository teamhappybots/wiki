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
| **XT30** | ~2–3 g | ~15 A cont., 30–40 A burst | **The default main battery / removable-link connector** — good for ~95% of beetleweights |
| **XT60** | ~5–6 g | ~30 A cont., 60 A burst | Only if you've measured a sustained current that warrants it; uncommon on current beetles |
| **XT90 / AS150** | ~12 g+ | 60–90+ A | Hobbyweight and up — wasted grams in insect classes |
| **GNB A30 / BT2.0 / red JST** | <1 g | ~10–20 A | Drive-motor leads — small and light |
| **MR30 / MT30** | ~1.5 g | ~15–30 A | Compact 3-pin option for brushless phase leads |
| **3 / 3.5 mm bullet** | ~1.5–2 g | ~25–40 A | Brushless phase leads (3.5 mm ships on most motors but is overkill) |

**Use XT30 for the main battery connection** in a beetleweight. Weapon spin-up
current is brief and the XT30 handles those bursts fine; a full XT60 is a few
grams of margin you rarely need. For drive leads, drop to a **GNB A30, BT2.0, or
red JST**. Never run a bigger connector than the leads on your battery.[^b4d]

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
won't spin up" and "ESC keeps cutting out." Learn to solder well; use leaded
solder (easier, and safe if you wash your hands) and a decent iron.[^b4d]

## References

[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Section: Electronics & Wiring → Wires, Connectors & Soldering.
