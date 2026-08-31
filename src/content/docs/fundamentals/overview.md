---
title: Overview
description: How this wiki is organized, and the five systems every combat robot is built from.
sidebar:
  order: 1
---

This is a technical reference for building combat robots, focused on the
**3&nbsp;lb beetleweight** class. It assumes you want to understand *why* a
design choice is right, not just copy a parts list.

Two rules of thumb the whole sport agrees on: **drive wins fights** — build the
drivetrain first and build it robust — and **get under the opponent**, because
whoever is underneath controls the fight and disables the other's weapon.[^b4d]

## The five systems

Every combat robot — 150&nbsp;g or 250&nbsp;lb — is the same five subsystems.
This wiki is organized around them.

| System | Function | Key design variables |
| --- | --- | --- |
| **Drivetrain** | Locomotion and turning | Motor Kv/torque, gear ratio, wheel diameter, traction, layout |
| **Weapon** | Deliver damage or displacement | Energy storage, tip speed, moment of inertia, spin-up time, bite |
| **Power** | Energy for the whole robot | Cell count (S), capacity (mAh), C-rating, bus current |
| **Electronics** | Control and safety | Radio link, ESCs, failsafe, removable link, wiring gauge |
| **Structure** | Hold together, absorb hits | Frame method, material properties, fastener thread engagement |

## Design order

A workable sequence for a new design:

1. **Pick the class and archetype.** Weight class sets the total mass budget;
   [weapon archetype](/weapons/spinner-types/) sets how that budget splits.
2. **Weight budget.** Allocate grams to each system before modeling anything.
   See [Weight budgeting](/fundamentals/weight-budgeting/).
3. **Drive package.** Motor + gearbox + wheel that hits a target speed and has
   enough torque not to stall when pushed. See [Power, torque &amp; gearing](/fundamentals/power-torque-gearing/).
4. **Weapon package.** Energy target, then motor and moment of inertia that
   reach it within an acceptable [spin-up time](/fundamentals/weapon-energy/).
5. **Power system.** Battery that supplies peak bus current and lasts a full
   **3-minute** match with margin. See [LiPo & LiHV batteries](/power/lipo-batteries/).
6. **Structure.** Package everything, then design the frame and armor around
   the load paths from weapon impacts.
7. **Compliance pass.** Check the design against the
   [SPARC construction specifications](https://sparc.tools/) and your event's
   rules *before* cutting material.[^sparc]

## Units

SI throughout, with common shop units in parentheses. Energy in joules,
mass in grams/kilograms, tip speed in m/s.

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/) (Standardized Practices for the Advancement of Robot Combat), v1.4, 2023 — the widely adopted open ruleset in North America. Your event adopts a specific revision; follow that one.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies: The Ultimate Guide to Building your Own 3lb Death Machine* (Fall 2025 revision) — a builder-maintained beginner guide, originally for UTRA Combat and widely distributed through the NHRL Discord. Cited throughout this wiki for current North-American beetleweight practice.
