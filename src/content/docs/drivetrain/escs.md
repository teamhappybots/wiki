---
title: Drive ESCs
description: Brushed dual ESCs, brushless drive ESCs, current ratings, braking, and failsafe behavior.
sidebar:
  order: 4
---

The electronic speed controller converts the receiver's servo signal into motor
power.

## Brushed drive ESCs

- **Dual-channel combat ESCs** drive both sides from one board, take two servo
  inputs, and often mix onboard. Purpose-built units (e.g. Just 'Cuz WEKA,
  Repeat Dominion) are the default for brushed beetles and usually include a
  BEC.[^b4d]
- Key ratings: **continuous current per channel**, peak current, cell count
  (voltage), BEC output.
- Features to want: **drag brake**, direction reversal, a drive calibration
  routine, and a proper **signal-loss failsafe** (outputs to neutral).

## Brushless drive ESCs

- Drone ESCs running **AM32** (preferred) or BLHeli_32 firmware. Beetle-size
  sensored motors are rare, so this is almost always sensorless with a
  combat-tuned firmware profile.
- Dual combat AM32 ESCs (e.g. Repeat Dual AM32) mix onboard and have a BEC and
  working current limiting; single 35 A drone ESCs (HakRC, Flycolor Raptor5, or
  the pre-flashed JCR-RC Mini) are the cheap route — most drone ESCs have **no
  BEC**, so power the receiver from one that does.[^b4d]
- Configure via [ESC firmware](/power/esc-firmware/): **bidirectional / 3D mode
  on** (reverses from centre stick), timing medium, **startup power max**,
  **brake on stop on**, **stuck-rotor/stall protection off** (it trips on hard
  acceleration), sinusoidal startup off, and a defined signal-loss behaviour.[^am32][^blheli][^b4d]

## Sizing current

Peak drive current per side ≈ `stall_current × n_motors_per_side`; full-throttle
reversals briefly approach it. On a **drone ESC the printed rating assumes
propeller airflow** and won't be met sealed in a robot — pick a proven ESC for
the class rather than trusting the number. Undersized or over-trusted ESCs
overheat and cut out mid-match.[^b4d]

## Arming

A drive ESC set to bidirectional mode only arms when it sees **centre stick**.
If it's left in unidirectional mode it won't arm from centre and may drop into
throttle-calibration mode instead.[^b4d]

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
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Brushed Motors & ESCs; Brushless ESCs; Programming ESCs.
