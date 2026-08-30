---
title: Brushless ESC firmware
description: BLHeli_S, BLHeli_32, and AM32 configuration for drive and weapon ESCs.
sidebar:
  order: 7
---

Brushless ESCs run configurable firmware. The common families in insect combat
are **BLHeli_S**, **BLHeli_32**, and the open-source **AM32**. Configure with a
USB linker and the matching config tool (BLHeliSuite / ESC-Configurator / AM32
configurator).[^am32][^blheli]

## Universal settings

| Setting | Drive | Weapon |
| --- | --- | --- |
| **Direction** | Set per side (or reverse in TX) | Set so rotor throws the right way |
| **Bidirectional / 3D mode** | **On** — motor must reverse from center | Off |
| **Brake on stop** | On (drag brake for control) | Optional; brake shortens weapon coast for pit safety |
| **Motor timing** | Low–medium | Medium–high for big outrunners; raise on desync |
| **Startup power / ramp** | Medium | As low as gives acceptable spin-up without desync |
| **Low-RPM power protect** | Low/off (helps low-speed drive) | Off — it blocks spin-up under load |
| **Temperature protection** | On | On, but know it may fold back weapon power when hot |
| **Signal loss / failsafe** | Motor to neutral/stop | Motor to **stop** |

## Desync

Under a heavy hit or hard acceleration the ESC can lose track of rotor position
("desync"), causing a stutter or full stop. Reduce it with higher motor timing,
a smoother startup ramp, adequate [battery](/power/lipo-batteries/) and
[wire](/power/wiring/), and — for weapons — belt reduction so the motor isn't
shock-loaded directly.

## Throttle calibration

Match the ESC's throttle range to the [transmitter](/power/radio/) output
(min/max endpoints). A mismatch shows up as no arming, partial travel, or the
weapon creeping at "zero."

## Telemetry

BLHeli_32 / AM32 can report rpm, current, and temperature over serial to
capable receivers — useful for diagnosing sag and thermal fold-back after a
match.

## References

[^am32]: [AM32 ESC firmware](https://github.com/am32-firmware/AM32) and the [AM32 wiki](https://github.com/am32-firmware/am32-wiki) — full settings reference; browser config at [ESC-Configurator](https://esc-configurator.com/).
[^blheli]: [BLHeli / BLHeli_S firmware](https://github.com/bitdump/BLHeli) — the repo includes the BLHeli_S manual and revision history. BLHeli_32 is closed-source and no longer distributed; AM32 is the maintained replacement for 32-bit hardware.
