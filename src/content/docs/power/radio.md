---
title: Radio systems & failsafe
description: 2.4 GHz transmitters and receivers, binding, mixing, model memory, and configuring failsafe.
sidebar:
  order: 6
---

## The link

Combat robots use off-the-shelf **2.4 GHz** hobby R/C:

- **Transmitter (TX):** an "air" radio (gamepad or tray/stick, for drones and
  planes) or a "surface" radio (pistol grip, for cars). Air radios are far more
  common. Buy once — a good multi-model radio lasts across many robots.
- **Receiver (RX):** bound to the TX, outputs servo (PWM) or serial (S.BUS /
  CRSF) to the ESCs.
- **Protocol:** the receiver has to match one the transmitter speaks.

### Current picks[^b4d]

| System | Protocol | Notes |
| --- | --- | --- |
| **RadioMaster Pocket / Zorro** (air) + ER4/ER3C-i RX | **ExpressLRS (ELRS)** | The current recommendation for a first radio — best performance, open-source, EdgeTX, cheap. Only slightly more than a FlySky. |
| **RadioMaster MT12** (surface) | ELRS or 4-in-1 | Best surface option; same customisability. |
| **FlySky FS-i6 / i6X** + FS2A RX | **AFHDS-2A** | The long-time budget default; still fine and very common, and what many combat "motherboard" boards with built-in receivers expect. |

Older or cheap gamepad radios can have poor range or failsafe behaviour — check
community reports before buying for combat.

### Standard channel map (air radio)[^b4d]

- **CH1 / CH2** — left / right drive (mixed into arcade control, below).
- **CH3** — spinning weapon (throttle stick — no self-centring spring).
- **CH4** — bidirectional arm (lifter, hammer, flipper) on the rudder stick.

## Setup essentials

- **Binding:** pair RX to TX; re-check the bind after firmware updates. ELRS uses
  a **bind phrase** set over the TX/RX WiFi hotspot — the same phrase on any
  receiver pairs it.
- **Model memory:** one named profile per robot. Prevents driving robot B with
  robot A's mixes.
- **Drive mixing:** two mixes turn independent CH1/CH2 into arcade control — a
  **+100%** mix (CH1 → CH2) for forward/back, and a **−100%** mix (CH2 → CH1)
  for turning. Then reverse motors / swap channels until forward is forward and
  turns go the right way. Many combat dual ESCs mix onboard instead — then send
  raw throttle and steering. See the
  [Bristol Bot Builders mixing guide](https://bbb.gd/mixing).[^bbb]
- **Endpoints:** span the full −100% to +100% so the ESC sees its whole range.
- **Invert switch:** flips drive (and sometimes steering) for
  [inverted running](/drivetrain/layouts/#invertible-driving).
- **Weapon on a switch or the throttle stick**, ideally with an arming step so
  it can't spin up from a stick bump.
- **Expo:** most builders set some **negative** expo on steering — calmer around
  centre, full rate at the ends.

## Failsafe — the critical part

On **loss of signal**, every output must go to a safe state:

- **Drive → neutral / stop** (1500 on CH1, CH2, CH4).
- **Weapon → stop** — zero throttle, which is **1000** on CH3, *not* the 1500
  centre and *not* "hold last".
- Where to set it depends on the system: **on the receiver** for ELRS and FlySky
  (and note the two FS2A chip revisions behave differently — the "rectangle
  chip" learns failsafe from a button press, not TX values). Confirm ESC
  behaviour on lost signal too. "No pulses" works with some ESCs but not
  all.[^b4d][^sparc]

### Verifying failsafe

1. Robot on a stand, wheels clear, weapon removed or in a [test box](/power/bench-testing/).
2. Power up, bind, arm, apply some drive and weapon throttle.
3. **Switch the transmitter off.**
4. Drive must stop and weapon must stop within a fraction of a second.
5. Repeat after any config change.

This exact test is performed at tech inspection.[^sparc]

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — radio failsafe requirements and the tech-inspection failsafe test. [NHRL](https://wiki.nhrl.io/) documents the same test for its events.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Control Systems (Transmitters and Protocols, Drive Mixing, Setting Failsafe).
[^bbb]: [Bristol Bot Builders](https://bristolbotbuilders.com/) — [binding](https://bbb.gd/binding), [mixing](https://bbb.gd/mixing), and [failsafe](https://bbb.gd/failsafe) guides, plus the [tip-speed / drive-RPM calculator](https://bristolbotbuilders.com/tools/tipspeed/).
