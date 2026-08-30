---
title: Weapon geometry & bite
description: Tooth count, bite depth, rotor diameter, engagement height, and matching geometry to spin-up.
sidebar:
  order: 2
---

## Bite

**Bite** is how deep the weapon cuts into the opponent per impact:

```
bite ≈ (closing speed × 60) / (weapon rpm × n_teeth)
```

- **High bite** (few teeth, low rpm, fast approach): large energy transfer per
  hit, but the impact can stall or slow the weapon, and can bounce the robots
  apart before full energy is delivered.
- **Low bite** (many teeth, high rpm): each hit is smaller, the weapon barely
  slows, damage accumulates over many contacts. Easier on the weapon motor and
  [shaft](/weapons/shafts-bearings/).

Most beetleweight weapons target **low-to-moderate bite** — 1–3 impact points,
high rpm — so the weapon stays near speed and re-arms fast.[^riobotz]

## Tooth / impact point count

| Teeth | Behavior |
| --- | --- |
| 1 | Maximum single-hit energy, worst balance, longest re-arm |
| 2 | Common for bars; naturally balanced |
| 3 | Good compromise, still balanced |
| 4+ | Low bite, smooth, "grinding" damage, hard on opponents' fasteners |

Odd tooth counts on a disc must be balanced by geometry or counterweights.

## Rotor diameter and engagement height

- **Diameter** sets tip speed for a given rpm (`v = ω·R`) and reach. Bigger
  rotor = more energy and range, more mass, more gyro.
- **Engagement height:** where the rotor contacts the opponent.
  - *Vertical spinner* — set slightly above the floor so a front wedge feeds the
    opponent's edge into the rotor.
  - *Horizontal spinner* — set to strike the opponent's mid-height, above their
    wedge line but below their armor's strong points.

## Matching geometry to the motor {#first-weapon}

The rotor's [moment of inertia](/fundamentals/weapon-energy/) must be small
enough that the [weapon motor](/weapons/motors-escs/) spins it up in **1.5–4 s**
and recovers between hits. If spin-up is sluggish:

- reduce rotor mass or move mass inboard (smaller `I`),
- raise rpm target (taller belt/gear ratio into the rotor, or higher Kv motor),
- accept lower per-hit energy in exchange for a weapon that's actually turning
  when contact happens.

**First-weapon recommendation:** a 2- or 3-tooth vertical disc or a compact
drum, moderate diameter, moderate bite, driven by a single well-matched
brushless outrunner. It self-rights, it's forgiving of driving, and the
geometry is easy to get right.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — the "bite" model, tooth-count trade-offs, and matching rotor inertia to the motor.
