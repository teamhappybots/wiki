---
title: Flippers & lifters
description: Spring, motor, and pneumatic actuation for lifting and flipping weapons.
sidebar:
  order: 5
---

Flippers and lifters win by **control and displacement** — turning opponents
over, pinning them, or throwing them out of position — with little self-damage.

## Lifter vs flipper

- **Lifter:** a slow, powerful arm (often a geared motor + linkage) that raises
  the opponent to unbalance, carry, or pin them. High control, low drama.
- **Flipper:** a fast actuator that launches the opponent up and over. Needs a
  burst of energy in a few tens of milliseconds.

## Actuation methods (insect classes)

| Method | Energy source | Pros | Cons |
| --- | --- | --- | --- |
| **Servo / geared motor lifter** | Battery | Simple, no extra rules, repeatable | Slow; limited flip height |
| **Spring / elastic + motor reset** | Stored in spring, motor re-cocks | Fast release, no gas system | Reset time; spring fatigue |
| **CO₂ / HPA pneumatic** | Compressed gas | Very fast, powerful full flips | Pressure-system rules, weight of bottle/reg/valve, leaks |

Pneumatics in beetleweight are uncommon due to the mass of a compliant gas
system and the extra pressure-system rules — regulated pressure limits, burst
testing, secure mounting.[^sparc] Most insect flippers are electric or
spring-over-motor.

## Design points

- **Contact geometry:** the flipping edge must get *under* the opponent. A
  sharp, low front lip and good [wedge geometry](/weapons/control-wedges/) is
  half of a flipper's effectiveness.
- **Reaction load:** a hard flip drives the robot down and back — anchor the
  pivot into strong structure and keep enough front wheel load to not
  backflip yourself (unless self-righting handles it).
- **Speed vs force:** launching an opponent requires accelerating their mass in
  a short stroke — energy and power both matter. A lifter only needs force.
- **Self-use:** a flipper arm or lifter doubling as a
  srimech saves weight.

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/), v1.4, 2023 — pneumatic and hydraulic (stored-energy) system rules: allowed working fluids, maximum pressures, and required safety features.
