---
title: Power switches & removable links
description: The mandatory external power disconnect — removable links, high-current switches, and requirements.
sidebar:
  order: 5
---

Every combat robot must have a way to **completely remove power** from the
outside, without tools, quickly. This is a hard rule at every event.[^sparc]

## Removable link (the standard solution)

A plug that completes the main power circuit and is pulled out to disconnect.

- Carries **full main-bus current** — size it like the
  [battery connector](/power/connectors/) (an XT30 or XT60 doubling as the link,
  or a purpose-made link).
- Mounted so it's **reachable from outside** the robot, clearly, in both
  orientations if possible.
- Retained in a socket that holds it against vibration but releases with a
  firm pull. A lanyard/loop makes it easy to grab.
- When out, the robot is **fully dead** — including weapon logic and any
  capacitor bleed path should discharge quickly.

## High-current switches

Purpose-built combat power switches (screw-actuated or slide) are allowed by
most rulesets as long as they break the **full current** and their state is
obvious. A switch that only signals a BEC or ESC enable line is **not**
sufficient — the main power must be broken.[^sparc]

Common beetleweight options:[^b4d]

- **FingerTech Mini Switch** — the long-time default: a screw contact, compact,
  vibration-resistant. On high-voltage systems with big capacitors it can arc on
  turn-on and slowly erode the contacts.
- **Lynx Switch** — adds a precharge resistor so the capacitors charge gently
  before the contact closes; solves the arcing.
- **Puppy Power Switch** — bulkier, higher current, spring-loaded **fail-ON** so
  a hard hit can't switch the robot off mid-match.
- Several combat **power-distribution boards** integrate a screw switch.

Wire the switch on the **negative** side. In a screw switch the tool becomes
part of the circuit; on the positive side it can go live and short to a
conductive (e.g. carbon-fibre) chassis. Never connect both battery leads to the
switch.[^b4d]

## What it must isolate

- Drive motors,
- weapon motor,
- receiver / BEC,
- any lights, pumps, or accessories.

Basically: link out → nothing on the robot can move or power up.

## Placement and protection

- Not behind the wedge or under the robot where it can't be reached.
- Protected from weapon debris and impacts so it can't be knocked out
  mid-match (which would be a safe failure) or jammed in (unsafe).
- Label the direction to remove it if it isn't obvious.

## Master power vs weapon lock

The removable link is separate from a **weapon lock** — a physical device that
stops the weapon moving while you handle the robot. Most rulesets require both.
A good weapon lock is one-handed to fit and remove, obviously visible, and can't
fall out on its own or when the weapon pushes against it.[^sparc][^b4d]

Common spinner locks:[^b4d]

- A **C-clamp, spring clamp, or locking pliers** on the rotor — quick, but clamp
  it *through a hole in the weapon* so it can't shake off.
- A **pin through the chassis** into the weapon's path — a screwdriver works; a
  **ball-lock pin** is the secure, easy version.
- A **3D-printed block** shaped to jam between chassis and rotor.

Lifters and other high-torque arms need a pin that locks the whole mechanism,
not just a stop against rotation. In the pits, cover forks and teeth with foam
cubes or printed guards.

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/) (Standardized Practices for the Advancement of Robot Combat), v1.4, 2023 — §"Power System" and §"Safety". Section numbers vary by revision; check your event's adopted version.
[^b4d]: Ping, L., with L. Skotiniotis, I. Talbert & D. Tran. *Beetleweights for Dummies* (Fall 2025 revision) — builder-maintained beginner guide distributed via the NHRL Discord. Sections: Electronics & Wiring → Switches; Testing & Safety → Weapon Locks.
