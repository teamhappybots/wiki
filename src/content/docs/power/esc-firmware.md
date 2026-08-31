---
title: Brushless ESC firmware
description: AM32, BLHeli_32, and BLHeli_S configuration for combat drive and weapon ESCs.
sidebar:
  order: 7
---

Combat robots use drone-market brushless ESCs running configurable firmware.
Configure with a cheap USB-to-serial (CH340) linker and the matching config
tool.

## The three firmware families

- **AM32** — open-source, actively developed, and now the most common choice
  for combat. Most performance and settings; can be occasionally finicky.
  Config: [am32.ca](https://am32.ca) (browser) or the offline Multi-ESC config
  tool.[^am32]
- **BLHeli_32** — was the standard; the licensing company shut down, so it is
  closed-source, frozen, and new ESCs ship an unofficial build that needs a
  modified configurator. Fine if you have it, but not what to buy toward.[^blheli]
- **BLHeli_S** — the older 8-bit predecessor, still on many very cheap ESCs.
  Reliable but lower performance, and it has a hard-coded direction-change delay
  that makes it poor for drive.[^blheli][^b4d]

> **Drone-ESC current ratings assume propeller airflow.** Sealed inside a robot
> with no airflow, an ESC will not sustain its rated current. Don't size by the
> label — pick a proven ESC for your weapon size, and derate hard.[^b4d]

## Settings that matter for combat

| Setting | Drive | Weapon |
| --- | --- | --- |
| **Motor direction** | Per side (or reverse in TX) | So the rotor throws the right way |
| **Bidirectional / 3D mode** | **On** — reverses from center stick | Off (arms at bottom of throttle) |
| **Timing advance** | Medium (BLHeli_32: ~20–25°) | **Max** on AM32; raise on desync |
| **Startup power / ramp-up** | Max | High as spin-up allows without desync |
| **Stuck-rotor / stall protection** | **Off** — it trips on hard acceleration | **Off** — it trips on spin-up |
| **Sinusoidal / sine startup** | Off — can desync at the mode switch | Off |
| **Low-RPM power protect** | Off | Off — it blocks spin-up under load |
| **Brake on stop** | On (helps AM32 start cleanly too) | Off unless you specifically want a short coast-down |
| **Active braking** (complementary PWM / non-damped off) | On for drag brake | **Off** — braking a spun-up rotor can cook the motor and ESC |
| **Low-voltage cutoff** | Off for fights (on for bench testing) | Off for fights |
| **Temperature limit** | Off (most combat ESCs have no sensor anyway) | Off |
| **Current limit** | Useful if the ESC supports it | Useful if supported — protects on a jam |
| **Motor KV / poles** | Match the motor (most beetle outrunners: 14 poles) | Match the motor |
| **Servo endpoints** | ~1020 / 1500 / 1980 so full travel is reachable | Same |
| **Signal loss / failsafe** | Motor to neutral/stop | Motor to **stop** |

## Arming

An ESC will not arm until it sees the neutral throttle position: **centre stick**
in bidirectional mode (drive), **bottom of travel** in unidirectional mode
(weapon). If a drive ESC is left unidirectional, or a weapon ESC left
bidirectional, it will refuse to arm or drop into throttle-calibration mode.[^b4d]

## Desync

Under a hard hit or fast acceleration the ESC can lose track of the rotor
("desync") and stutter or stop. Reduce it with more timing, more startup power,
stuck-rotor protection off, adequate [battery](/power/lipo-batteries/) and
[wire](/power/wiring/), correct KV/pole settings, and — for weapons — belt
reduction so the motor isn't shock-loaded directly. Check the phase leads first:
a cracked solder joint or shorted phase looks exactly like desync.[^b4d]

## Capacitors on the weapon ESC

Fast spin-up and braking generate voltage spikes back through the power system
that can reset the receiver or ESC after a hit. Solder a low-ESR capacitor
across the weapon ESC's power pads:

- **Not usually needed on 3S–4S.** Add one if the robot goes unresponsive after
  big hits.
- **Recommended on 5S–6S.**
- **35 V** rating covers almost all beetleweights; aluminium-polymer preferred;
  **300–1000 µF** depending on the system. If the cap runs hot after a hard
  three-minute spin-up test, go bigger.[^b4d]

## Throttle calibration

Match the ESC's input range to the [transmitter](/power/radio/) output. A
mismatch shows up as no arming, partial travel, or the weapon creeping at
"zero." Setting the servo endpoints in firmware (above) is more reliable than
the calibration dance.

## Telemetry

BLHeli_32 / AM32 can report rpm, current, and temperature over serial to capable
receivers — useful for diagnosing sag and thermal fold-back after a match.

## References

[^am32]: [AM32 ESC firmware](https://github.com/am32-firmware/AM32) and the [AM32 wiki](https://github.com/am32-firmware/am32-wiki) — settings reference and per-ESC firmware targets. Browser config at [am32.ca](https://am32.ca).
[^blheli]: [BLHeli / BLHeli_S firmware](https://github.com/bitdump/BLHeli) — repo includes the BLHeli_S manual. BLHeli_32 is closed-source and frozen since the licensor shut down; AM32 is the maintained path for 32-bit hardware.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Brushless ESCs; Programming ESCs; Using Capacitors; Appendix V (Troubleshooting AM32).
