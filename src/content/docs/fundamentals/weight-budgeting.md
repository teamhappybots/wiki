---
title: Weight budgeting
description: Allocating the mass budget across drive, weapon, power, electronics, and structure.
sidebar:
  order: 2
---

Weight is the hardest constraint in combat robotics. Every class is defined by a
maximum mass, and the design problem is dividing that mass between systems that
all want more of it.

## Start from the class limit

| Class | Limit | Typical usable budget after fasteners/wire |
| --- | --- | --- |
| Fairyweight | 150 g | ~140 g |
| Antweight (US) | 1 lb / 454 g | ~430 g |
| Beetleweight (US) | 3 lb / 1361 g | ~1300 g |
| Beetleweight (UK) | 1500 g | ~1440 g |

Beetleweights can claim extra allowance for non-wheeled locomotion — roughly
3.75 lb (shuffler), 4.5 lb (non-traditional), or 6 lb (true walker) under
SPARC/NHRL, plus NHRL's multibot split. See
[Drivetrain layouts](/drivetrain/layouts/#walkers-and-shufflers), and confirm the
exact clause with your event.[^sparc][^b4d]

Allow **3–5%** for hardware you never model precisely: fasteners, wire,
heat-shrink, adhesive, zip ties, connectors. A useful CAD-stage number is a flat
**~50 g** allowance for screws and wiring on a beetle.[^b4d]

## Typical splits by archetype (beetleweight)

| System | Vertical spinner | Horizontal spinner | Control / wedge |
| --- | --- | --- | --- |
| Weapon (disc/bar + motor + mount) | 30–40% | 35–45% | 0% |
| Drivetrain (motors, gearboxes, wheels) | 18–25% | 15–22% | 25–35% |
| Battery | 8–12% | 8–12% | 8–12% |
| Electronics (RX, ESCs, wiring) | 6–10% | 6–10% | 6–10% |
| Structure &amp; armor | 20–30% | 15–25% | 45–60% |

A control bot spends its whole non-drive budget on structure and wedge geometry.
A spinner robs structure to feed the weapon, and relies on the weapon to end
fights before the thin armor is tested.

## Method

1. Build the budget as a spreadsheet with a row per component and a
   **running total** column.
2. Enter *measured* masses wherever possible — vendor spec sheets, or a
   0.1&nbsp;g scale for parts you own.
3. For printed parts, estimate from slicer output (grams of filament) early,
   replace with measured mass after the first print.
4. Keep a **contingency row** of 5% of the class limit. If you spend it before
   the robot is done, something has to be redesigned, not shaved.
5. Re-weigh the assembled robot on the same scale you will see at
   tech inspection. Build in 5–15&nbsp;g of margin
   for paint, tape, and scale variance.

## Where the grams hide

- **Fasteners.** A beetleweight can carry 40–80 g of screws. Use the shortest
  screw that gives full thread engagement; drop from steel to aluminium or
  titanium only where the load allows.
- **Wire.** Copper is dense. Size it to current
  ([Wiring &amp; current](/power/wiring/)) — 16 AWG main/weapon, 20–22 AWG drive
  on a beetle — and keep runs short.
- **Over-thick printed walls.** Going from 3 to 4 perimeters on every part adds
  up. Thicken locally at load points instead, and keep infill low (5–10%).
- **Connectors.** Every connector pair is 2–6 g of pure overhead. Use
  [XT30](/power/connectors/) for the main battery lead in insect classes, not
  XT60, and solder the joints you don't need to separate.

## If you come in overweight

In rough order of least to most disruptive:[^b4d]

1. Re-slice 3D-printed parts lighter — cheap to reprint.
2. Trim or drop side and back armour (keep the front pointed at the opponent).
3. Shorten wiring.
4. Remove non-critical hardware.
5. Only then start drilling or pocketing solid parts — heaviest parts first,
   material removed slowly.

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — weight classes and weight bonuses. [NHRL](https://wiki.nhrl.io/) publishes the class limits used at its events.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: What is a Beetleweight?; Weight Bonuses; Appendix VII (Weight Management).
