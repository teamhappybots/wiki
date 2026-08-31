---
title: Drive motors
description: Brushed vs brushless drive motors, gearmotors, and how to size them for insect classes.
sidebar:
  order: 1
---

## Brushed vs brushless

| | Brushed gearmotor | Brushless gearmotor |
| --- | --- | --- |
| Control | Any cheap brushed ESC | Needs a combat-tuned sensorless ESC ([firmware](/power/esc-firmware/)); beetle-size sensored motors are rare |
| Low-speed control | Excellent, smooth from 0 rpm | Good with a proper firmware tune; can cog at a crawl |
| Power density | Lower | Higher — more power per gram |
| Electrical noise | High — can trip the weapon ESC (see below) | Low |
| Cost | Low | Moderate |
| Typical use | Budget builds, no-weapon control bots | Most current beetleweight drive |

Brushed gearmotors still make a fine **first drive** — predictable and forgiving
of the electronics. But purpose-built brushless combat gearmotors have become the
norm at the competitive level for their power density.[^riobotz][^b4d]

## Common insect-class drive motors

Both brushed and brushless combat gearmotors are sold ready to bolt in, with
combat-grade output shafts and mounts, by suppliers such as **Just 'Cuz
Robotics**, **Repeat Robotics**, and **Fingertech**. Ian Talbert maintains a
widely-shared comparison chart of the current beetleweight drive-motor
options.[^b4d]

- **Brushed combat gearmotors** — e.g. Just 'Cuz Viper / Dragon / Gecko, Repeat
  Compact Brushed. Integrated planetary gearbox, ~20:1 to ~100:1.
- **Brushless combat gearmotors** — a small outrunner geared down in a sealed
  housing. All brushless drive motors are outrunners (small inrunners spin far
  too fast) — protect nearby wiring from the spinning can.[^b4d]
- **Hub motors** — brushless outrunner with the wheel on the bell. Compact, no
  gearbox, but limited torque and exposed.
- **Generic AliExpress gearmotors** — not recommended; if you must, use
  all-metal planetary gearboxes.[^b4d]

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
hit, and adds pushing traction. The cost is mass and two more
[ESC channels](/drivetrain/escs/). Most competitive beetles are 4WD.

## Brushed motor noise

High-power brushed motors put electrical noise on their leads that can induce
false signals in the receiver or weapon ESC — the classic symptom is the weapon
twitching or a servo jumping when you drive. Fixes, roughly in order: route
drive leads away from the receiver and weapon wiring; twist the motor leads and
signal leads; solder **0.1&nbsp;µF non-polarised ceramic capacitors** across the
motor terminals (and from each terminal to the can for more suppression). A
capacitor on the weapon ESC's signal pads is a last resort — it also blocks the
programming signal.[^b4d]

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — DC motor selection, gearing, and thermal limits.
[^runamok]: [Team Run Amok](https://runamok.tech/) — [Tentacle Torque & Amp-Hour Calculator](https://runamok.tech/squid/newtorquecalc.htm) and the "Ask Aaron" [motor archives](https://runamok.tech/AskAaron/motors.html).
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Drive Systems; Brushed Motors & ESCs; Brushless Motors; Appendix IV (Brushed Motor Noise).
