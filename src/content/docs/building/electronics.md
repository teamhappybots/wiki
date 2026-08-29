---
title: Electronics and power
description: Batteries, ESCs, receivers, and wiring basics for combat robots.
---

## Core components

- **Battery** — LiPo is standard. Match voltage (cell count "S") and current
  (C-rating) to your motors. Use a hardcase pack where the ruleset requires it.
- **Drive ESCs** — brushed or brushless speed controllers sized to stall current.
- **Weapon ESC** — brushless controller with a slow spin-up / soft-start.
- **Receiver** — 2.4 GHz hobby radio. Set failsafes so the robot stops on signal loss.
- **Power switch** — a removable link or high-current switch, reachable from outside.

## Wiring checklist

- Fuse or link sized correctly; no exposed high-current terminals.
- Strain-relieve every connector; the robot will take 100 g shocks.
- Keep the receiver away from motors and the weapon ESC.
- Test failsafe **before** every event: kill the transmitter, confirm all motion stops.

> Expand with brushed-vs-brushless guidance, connector standards, and BEC sizing.
