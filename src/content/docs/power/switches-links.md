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

The removable link is separate from a **weapon immobilization** device (a
physical pin or clamp that stops the weapon spinning while you handle the robot
in the pit). Most rulesets require both.[^sparc]

## References

[^sparc]: [*SPARC Robot Construction Specifications*](https://sparc.tools/) (Standardized Practices for the Advancement of Robot Combat), v1.4, 2023 — §"Power System" and §"Safety". Section numbers vary by revision; check your event's adopted version.
