---
title: Drive ESCs
description: Brushed dual ESCs, brushless drive ESCs, current ratings, braking, and failsafe behavior.
sidebar:
  order: 4
---

The electronic speed controller converts the receiver's servo signal into motor
power.

## Brushed drive ESCs

- **Dual-channel combat ESCs** drive both sides from one board, accept two
  servo inputs, and include mixing options. Purpose-built units from combat
  suppliers are the default for brushed beetles.
- Key ratings: **continuous current per channel**, peak current, battery cell
  count (voltage), and BEC output if it powers the receiver.
- Features to want: **brake/drag brake**, direction reversal, low-voltage
  cutoff that stops *drive but not weapon logic* appropriately, and a proper
  **signal-loss failsafe** (outputs go to neutral).

## Brushless drive ESCs

- Multirotor/car ESCs (often BLHeli_32 / AM32, or car-style ESCs) run brushless
  drive motors. **Bidirectional 3D mode** is required — the motor must run both
  directions from center stick.
- **Sensored** ESCs give smooth zero-rpm control and are worth it for driving
  precision. Sensorless works but cogs at a crawl.
- Configure via [BLHeli/AM32 firmware](/power/esc-firmware/): 3D mode on,
  low-timing for drive, brake on stop, motor direction, and a defined
  signal-loss behavior.[^am32][^blheli]

## Sizing current

Peak drive current per side ≈ `stall_current × n_motors_per_side`. Full-throttle
reversals briefly approach this. Choose an ESC with continuous rating at or
above the expected sustained pushing-match current, and peak rating above stall.
Undersized ESCs overheat and cut out mid-match.

## Failsafe

Every drive ESC path must bring the motors to a **safe stop on radio loss**.
Verify it on the bench: power the robot, arm it, then switch the transmitter
off — drive must stop within a fraction of a second. This is a ruleset
requirement and is checked at tech inspection.[^sparc] See
[Radio systems &amp; failsafe](/power/radio/).

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — failsafe requirements for drive and weapon systems.
[^am32]: [AM32 ESC firmware](https://github.com/am32-firmware/AM32) and the [AM32 wiki](https://github.com/am32-firmware/am32-wiki).
[^blheli]: [BLHeli / BLHeli_S firmware](https://github.com/bitdump/BLHeli); browser config via [ESC-Configurator](https://esc-configurator.com/).
