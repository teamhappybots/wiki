---
title: Drivetrain layouts
description: Skid steer, 2WD vs 4WD, direct/indirect/tangent drive, melty, walkers, and invertible driving.
sidebar:
  order: 3
---

**Drive wins fights** — it's the only thing keeping you off a countout, and it
delivers the weapon. Build it first and build it robust.[^b4d]

## Skid steer (tank drive)

Standard layout: left and right sides driven independently, robot turns by
driving the sides at different speeds. Simple, robust, mixed in the
[transmitter](/power/radio/).

- **2WD, 2 wheels total:** both wheels driven, full weight on traction, needs a
  skid or the weapon housing as a third contact point.
- **2WD, 4 wheels:** front or rear pair driven, others are casters/idlers.
- **4WD:** all four driven. Better traction, stability, and redundancy (keeps
  moving after losing a wheel or motor). **Most competitive beetles are 4WD.**[^b4d]

## How the motor connects to the wheel

| Setup | How | Notes |
| --- | --- | --- |
| **Direct drive** | Wheel on a combat gearmotor's output shaft | Default. Simple, compact, robust with a shock-absorbing wheel and a combat-rated gearmotor. |
| **Indirect drive** | Belt or gear from the gearmotor to a wheel on a **dead axle** | Isolates the motor from wheel hits; frees up packaging. 4mm S3M belts and the Repeat drive axle are common. |
| **Direct 4WD** | One wheel on the motor, a belt/gear to a second wheel per side | Keep the two wheels rigid to each other so the belt stays engaged. |
| **Indirect 4WD** | Motor drives a double-wide pulley feeding front and rear wheels | Full motor isolation; one wheel loss doesn't kill the side (e.g. Repeat Peter Bar). |
| **Multi-stage reduction** | Gear/belt train off a plain drone motor instead of a gearmotor | Cheaper/lighter motor, more design freedom; more complex and fragile. |
| **Tangent / friction drive** | Drone-motor shaft pressed directly against the wheel | Most compact and powerful; needs constant shaft-to-wheel pressure, hard wheels, and wheel protection. Fast and twitchy. |

Combat gearmotors have improved enough that plain **direct drive is fine for a
first build**; reach for belts when you want packaging freedom or shock
isolation.[^b4d]

## Melty brain (full-body spinner)

The entire robot spins; translation comes from pulsing drive power once per
revolution, timed by an onboard accelerometer/gyro and firmware. Chaotic, fun,
and a real coding project — not a first build.[^b4d]

## Walkers and shufflers

Legged or leg-like drives, used partly to claim a weight bonus. The numbers vary
by event but under SPARC/NHRL they run roughly:[^sparc][^b4d]

| Locomotion | Beetleweight limit |
| --- | --- |
| Wheels / normal | 3 lb |
| **Shuffler** (feet on continuously rotating cams) | 3.75 lb |
| **Non-traditional locomotion** (weapon-driven, etc., no rolling contact) | 4.5 lb |
| **True walker** (≥2 independent DOF per leg, no rolling contact) | 6 lb |
| **Multibot** (NHRL) | 4 lb ÷ number of segments, up to 4 |

Confirm the exact clause with the event before designing around it.

## Invertible driving

Insect robots get flipped constantly. Design to drive **upside down**:

- Wheels tall enough to contact the floor in both orientations, or
- A weapon/body shape that self-rights (Self-righting).
- The transmitter should have an **invert switch** that flips drive (and
  sometimes steering) so "forward" stays forward when inverted.

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/) and [Tournament Rules](https://sparc.tools/), v1.4, 2023 — walker/shuffler weight bonuses and their qualifying criteria. Many events modify or drop these; check the ruleset you are entering.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Drive Systems; General Rules → Weight Bonuses.
