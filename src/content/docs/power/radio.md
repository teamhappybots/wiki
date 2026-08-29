---
title: Radio systems & failsafe
description: 2.4 GHz transmitters and receivers, binding, mixing, model memory, and configuring failsafe.
sidebar:
  order: 6
---

## The link

Modern combat robots use **2.4 GHz** hobby R/C:

- **Transmitter (TX):** a gamepad-style or tray/stick radio. Buy once; a decent
  multi-model radio lasts across many robots.
- **Receiver (RX):** bound to the TX, outputs servo (PWM) or serial (e.g.
  S.BUS/IBUS) signals to the ESCs.
- **Protocol:** stick to a mainstream, well-supported protocol with reliable
  failsafe. Some cheap gamepad radios have poor range or failsafe behavior —
  check community reports before buying for combat.

## Setup essentials

- **Binding:** pair RX to TX; re-check the bind after firmware updates.
- **Model memory:** one profile per robot, named. Prevents driving robot B with
  robot A's mixes and reverses.
- **Mixing:** combine throttle + steering channels into left/right drive
  ("elevon"/"tank" mix) if the ESC doesn't mix internally. Many combat dual
  ESCs mix onboard — then send raw throttle and steering.
- **Channel reverse and endpoints:** set so forward is forward, and weapon
  travel matches the [ESC](/weapons/motors-escs/) arming range.
- **Invert switch:** a switch that flips drive for
  [inverted running](/drivetrain/layouts/#invertible-driving).
- **Weapon on a switch or separate stick**, ideally with an arming step so it
  can't spin up from a stick bump.
- **Rates/expo:** dial in expo on steering for finer center control.

## Failsafe — the critical part

On **loss of signal**, every output must go to a safe state:

- **Drive → neutral / stop.**
- **Weapon → stop** (zero throttle), not "hold last".
- Configure failsafe **in the receiver** (and confirm ESC behavior on lost
  signal too). "Hold last command" is unsafe for a weapon.

### Verifying failsafe

1. Robot on a stand, wheels clear, weapon removed or in a [test box](/power/bench-testing/).
2. Power up, bind, arm, apply some drive and weapon throttle.
3. **Switch the transmitter off.**
4. Drive must stop and weapon must stop within a fraction of a second.
5. Repeat after any config change.

This exact test is performed at tech inspection.
