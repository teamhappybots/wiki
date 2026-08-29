---
title: Spinner types
description: Vertical and horizontal spinners — bars, discs, drums, eggbeaters, and shells — and their trade-offs.
sidebar:
  order: 1
---

Kinetic weapons are categorized by **spin axis orientation** and **rotor shape**.
See [Weapon energy &amp; gyro effects](/fundamentals/weapon-energy/) for the
underlying physics.

## Axis orientation

| | Vertical spinner (horizontal axis) | Horizontal spinner (vertical axis) |
| --- | --- | --- |
| Hit direction | Launches opponent (and self) upward | Sweeps sideways, launches rotationally |
| Self-righting | Weapon often self-rights the robot | Usually needs separate srimech |
| Gyro when turning | Nose pitches up/down | Robot tips onto a corner |
| Wedge interaction | Works with a front wedge to lift into the rotor | Must catch the opponent's edge |
| Typical feel | Controllable, consistent | Huge energy, drives itself around on hits |

## Rotor shapes

- **Bar (beater bar):** a stiff bar, mass at the tips, spun about its center.
  High energy per gram, low part count. Two impact points per revolution.
  Vulnerable to bending if under-built.
- **Disc:** a machined or waterjet disc with 1–3 teeth. Rigid, predictable,
  good [bite](/weapons/geometry-bite/) control. Heavier for the same energy
  than a bar.
- **Drum / eggbeater:** a horizontal-axis cylinder (drum) or skeletal drum
  (eggbeater) low to the floor. Fast spin-up, hard to avoid, self-righting,
  forgiving. Lower tip speed than a long bar. Excellent beginner vertical
  weapon.
- **Shell / ring spinner:** the outer shell of the robot spins (full or
  partial). Maximum moment of inertia, protects the drive, but structurally
  demanding and heavy.
- **Vertical disc "undercutter" / overhead bar:** horizontal-axis variants
  positioned to hit high or low.

## Choosing (beetleweight)

| Priority | Pick |
| --- | --- |
| First weapon, want reliability | Drum or eggbeater (vertical) |
| Max damage, accept build difficulty | Bar (vertical or horizontal) |
| Consistent judged wins, control | Vertical disc + front wedge |
| Understand the sport first | [Control bot / wedge](/weapons/control-wedges/) — no spinner |

See [Which spinner suits a first build](/weapons/geometry-bite/#first-weapon)
and [Weapon motors &amp; ESCs](/weapons/motors-escs/) to spec the drive.
