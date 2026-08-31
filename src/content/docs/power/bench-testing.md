---
title: Bench testing & the test box
description: Safe first power-up, failsafe verification, and building a weapon test enclosure.
sidebar:
  order: 8
---

Never spin a weapon in open air. Every weapon test happens inside a containment
box.[^nhrl]

## First power-up sequence

1. **Weapon disconnected** (phase leads unplugged or rotor removed). Wheels off
   the ground on a stand.
2. For a first-ever power-up, put a **smoke stopper** (e.g. VIFLY ShortSaver)
   between the battery and the robot — it cuts power on the current rush of a
   short before anything burns.[^b4d]
3. Insert the [removable link](/power/switches-links/). Confirm the receiver
   binds and the [failsafe](/power/radio/) test passes (TX off → drive stops).
4. Check drive direction and mixing: left stick → left side, forward is forward,
   [invert switch](/drivetrain/layouts/#invertible-driving) works.
5. Check current draw with a watt meter if available; look for anything hot.
6. Power down (link out) before touching anything.

## The test box

A box that contains a weapon failure — a shed tooth, a thrown fastener, or the
whole rotor letting go.

- **Carcass:** **0.75" (19 mm) plywood** is the standard and is enough to
  contain a beetleweight — no steel lining needed. Join the panels with steel
  brackets or wood blocks, not just screws into end grain.[^b4d]
- **Window:** **polycarbonate** (Lexan / Makrolon) — *never acrylic /
  Plexiglass*, which shatters. Minimum **3/16"** for a roof window with light
  testing; **double 3/16" or 1/4"** if you'll hit hard or the window faces the
  weapon (arena standard is double 1/4").[^b4d]
- **Don't drill the polycarbonate** — holes crater its impact strength. Retain
  it with slots or clamps.[^b4d]
- **Size:** fits the whole robot with the lid closed.
- **Lid:** clamped, hinged-and-latched, or slotted. No antenna pass-through
  needed at 2.4 GHz — keep the TX outside, box closed.
- Some builders bolt the box to the bench or floor.

## Loading and unloading (test box or arena)

Do this every time — the order is what keeps the weapon from spinning up while
your hands are near it:[^b4d][^nhrl]

1. Transmitter **on**, then set it aside.
2. Load the robot in.
3. Turn the robot **on**.
4. Remove the weapon lock.
5. Close the enclosure.
6. Pick the transmitter back up.

Unload in the exact reverse order (enclosure open → weapon lock in → robot off →
robot out).

## Weapon test procedure

1. Robot in the box, link **out**, weapon rotor clear.
2. Insert link, close and latch the lid.
3. Arm and spin the weapon up **gradually** to partial speed, listening for
   imbalance or rubbing. Spin down.
4. Increase toward full speed in steps. Note spin-up time and any ESC desync.
5. Spin down, wait for full stop, **link out**, then open.
6. Inspect the rotor, shaft, bearings, and fasteners after the first full-speed
   run and re-torque everything.

Events provide a test box in the pits; the same discipline applies there.[^sparc]

## References

[^nhrl]: [NHRL Wiki](https://wiki.nhrl.io/) (National Havoc Robot League) — pit safety, the test-box requirement, and weapon-arming procedure.
[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/) and Tournament Rules, v1.4, 2023 — safe activation/deactivation and pit conduct.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Testing & Safety (Test Boxes, Testing Electronics); Note on Safety.
