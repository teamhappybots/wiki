---
title: Shafts, bearings & mounting
description: Weapon shaft sizing, bearing selection, preload, live-shaft vs dead-shaft, and impact load paths.
sidebar:
  order: 4
---

The weapon rotor stores more energy than anything else on the robot and dumps
shock loads into its support every hit. This is the most common structural
failure point.

## Live shaft vs dead shaft

| | Live shaft | Dead shaft |
| --- | --- | --- |
| Definition | Shaft spins with the rotor, supported by bearings in the frame | Shaft is fixed to the frame; rotor spins on bearings around it |
| Load path | Bending loads run through a rotating shaft | Rotor loads go straight into a static shaft, both ends supportable |
| Strength | Good | Better — easiest to support in double shear |
| Common in | Bars, discs | Drums, discs, shells |

Dead shaft, supported at **both ends** (double shear), is the strongest common
arrangement for beetleweight and up.

## Shaft sizing

- Size for **bending and shock**, not torque — torque is modest, impact
  bending is severe.
- Beetleweight weapon shafts are commonly **6–10 mm** hardened or alloy steel
  (e.g. 4140/4340), not aluminum.
- Avoid stress risers at the impact zone: no sharp shoulders, threads, or
  cross-holes where bending is highest. Use generous fillets.

## Bearings

- **Deep-groove ball bearings** handle the combined radial + light axial load;
  size the bore to the shaft and check the dynamic load rating against expected
  shock (with a large safety factor — shock loads are hard to predict).
- Use **two bearings** spaced apart to react the moment from off-center hits.
- **Shielded or sealed** to keep grinding debris out; plan to replace them as
  wear items.
- Provide **axial location** (shoulders, snap rings, or clamping collars) so the
  rotor can't walk off the shaft in a hit.
- Consider a light **preload** to remove play; too much preload overheats them.

## Mounting and load path

- Bolt bearing blocks into the frame so impact load goes into the **thickest,
  best-supported** structure, ideally spread across multiple fasteners in shear.
- Keep the rotor's plane of rotation close to the bearing supports — long
  overhangs multiply bending stress.
- Isolate delicate electronics from the bearing-block structure with
  shock mounting where practical.
