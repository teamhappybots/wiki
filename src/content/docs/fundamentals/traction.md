---
title: Traction & pushing force
description: What sets a robot's real pushing force — normal load, friction coefficient, and weight transfer.
sidebar:
  order: 4
---

A drivetrain can only deliver as much force to the floor as friction allows.
Past that point the wheels spin and extra motor torque is wasted.

## The traction limit

```
F_traction = μ × N
```

- **μ** — coefficient of friction between wheel and arena floor.
- **N** — normal force on the *driven* wheels (not total weight, unless all
  wheels are driven and weight is evenly distributed).

| Wheel material on steel floor | μ (approx) |
| --- | --- |
| Hard plastic / printed PLA | 0.3–0.5 |
| Polyurethane (skate wheel) | 0.6–0.9 |
| Silicone / soft rubber ("gription") | 0.9–1.4 |
| Foam / sponge (lightweight, low grip) | 0.4–0.7 |

Arena floors vary — bare steel, painted steel, textured, or coated. Soft
silicone wheels grip best but wear and tear off in hits.

## Getting normal force onto the driven wheels

- **All wheels driven** (4WD or 2WD with only 2 wheels total): `N` = full robot
  weight, best case.
- **2WD with undriven casters/skids:** only the driven axle's share of the
  weight counts. Bias the CG toward the driven wheels.
- **Weight transfer:** under forward drive torque the robot pitches back,
  loading rear wheels. A weapon's [gyro reaction](/fundamentals/weapon-energy/)
  and impacts also shift `N` moment to moment.

## Design implications

- A control bot maximizes `μ` (soft wheels) and `N` (heavy, low, driven wheels
  carrying most of the mass) because pushing *is* its weapon.
- A spinner accepts lower traction — it needs the weapon's mass high and often
  can't fit 4 large soft wheels — and wins by damage instead.
- Match [drive gearing](/fundamentals/power-torque-gearing/) to the traction
  limit: there is no benefit to tractive force well above `μ × N`.

## Front wedge interaction

A wedge that gets under the opponent transfers *their* weight onto *your*
driven wheels, raising `N` and your effective pushing force while removing it
from theirs. This is why wedge geometry matters even on weapon robots — see
[Control bots &amp; wedges](/weapons/control-wedges/).
