---
title: Drivetrain layouts
description: 2WD, 4WD, drive-by-weapon, shuffle drives, and invertible driving.
sidebar:
  order: 3
---

## Skid steer (tank drive)

Standard layout: left and right sides driven independently, robot turns by
driving the sides at different speeds. Simple, robust, mixed in the
[transmitter](/power/radio/).

- **2WD, 2 wheels total:** both wheels driven, full weight on traction, needs a
  skid or the weapon housing as a third contact point.
- **2WD, 4 wheels:** front or rear pair driven, others are casters/idlers.
  Simplest 4-wheel stance; traction limited to the driven axle's weight share.
- **4WD:** all four driven, chained/belted per side or four independent motors.
  Best traction and redundancy; most competitive beetles use it.

## Drive-by-weapon

The robot has no separate drive on one axis and instead uses the weapon's
ground contact or reaction. Rare and situational.

## Melty brain (full-body spinner)

The entire robot spins; translation comes from pulsing drive power once per
revolution, timed by an accelerometer and firmware. Powerful but requires
melty-capable firmware, careful CG, and driver skill. Not a first build.

## Shuffle / cam "walker" drives

Legged-looking drives that are mechanically wheeled (cams lifting feet) to
qualify for walker weight bonuses under some rulesets. Complex; check your
event's [walker clause](/rules/weight-classes/) before committing.

## Invertible driving

Insect robots get flipped constantly. Design to drive **upside down**:

- Wheels tall enough to contact the floor in both orientations, or
- A weapon/body shape that self-rights ([Self-righting](/structure/self-righting/)).
- The transmitter should have an **invert switch** that flips drive (and
  sometimes steering) so "forward" stays forward when inverted.
