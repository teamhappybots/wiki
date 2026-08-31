---
title: Gearing & wheels
description: Choosing gear ratio, wheel diameter, wheel material, and hub mounting.
sidebar:
  order: 2
---

## Gear ratio

Gear ratio converts high-rpm/low-torque motor output into wheel speed and
torque. See the formulas in [Power, torque &amp; gearing](/fundamentals/power-torque-gearing/).

- Too tall (low ratio): high top speed, weak push, motor stalls and overheats.
- Too short (high ratio): strong push wasted as wheelspin, low top speed.
- Aim for the tires to break traction near full motor torque.

Beetleweight drive ratios commonly fall between **20:1 and 60:1** depending on
motor Kv and battery voltage. See Team Run Amok's guide to optimum gear-ratio
selection.[^runamok]

## Wheel diameter

| Larger wheels | Smaller wheels |
| --- | --- |
| Higher speed at a given rpm | More torque at the contact patch |
| Climb debris and arena seams | Lower CG, harder to high-center |
| Raise ground clearance | Package more easily inside armor |

30–50 mm is the usual beetleweight range. Larger wheels that protrude past the
armor are vulnerable to spinners; recessed or partially shrouded wheels survive
longer.

## Wheel type

Combat wheels need traction, durability, and low weight at once. The common
options today:[^b4d]

| Type | How | Notes |
| --- | --- | --- |
| **Custom-cast polyurethane** | Cast resin (Smooth-On Vytaflex, 30–50A; down to 20A for grip) around a 3D-printed hub | The current default — best traction and durability, any size/shape, hub features integrated. See below. |
| **LEGO tire on a printed hub** | LEGO "solid" or "ZR" tire glued to a TPU hub | Cheap, tough, good traction; harder than cast PU so it wears less — favoured for tangent drive. |
| **Foam** | Neoprene/EVA disc on a hub (Fingertech) | Very light, great shock absorption, but shreds when hit and has low grip unless coated with contact cement + liquid latex. Was the default; now less common. |
| **Off-the-shelf** | Banebots compliant wheels are about the only viable one | Heavier and more fragile than custom; needs a set-screw or clamp hub (never press-fit) and wheel armor. |
| **Cleats** | Thin spiked titanium/steel disc that digs into a wood floor | Highest traction on the right wood, but fragile and floor-dependent. **Do not work on steel floors.** Usually backed by a normal wheel. |

Control bots and pushers run the softest, grippiest wheel the durability allows;
spinners accept a harder, tougher wheel. On steel-floor events,
[downforce magnets](/weapons/control-wedges/#downforce-magnets) do more for
traction than wheel choice.[^b4d]

### Casting polyurethane wheels

3D-print a hub with a retaining feature (a gyroid-infill ring is the popular
method), seat it in a printed mould with a centring pin, and pour equal parts
(by weight) of Vytaflex A and B. Working time is ~10 minutes; cure overnight, or
~16 h, or accelerate at 60&nbsp;°C in a filament dryer. Use Vaseline or a proper
mould release, and colour with mica powder — most dyes interfere with the
cure.[^b4d]

## Hub and axle

- **Screw/clamp hub on a motor shaft** (e.g. Repeat screw hub) or **hex hub /
  hex shaft** — standard on combat drive units; secure, unlike a press fit.
- **Set-screw on a D-shaft** — simple, can round off under shock.
- **Bushing on a dead axle** for indirect drive: a printed hub running on a
  brass or lubricated-nylon bushing around the axle; low-rpm plastic wheels can
  even run directly on a greased axle.
- Support a live axle on **two bearings**; a single-shear motor output shaft
  bends when the wheel is hit from the side. Protect it with a stub or armored
  pocket.[^riobotz]

## References

[^runamok]: [Team Run Amok](https://runamok.tech/) — ["Optimum Gear Ratio Selection"](https://runamok.tech/AskAaron/optimum.html) and the [Tentacle drivetrain calculator](https://runamok.tech/squid/newtorquecalc.htm).
[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — wheels, hubs, and axle support.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Wheels & Hubs; Appendix I (Casting Custom Wheels).
