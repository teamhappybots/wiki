---
title: Weapon geometry & bite
description: Tooth count, bite depth, rotor diameter, engagement height, and matching geometry to spin-up.
sidebar:
  order: 2
---

## Bite

**Bite** is how far into the opponent a tooth reaches before it makes contact —
how much of the tooth actually engages:

```
bite ≈ (closing speed × 60) / (weapon rpm × n_teeth)
```

Bite roughly determines how much of the weapon's stored energy transfers on a
hit. Low bite grinds and pops; **high bite gives the big violent hits**. Stored
energy means nothing if you can't deliver it, so modern weapon design is largely
about maximising bite:[^b4d]

- **Fewer teeth** — a tooth comes around less often, so the opponent moves deeper
  before contact. This is why most competitive weapons run **one tooth**.
- **Lower rpm** — same effect. Builders often *don't* run full speed: consistent
  bite beats raw energy, and tip speed above ~300 mph is rarely worth it.
- **Faster closing speed** — charge the opponent (back up, then drive in hard).

The limits still apply: too much bite in one hit can stall the weapon or bounce
both robots apart before full energy transfers.[^riobotz] The current answer to
that is a single big tooth run at moderate rpm, not many small teeth.

## Tooth / impact point count

| Teeth | Behavior |
| --- | --- |
| **1** | **The competitive default.** Most bite, biggest hits. Must be asymmetric — balance it with the CAD center-of-mass tool. |
| 2 | Naturally balanced; used on very large-diameter weapons whose low rpm still gives enough bite. |
| 3+ | Low bite, smooth "grinding" damage, gentle on the weapon. Rare on competitive robots. |

Odd or single-tooth weapons are balanced by an asymmetric body or a counterweight
opposite the tooth, checked against the CAD center of mass.

## Rotor diameter and engagement height

- **Diameter** sets tip speed for a given rpm (`v = ω·R`) and reach. Bigger
  rotor = more energy and range, more mass, more gyro. A larger diameter also
  buys bite: the tooth travels a longer arc per revolution.
- **Engagement height:** where the rotor contacts the opponent.
  - *Vertical spinner* — set slightly above the floor so a front wedge or forks
    feed the opponent's edge into the rotor.
  - *Horizontal spinner* — set to strike the opponent's mid-height, above their
    wedge line but below their armor's strong points.

## Tooth shape

- **Rake angle** — the angle between the tooth's impact face and the radius line
  to its tip. **Neutral to about +10°** is the usual choice: enough to dig into
  armor, not so much that the tooth rolls over and wears. High positive rake
  (>20°) bites hard but wears fast — situational, e.g. hammer-saw blades.
  Negative rake resists wear and won't stick in wooden arena kickplates, but
  struggles to bite; seen on some large blunt-impact horizontals.[^b4d]
- **Tooth support** — back the impact face with as much material as possible (a
  "swept" profile behind the tooth) so it doesn't roll backward on hits.
- **Tooth width** — the tooth bends hardest at its *base*, not its tip. Make the
  base wide with generous fillets and taper toward a sharp point.[^b4d]

## Matching geometry to the motor

The rotor's [moment of inertia](/fundamentals/weapon-energy/) must be small
enough that the [weapon motor](/weapons/motors-escs/) spins it up in **1.5–4 s**
and recovers between hits. If spin-up is sluggish:

- reduce rotor mass or move mass inboard (smaller `I`),
- raise rpm target (taller belt/gear ratio into the rotor, or higher Kv motor),
- accept lower per-hit energy in exchange for a weapon that's actually turning
  when contact happens.

Verify the tip speed with the
[Bristol Bot Builders tip-speed calculator](https://bristolbotbuilders.com/tools/tipspeed/)
or the [Ember weapon calculator](https://ember.level5robotics.com/weapon) — aim
for roughly **250 mph (~110 m/s)**, and rarely design past 300 mph.[^bbb][^b4d]

## First weapon

A single-tooth vertical disc or a compact drum, moderate diameter, driven by a
well-matched brushless outrunner on a belt (or an off-the-shelf
[hubmotor](/weapons/motors-escs/#belt-drive-vs-hubmotor)). It self-rights, it's
forgiving of driving, and the geometry is easy to get right.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — the "bite" model, tooth-count trade-offs, and matching rotor inertia to the motor.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Spinning Weapon Design (Weapon Geometry and Bite, Maximizing Bite, Designing for Durability).
[^bbb]: [Bristol Bot Builders — Tip Speed & Drive RPM Calculator](https://bristolbotbuilders.com/tools/tipspeed/).
