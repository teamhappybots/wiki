---
title: Drive motors
description: Brushed vs brushless drive motors, gearmotors, and how to size them for insect classes.
sidebar:
  order: 1
---

## Brushed vs brushless

| | Brushed gearmotor | Brushless (outrunner/inrunner) + gearbox |
| --- | --- | --- |
| Control | Simple — any brushed ESC | Needs sensored ESC or good sensorless low-speed tune |
| Low-speed torque / control | Excellent, smooth from 0 rpm | Cogging and stutter at crawl unless sensored |
| Power density | Lower | Higher — more power per gram |
| Cost | Low | Moderate |
| Typical use | Antweight, beetleweight beginner drive | Competitive beetleweight, all heavier classes |

For a **first beetleweight**, brushed gearmotors (e.g. 16–25 mm gearmotors, or
purpose-made combat drive units) give predictable driving and forgiving
electronics. Move to brushless when you want more speed/push in the same mass.[^riobotz]

## Common insect-class drive motors

- **Brushed gearmotors:** integrated motor + planetary/spur gearbox, 6–12 V,
  gear ratios from ~20:1 to ~100:1. Sold by combat suppliers with combat-grade
  output shafts and mounts.
- **Brushless "drive pods":** a small outrunner geared down in a sealed
  housing, often with a bolt circle for a hub motor-style wheel.
- **Hub motors:** brushless outrunner with the wheel mounted directly on the
  bell. Compact, no external gearbox, but limited torque and exposed.

## Sizing

Work backwards from [Power, torque &amp; gearing](/fundamentals/power-torque-gearing/):

1. Target top speed (3–6 m/s for a beetle) and wheel diameter (30–50 mm).
2. Required wheel rpm = `speed / (π · d)`.
3. Pick motor Kv and battery voltage so `Kv · V / gear_ratio` gives that wheel
   rpm with ~15–20% headroom.
4. Check stall torque at the wheel exceeds the [traction limit](/fundamentals/traction/)
   so the tires break loose before the motor stalls in a pushing match.

Team Run Amok's calculator models steps 1–4 for common combat motors.[^runamok]

## Thermal and duty

Drive motors in a pushing match run near stall — high current, low rpm, poor
cooling. Mitigations: gear so the tires slip before stall, use 4 motors to
share load, allow cool-down between matches, and pick motors with generous
continuous ratings. Melted brushed motor magnets and desoldered brushless
windings are common failure modes.

## Redundancy

4WD (four motors) keeps the robot mobile after losing a motor or wheel to a
hit, and doubles pushing traction. The cost is mass and two more
[ESC channels](/drivetrain/escs/). Most competitive beetles are 4WD.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — DC motor selection, gearing, and thermal limits.
[^runamok]: [Team Run Amok](https://runamok.tech/) — [Tentacle Torque & Amp-Hour Calculator](https://runamok.tech/squid/newtorquecalc.htm) and the "Ask Aaron" [motor archives](https://runamok.tech/AskAaron/motors.html).
