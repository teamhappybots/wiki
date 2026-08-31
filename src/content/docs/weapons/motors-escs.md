---
title: Weapon motors & ESCs
description: Selecting a brushless weapon motor and ESC, spin-up current, and firmware setup.
sidebar:
  order: 3
---

Nearly all modern insect-class kinetic weapons use a **brushless outrunner**
driven by a drone-market ESC, connected to the rotor by a belt or by a
purpose-built hubmotor.

## Motor selection

Trade-offs for a weapon motor:

- **Size** — the 4-digit number is diameter × length in mm, of either the whole
  can or the stator depending on brand (check the listed dimensions). Bigger
  stator = more torque and thermal mass = faster, cooler spin-up. The weapon
  motor is usually the largest motor on the robot.
- **Kv and voltage — the point of higher voltage is *lower current*, not more
  power.** A given motor size has a fixed maximum power regardless of Kv. A
  high-Kv motor reaches it on fewer cells but draws more current and runs
  hotter; a low-Kv motor on more cells makes the same power at lower current and
  temperature. Experienced builders raise voltage and drop Kv to cut heat, then
  match rotor `I` and belt ratio to hit the target rpm.[^b4d]
- **Overvolting** — 3-minute matches let most brushless motors run well past
  their rated voltage (roughly +50%) without trouble.[^b4d]
- **Rough starting points:**[^b4d]
  - *Vertical spinners* — ~2836-size outrunners, or 2838/2845 inrunners.
  - *Horizontal spinners* — 3530/3536 outrunners, or thin 4006/5008 stator-size
    "pancake" motors for large low-rpm blades.
  - Cheap AliExpress outrunners work; BadAss and SunnySky are the known-good
    quality brands.

## Belt drive vs hubmotor

- **Belt (or gear) reduction** is the traditional setup: a small high-Kv motor
  spins a high-`I` rotor with reasonable spin-up, and the belt's give isolates
  the motor from impact shock. Common tooth profiles are **S3M, HTD3M, HTD5M,
  and XL**; some builders run a toothless pulley or a belt straight off the
  motor can so it can slip under shock. See [Shafts, bearings & mounting](/weapons/shafts-bearings/).
- **Hubmotor** — a motor built specifically to survive a rotor bolted straight
  to its spinning can, with oversized bearings. Off-the-shelf beetleweight
  hubmotors (e.g. Repeat Robotics 2812, Just 'Cuz RDY-5536) have made direct
  drive practical: compact, robust, and beginner-friendly.[^b4d]
- **Plain direct drive** — a rotor on a stock motor shaft — does **not** survive
  in beetleweight. Use a belt or a hubmotor.[^b4d]

## ESC selection

- **Don't trust the printed current rating.** Drone ESC ratings assume propeller
  airflow; sealed in a robot they sustain far less. Pick a proven ESC for your
  weapon size rather than sizing to the label.[^b4d]
- Prefer **AM32** firmware; BLHeli_S is fine for small weapons ([ESC firmware](/power/esc-firmware/)).[^am32][^blheli]
- Cell-count rating matched to the [battery](/power/lipo-batteries/) — and note
  a "6S" ESC may not survive 6S **LiHV**.[^b4d]
- The weapon ESC needs no reverse; it needs a controlled ramp and no active
  braking.
- On 5S–6S, fit a capacitor across the ESC power pads ([ESC firmware](/power/esc-firmware/#capacitors-on-the-weapon-esc)).

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

## References

[^am32]: [AM32 ESC firmware](https://github.com/am32-firmware/AM32) and the [AM32 wiki](https://github.com/am32-firmware/am32-wiki) — settings reference for timing, startup power, and low-RPM protection.
[^blheli]: [BLHeli / BLHeli_S firmware](https://github.com/bitdump/BLHeli) (see the manual PDFs in the repo); browser config via [ESC-Configurator](https://esc-configurator.com/).
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Brushless Motors; Brushless ESCs; Hubmotors; Power Transmission.
