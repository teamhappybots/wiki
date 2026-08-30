---
title: Power, torque & gearing
description: "Sizing a drive package: motor constants, gear ratio, wheel diameter, and the stall-torque check."
sidebar:
  order: 3
---

The drivetrain problem: choose a motor, gear ratio, and wheel diameter so the
robot reaches a useful top speed **and** can still move when an opponent is
pushing back.

## Motor constants

A brushed or brushless DC motor is characterized by:

- **Kv** (rpm per volt, no load). Free speed ≈ `Kv × V_batt`.
- **Stall torque** at a given voltage — torque at zero rpm, drawing stall current.
- **Kt** (torque constant, N·m/A) = `9.549 / Kv`. Torque ≈ `Kt × (I − I_0)`.

Torque and speed trade linearly between no-load and stall.[^riobotz]

## From motor to wheel

```
wheel rpm       = motor rpm / gear_ratio
wheel torque    = motor torque × gear_ratio × drivetrain_efficiency
robot speed     = wheel rpm × π × wheel_diameter / 60
tractive force  = wheel torque / wheel_radius        (per driven wheel)
```

Spur/planetary gearboxes: assume **85–90%** efficiency per stage. Belt: ~95%.[^riobotz]

## Target numbers (beetleweight)

| Parameter | Typical range | Notes |
| --- | --- | --- |
| Top speed | 3–6 m/s (10–20 ft/s) | Faster is hard to drive in a small box |
| Gear ratio | 20:1 – 60:1 | From a ~1000–3000 Kv motor on 2–3S |
| Wheel diameter | 30–50 mm | Larger clears debris, raises the robot |
| Drive motor power | 30–80 W each | 2 or 4 driven wheels |

## The stall-torque check

The design must survive being pushed at full throttle against a wall (a "pushing
match") without the motors overheating or the ESC cutting out.

1. Compute **tractive force** at the wheels from wheel torque.
2. Compute the **traction limit** — see [Traction &amp; pushing force](/fundamentals/traction/).
   The lower of the two is your real pushing force.
3. If tractive force ≫ traction limit, you are geared too aggressively: the
   wheels just spin. Gear taller (lower ratio) or add weight/grip.
4. If tractive force ≪ traction limit, the motor stalls before the tires break
   loose — it will overheat in a pushing match. Gear shorter (higher ratio).

A balanced beetle drive can push roughly **0.7–1.2× its own weight** before the
tires slip. Team Run Amok's drivetrain calculator automates this check and the
gear-ratio selection.[^runamok]

## Current draw

Peak drive current ≈ `n_motors × stall_current × duty`. Full-throttle direction
changes approach stall current briefly. Size [wiring](/power/wiring/),
[ESCs](/drivetrain/escs/), and [battery C-rating](/power/lipo-batteries/) for
that peak, not the average.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — ch. on motors and drivetrain design.
[^runamok]: [Team Run Amok](https://runamok.tech/) — the [Tentacle Torque & Amp-Hour Calculator](https://runamok.tech/squid/newtorquecalc.htm) and the "Ask Aaron" [drivetrain design archives](https://runamok.tech/AskAaron/optimum.html).
