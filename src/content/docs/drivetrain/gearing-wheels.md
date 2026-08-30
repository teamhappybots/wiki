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

## Wheel material

| Material | μ | Durability | Notes |
| --- | --- | --- | --- |
| Printed TPU (95A) | 0.6–0.9 | Good | Tunable, cheap, common |
| Polyurethane (skate/scooter) | 0.6–0.9 | Excellent | Heavier |
| Silicone "gription" | 1.0–1.4 | Poor | Tears off in hits; grippiest |
| Foam / sponge | 0.4–0.7 | Fair | Very light, low grip |
| Hard plastic hub only | 0.3–0.5 | Excellent | Control-poor, used on spinners that don't need grip |

Control bots run the softest, grippiest tire the durability allows. Spinners
often accept harder, tougher wheels.

## Hub and axle

- **Set-screw on a D-shaft** — simple, can round off under shock.
- **Hex hub / hex shaft** — better torque transfer, standard on combat drive
  units.
- **Keyed or bolted hub** — strongest.
- Support the axle on **two bearings** where possible; a single-shear motor
  output shaft bends when the wheel is hit from the side.
- Protect the axle from side loads with a stub or armored pocket.[^riobotz]

## References

[^runamok]: [Team Run Amok](https://runamok.tech/) — ["Optimum Gear Ratio Selection"](https://runamok.tech/AskAaron/optimum.html) and the [Tentacle drivetrain calculator](https://runamok.tech/squid/newtorquecalc.htm).
[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — wheels, hubs, and axle support.
