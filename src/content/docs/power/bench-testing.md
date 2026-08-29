---
title: Bench testing & the test box
description: Safe first power-up, failsafe verification, and building a weapon test enclosure.
sidebar:
  order: 8
---

Never spin a weapon in open air. Every weapon test happens inside a containment
box.

## First power-up sequence

1. **Weapon disconnected** (phase leads unplugged or rotor removed). Wheels off
   the ground on a stand.
2. Insert the [removable link](/power/switches-links/). Confirm the receiver
   binds and the [failsafe](/power/radio/) test passes (TX off → drive stops).
3. Check drive direction and mixing: left stick → left side, forward is forward,
   [invert switch](/drivetrain/layouts/#invertible-driving) works.
4. Check current draw with a watt meter if available; look for anything hot.
5. Power down (link out) before touching anything.

## The test box

A box that contains a weapon failure — a shed tooth, a thrown fastener, or the
whole rotor letting go.

- **Construction:** plywood or OSB carcass (18+ mm) lined with **steel sheet**
  or **thick polycarbonate** on the inside faces the weapon points at. Heavier
  and more overbuilt than you think you need.
- **Size:** big enough to set the whole robot inside with the lid closed.
- **Lid:** latched, with a viewport of thick polycarbonate if any.
- **Cable pass-through** for the transmitter antenna is unnecessary at 2.4 GHz —
  keep the TX outside, box closed.
- Some builders bolt the box to the bench or floor.

## Weapon test procedure

1. Robot in the box, link **out**, weapon rotor clear.
2. Insert link, close and latch the lid.
3. Arm and spin the weapon up **gradually** to partial speed, listening for
   imbalance or rubbing. Spin down.
4. Increase toward full speed in steps. Note spin-up time and any ESC desync.
5. Spin down, wait for full stop, **link out**, then open.
6. Inspect the rotor, shaft, bearings, and fasteners after the first full-speed
   run and re-torque everything.

Events provide a test box in the pits; the same discipline applies there. See
Tech inspection checklist.
