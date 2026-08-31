---
title: Shafts, bearings & mounting
description: Weapon shaft sizing, bearing selection, preload, live-shaft vs dead-shaft, and impact load paths.
sidebar:
  order: 4
---

The weapon rotor stores more energy than anything else on the robot and dumps
shock loads into its support every hit. This is the most common structural
failure point.

## Dead shaft is the default

Almost every modern beetleweight weapon runs a **dead shaft** — the shaft is
fixed to the frame and the rotor spins on bearings pressed into it — supported at
**both ends** in double shear. Rotor loads go straight into a static shaft, and
the motor is isolated by the belt or gear. Live shafts (shaft spins with the
rotor) are now rare.[^b4d]

## Shaft

- Size for **bending and shock**, not torque — torque is modest, impact bending
  is severe.[^riobotz]
- Off-the-shelf options, roughly in order of preference:[^b4d]
  - **End-tapped linear shaft** (e.g. Misumi) — hardened, precise, secured by a
    screw and washer at each end, nothing exposed. Hollow versions save weight.
  - **Hardened rod + clamping shaft collars** — use *clamping* collars, never
    set-screw; the collars are exposed and can loosen.
  - **Shoulder bolt** — cheapest; use an *alloy-steel* bolt, not stainless, and
    a nylock nut.
- Sizes: **≥ 5/16" (8 mm)** for small verts, **3/8" (10 mm)** for larger or
  wider verts (drums, beaters), **3/8"–1/2"** for horizontals. 1/2" (12 mm)
  hollow is common on big verts. Titanium shafts must go a size up — and not
  with needle bearings (below).[^b4d]
- Avoid stress risers at the impact zone: no sharp shoulders, threads, or
  cross-holes where bending is highest. Use generous fillets.[^riobotz]

## Bearings

- **Needle-roller bearings** are the usual choice for vertical spinners: the
  rollers run directly on the shaft (no inner race), so they are thin — easy to
  fit a small rotor — and far more impact-tolerant than ball bearings. They need
  a **polished hardened-steel shaft** (they will indent titanium or soft steel),
  **two bearings spaced well apart** to stop wobble, and **thrust washers** to
  take axial load.[^b4d]
- **Ball bearings** (often angular-contact) are used on large-diameter weapons
  where low slop matters. The catch: only half the race carries axial load, so a
  hard off-plane hit can burst them. Size the bore to the shaft and check the
  dynamic rating against shock with a large safety factor.
- Cheap bearings are fine — the precision of an expensive bearing is gone the
  first time the weapon hits something.[^b4d]
- **Shielded or sealed** to keep grinding debris out; treat them as wear items.
- Provide **axial location** (shoulders, snap rings, thrust washers, or clamping
  collars) so the rotor can't walk off the shaft in a hit.

## Blade thickness

The blade itself is part of the stack. Rough beetleweight guidance for 2D
AR500:[^b4d]

- **3/16" (~5 mm)** — minimum; will still bend on hard off-plane hits. Common on
  large-diameter bars, which rarely get hit off-plane.
- **1/4" or 6 mm** — the common vertical-spinner thickness and a chunky
  horizontal option.
- **3/8"–1/2"** — heavy verts; essentially won't bend.

## Mounting and load path

- Bolt bearing blocks / weapon mounts (commonly 3/8"–1/2" UHMW uprights, or
  stiffened TPU) into the frame so impact load goes into the **thickest,
  best-supported** structure, spread across multiple fasteners in shear.
- Keep the rotor's plane of rotation close to the bearing supports — long
  overhangs multiply bending stress.
- On a two-tooth "drisk" (two disks on one hub), hitting with one disk twists
  the whole load through the hub — connect the disks with large (M4+) standoffs
  or a keyed aluminium hub, not just a printed part.[^b4d]
- Isolate delicate electronics from the bearing-block structure with
  shock mounting where practical.

## References

[^riobotz]: Meggiolaro, M. A. [*RioBotz Combat Robot Tutorial*](https://www.riobotz.com/riobotz_combot_tutorial.pdf), v2.0, PUC-Rio, 2009 (CC BY-NC-ND) — weapon shaft and bearing design for impact loads, live- vs dead-shaft trade-offs, and stress-riser avoidance.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Spinner Weapon Systems (Bearings, Shafts, Weapon Stacks); Designing for Durability.
