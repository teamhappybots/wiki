---
title: Spinner types
description: Vertical and horizontal spinners — bars, discs, drums, eggbeaters, and shells — and their trade-offs.
sidebar:
  order: 1
---

Kinetic weapons are categorized by **spin axis orientation** and **rotor shape**.
See [Weapon energy &amp; gyro effects](/fundamentals/weapon-energy/) for the
underlying physics.[^riobotz]

## Axis orientation

| | Vertical spinner (horizontal axis) | Horizontal spinner (vertical axis) |
| --- | --- | --- |
| Hit direction | Launches opponent (and self) upward | Sweeps sideways, launches rotationally |
| Self-righting | Weapon often self-rights the robot | Usually needs separate srimech |
| Gyro when turning | Nose pitches up/down | Robot tips onto a corner |
| Wedge interaction | Works with a front wedge to lift into the rotor | Must catch the opponent's edge |
| Typical feel | Controllable, consistent | Huge energy, drives itself around on hits |

## Vertical spinners (horizontal axis)

The most common and generally most competitive weapon type — they brace against
the floor on a hit, so they stay planted and dump maximum energy into the
opponent.[^b4d]

- **Drum:** a wide, small-diameter drum across the front. Generous attack area,
  doubles as front armour, easy to package compactly, fast spin-up.
- **Eggbeater / beater bar:** a rectangular beater — the middle ground between a
  drum and a bar. Good balance of weight, area, energy, and [bite](/weapons/geometry-bite/).
  Forgiving; an excellent first vertical weapon.
- **Bar:** a stiff bar with mass at the tips. Most energy per gram, low part
  count. Bends if under-built.
- **Large-diameter vert** (tower / reach vert): a big, thin, light disc or bar.
  Reach advantage and lots of bite from the large arc, for relatively little
  weapon weight.
- **Disc:** a rigid machined/waterjet disc, usually a **single large tooth**.
  Predictable, controllable bite; heavier than a bar for the same energy.

## Horizontal spinners (vertical axis)

Bigger weapons and more reach, but they can't brace against the floor, so they
fly off after a hit.

- **Undercutter** — blade below the chassis, near the floor. Pokes under
  opponents, hard for wedges *or* vertical spinners to reach. **Generally the
  most competitive horizontal.**
- **Midcutter** — blade at mid-chassis height, on arms off the top and bottom
  plates. Most reach and best at hitting chassis and wheels directly.
- **Overhead** — blade above the chassis. Runs a larger weapon and drives well,
  but the high blade is vulnerable to vertical spinners and it's unstable
  inverted.

## Full-body spinners

360° attack area and very heavy weapons; hard to build and often unreliable.

- **Shell:** spinning shell over the top and outside — also full-coverage armour.
  Heaviest weapons, long spin-up, can't drive inverted.
- **Ring:** spinning ring around the robot only, so it *can* drive inverted, at
  the cost of a complex, friction-prone bearing system.
- **Meltybrain:** the whole robot spins on one or two wheels; drive is pulsed
  once per rotation from an onboard gyro. Chaotic and a real coding project.

## Overhead attack (hammer-saw)

A weapon on the end of an overhead arm, swung down onto the opponent's top
armour — usually a small vertical spinner ("hammer-saw"), sometimes a saw or
drill. High odds of hitting internals, since few robots armour their top.

## Choosing (beetleweight)

| Priority | Pick |
| --- | --- |
| First weapon, want reliability | Drum or eggbeater (vertical) |
| Max damage, accept build difficulty | Bar or large-diameter vert |
| Reach and control on a judged win | Undercutter, or a disc vert + forks |
| Understand the sport first | [Control bot](/weapons/control-wedges/) — no spinner |

See [Which spinner suits a first build](/weapons/geometry-bite/#first-weapon)
and [Weapon motors &amp; ESCs](/weapons/motors-escs/) to spec the drive.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — weapon taxonomy and the trade-offs between rotor shapes.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Section: General Robot Archetypes.
