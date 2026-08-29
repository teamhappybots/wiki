---
title: Weapon motors & ESCs
description: Selecting a brushless weapon motor and ESC, spin-up current, and firmware setup.
sidebar:
  order: 3
---

Nearly all modern insect-class kinetic weapons use a **brushless outrunner**
driven by a multirotor-style ESC.

## Motor selection

Trade-offs for a weapon outrunner:

- **Kv** — higher Kv gives more rpm (more energy, `KE ∝ ω²`) but less torque, so
  slower spin-up of a heavy rotor. Typical beetle weapon motors: **1000–2500 Kv**
  on 3–4S depending on rotor `I` and drive ratio.
- **Stator size** (e.g. 22xx, 28xx, 32xx, 35xx) — bigger stator = more torque
  and thermal mass = faster, cooler spin-up. Weapon motors are usually the
  largest motor on the robot.
- **Direct drive vs belt:** belt reduction lets a small high-Kv motor spin a
  high-`I` rotor with reasonable spin-up and moves the motor out of the impact
  path. Direct drive is simpler but exposes the motor shaft to weapon shock.

## ESC selection

- Current rating **at or above the motor's peak spin-up current**, which can be
  2–4× the continuous rating for the first second.
- BLHeli_S, BLHeli_32, or AM32 firmware ([ESC firmware](/power/esc-firmware/)).
- Cell count (voltage) rating matched to the [battery](/power/lipo-batteries/).
- Weapon ESC does **not** need reverse; it needs a controlled ramp.

## Spin-up current and the battery

Spin-up briefly pulls the largest current the robot ever draws. This sizes:

- battery **C-rating** and capacity ([LiPo batteries](/power/lipo-batteries/)),
- main **wiring gauge** and the [removable link](/power/switches-links/) rating,
- ESC peak rating.

A sagging battery or thin wire shows up as a weapon that spins up slowly and an
ESC that cuts out or desyncs.

## Firmware setup (weapon)

- **Motor timing:** medium/high for outrunners; raise if the motor stutters or
  desyncs under load.
- **Startup power / ramp:** low enough to avoid desync, high enough for
  acceptable spin-up.
- **Motor direction:** set so the rotor throws opponents the intended way.
- **Low-RPM power protection:** off or low — it can prevent spin-up under
  weapon load.
- **Signal-loss behavior:** motor must **stop** on lost signal — verify on the
  bench with the rotor in a [test box](/power/bench-testing/).
