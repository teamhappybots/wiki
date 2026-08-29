---
title: Weapon energy & gyro effects
description: Kinetic energy stored in a spinner, tip speed, moment of inertia, spin-up time, and gyroscopic precession.
sidebar:
  order: 5
---

A kinetic weapon is a flywheel. Its effectiveness comes from the **energy**
stored in that flywheel and how fast it can be delivered through a small
contact patch.

## Stored energy

```
KE = ½ · I · ω²
```

- **I** — moment of inertia of the weapon about its spin axis (kg·m²).
- **ω** — angular velocity (rad/s) = `2π · rpm / 60`.

Because energy scales with **ω²**, rpm matters more than mass. A light bar spun
fast can out-hit a heavy drum spun slow.

## Moment of inertia (common weapon shapes)

| Shape | I about spin axis |
| --- | --- |
| Thin bar, length L, mass m, centered | `m·L² / 12` |
| Solid disc, radius R, mass m | `½·m·R²` |
| Ring / shell, radius R, mass m | `m·R²` |
| Two masses m at radius r (asymmetric bar) | `2·m·r²` |

Mass concentrated at the tips (bar, ring shell) stores more energy per gram than
a solid disc, at the cost of a less rigid structure.

## Tip speed

```
v_tip = ω · R
```

Beetleweight kinetic weapons typically run **60–120 m/s** tip speed. Higher tip
speed increases per-hit damage and the chance of biting through armor, but
raises stress on the [weapon shaft and bearings](/weapons/shafts-bearings/) and
worsens gyro effects.

## Spin-up time

```
t_spinup ≈ I · ω_target / τ_motor_avg
```

The motor's average accelerating torque `τ_motor_avg` falls as the weapon
approaches free speed. Practically:

- A beetle bar/disc reaching full speed in **1.5–4 s** is normal.
- Too much `I` for the motor → slow spin-up, weapon never recovers between hits.
- Too little `I` → fast spin-up but low stored energy; the weapon bounces off.

Match `I` to the [weapon motor](/weapons/motors-escs/) so spin-up is fast enough
to re-arm between exchanges.

## Gyroscopic precession

A spinning weapon is a gyroscope. When the robot yaws (turns), the weapon's
angular momentum **L = I·ω** produces a torque at right angles:

```
τ_precession = L × ω_yaw
```

Effects on a **horizontal** spinner (vertical weapon axis): turning the robot
makes it tip / lift a corner. Effects on a **vertical** spinner (horizontal
weapon axis): turning makes the nose pitch up or down. Consequences:

- Fast, high-`I` weapons make the robot "walk" or hop when driving.
- Mitigations: lower `I`, lower rpm, 4WD for a wider stability base, a heavier
  chassis, or accepting it and driving around it.
- A vertical disc's gyro can *help* self-righting and keeps the front down.

## Energy vs. the opponent

Delivered energy goes into denting armor, breaking fasteners, and — usefully —
throwing the opponent (and often yourself). Newton's third law: a big hit
accelerates *both* robots. Structure both to survive your own weapon's reaction.
