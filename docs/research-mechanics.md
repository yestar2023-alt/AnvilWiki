# Zombies Aren't Real — mechanics research notes

Research date: 2026-11-16 (Asia/Shanghai). Scope: **Zombies Aren't Real**, Steam App **5185890**, developer/publisher Jogamedev. Steam says Early Access began 2026-11-13; mechanics may change. No direct hands-on play or independent measurements were performed for these notes. Sources do not identify the build used for their observations.

## Page readiness

| Requested page | Decision | Core evidence and limits |
| --- | --- | --- |
| Evac Corridor | **Writable as a sourced, provisional how-to** | Placement, direction and speed are described by two guides; player feedback reports pathfinding and Hold interaction failures. Exact effect, precedence, controls and costs need in-game verification. |
| Safe Zones | **Writable as a beginner guide** | Zone, gates, civilian entry and defensive positioning are supported by official material and reported gameplay. Full spawn, breach, resupply and upgrade rules remain unverified. |
| Defense strategy | **Writable as a bounded beginner strategy** | Multiple sources support compact perimeter, garrison coverage and targeted support; describe recommendations as conditional, not proven optimum. |
| Unit upgrades | **Core answers missing for a comprehensive guide** | A guide reports specific garrison and mortar effects, but no independently verified current-build upgrade tree, costs, unlocks or full level scaling. A short attributed preliminary note is possible. |
| Best units tier list | **Not ready** | Unit roles and subjective preferences exist; comparable current-build performance, price, upgrade and map/difficulty tests do not. No defensible S–D ordering. |

## Sources and access

1. **Official, opened successfully:** [Steam store — App 5185890](https://store.steampowered.com/app/5185890/Zombies_Arent_Real/). Confirms identity, Early Access, gameplay objective, unit classes, safe zones, gates and air support. It does not document detailed civilian AI or upgrade numbers.
2. **Community hub, search-indexed result:** [Steam Community hub](https://steamcommunity.com/app/5185890/?curator_clanid=4777282). The indexed hub included a player asking what Hold and Evac Corridor do, and another asking about missing tanks. These are evidence of questions, not answers. Hub contents are dynamic; individual posts were not independently opened.
3. **Third-party guide, opened successfully:** [How To Video Game — Evac Corridor, November 15](https://howtovideogame.com/zombies-arent-real-evac-corridor/). Attributes Corridor and Hold descriptions to a developer's Steam discussion, but does not link the specific post; therefore treat those statements as **secondhand**, not independently verified developer statements. Reports controls and prices from store screenshots.
4. **Third-party guide, opened successfully:** [TPose Gaming — beginner guide](https://tposegaming.com/zombies-arent-real-beginner-guide/). Provides detailed unit, upgrade, ammunition and evacuation claims. Its precise values and universal rules are single-source claims, not independent in-game measurements by this researcher.
5. **Third-party guide, search-indexed only:** [Whisper of the House — beginner guide](https://www.whisperofthehouse.com/zombies-arent-real). Search index exposed detailed gameplay text including one Boston example; direct open returned **403**, so its live contents and screenshots could not be checked. Do not treat this as direct verification.
6. **Community reports reproduced by a third party, search-indexed only:** [GamesRor — co-op and balance feedback, updated November 15](https://gamesror.com/games/zombies-aren-t-real/zombies-aren-t-real-co-op-desync-and-balance-issues-guide). Search result reproduces attributed player reports including gjenkins, Coconutsales and others; direct open failed. The originating Steam threads were not located, so this is secondary reportage, not verified direct testimony. Specific bug reports remain anecdotal.
7. **Context, opened/search-indexed:** [SteamDB depot record](https://steamdb.info/app/5185890/depots/) reported public build 26647378 on November 13; [depot history](https://steamdb.info/depot/5185891/apps/) separately lists a November 15 beta manifest. Neither proves which build any guide or player used, nor establishes the latest build at reading time.

## Verified official baseline

The [Steam store](https://store.steampowered.com/app/5185890/Zombies_Arent_Real/) describes a preparation period with limited resources followed by an outbreak; zombies spread infection and the player can respond during the battle. Eliminating all zombies wins, with score determined by civilians saved. It names snipers, turrets, mortar squads and garrisons; bombers and gatling-gun helicopters provide air support. Air strikes can cause civilian casualties. Safe Zones and Gates can be placed to protect civilians. The store refers to combinations of units, buildings and upgrades, but does **not** specify an upgrade tree or a best unit.

## Evac Corridor

- [How To Video Game](https://howtovideogame.com/zombies-arent-real-evac-corridor/) attributes to the developer that clicking and dragging lays a directional corridor, civilians on it move along it automatically at increased speed, and Hold moves civilians from an outer circle toward an inner holding area. It reports Corridor in the Civilians menu, Q to place, Hold on E, Gate on G and Space to start. These keys are guide/screenshot claims, not independently checked current defaults.
- [TPose Gaming](https://tposegaming.com/zombies-arent-real-beginner-guide/) similarly describes directional movement, says civilians may walk into buildings rather than navigate around them, and suggests connecting segments along streets to a Broadcast radius. It claims corridor width can be increased without extra cost; verify controls and pricing before publishing that detail.
- **Reported experience / conflict:** [GamesRor's indexed player extracts](https://gamesror.com/games/zombies-aren-t-real/zombies-aren-t-real-co-op-desync-and-balance-issues-guide) report civilians getting stuck on buildings, weak attraction to corridors, slow Hold movement, and an overlap apparently disrupting Hold. This conflicts with the reliable Hold-to-Corridor combination presented by How To Video Game; neither proves a universal rule or an actual bug. Present the combo as something to test on an unobstructed route, not a guaranteed sequence.
- **Unverified figures:** How To Video Game reports screenshot rates of $0.40 per length unit for Corridor and $0.80 per radius unit for Hold; screenshots/build/date and units were not independently checked. Do not present these as current prices.
- Missing: speed multiplier; corridor width/interaction rules; exactly which civilians enter or leave; effects of overlapping Holds, Broadcasts and corridors; pathfinding; placement/editing during battle; current build and patch notes. The guide reports a planned evacuation update, but its developer post and release status were not verified; do not state the update has shipped.

## Safe Zones

- Officially, Safe Zones and Gates protect civilians. [TPose](https://tposegaming.com/zombies-arent-real-beginner-guide/) describes a walled area, gates for incoming civilians, Broadcast drawing nearby civilians, and garrisons covering the perimeter. These are guide reports; range, targeting and behavior require build-specific checks.
- [Whisper's indexed guide](https://www.whisperofthehouse.com/zombies-arent-real) reports one early Boston run starting around 2% protected against a 4% target, followed by civilians entering through gates and a successful result. This is one reported run, not a universal threshold; the page returned 403 when opened.
- TPose claims no zombie spawn inside a Safe Zone, unlimited reloads for most units inside an intact zone, loss of that benefit after breach, and turret exceptions. Whisper's indexed text supports continued garrison reloads inside a protected area but explicitly says it cannot establish every rule after a breach. Treat the broader rules as **unverified**, especially breach behavior.
- TPose says selecting a zone and upgrading increases wall health and that cost depends on zone size. No current price, HP table or upgrade level cap independently verified.
- Missing: exact shape/size limits and costs, placement restrictions, whether walls/gates automatically exist, gate operation and vulnerabilities, spawn exceptions, safe/counted/evacuated status, all breach and reload rules, and reproducible Broadcast range.

## Defense strategy

- A defensible starting recommendation from [TPose](https://tposegaming.com/zombies-arent-real-beginner-guide/) and the [indexed Whisper guide](https://www.whisperofthehouse.com/zombies-arent-real): keep the protected perimeter compact, provide gates where civilians approach, check garrison coverage of exposed walls, and reserve resources for uncovered approaches. This is strategy, not a guaranteed winning build; outbreak placement, map and objective matter.
- TPose reports elevated mortar and sniper placements increase reach and mortar blasts can also kill civilians; it suggests avoiding crowded gates. The official store independently confirms that air strikes can hurt civilians, **not** that mortars do; treat mortar friendly fire as a single-guide claim.
- The indexed Whisper report says each additional mortar increases the next one's price; TPose claims a $1 increment. No direct current-build confirmation or evidence this scaling applies to all units.
- TPose recommends bridges as choke points but reports swimmers can cross water and isolated zombies can delay level completion after a bridge is destroyed. These are useful specific tests, not independently verified rules.
- Missing: reproducible map, difficulty and loadout; initial resources, victory thresholds, timing, target priorities and side-by-side results; evidence for any universal first-build order.

## Unit upgrades and ranking: leads, not established facts

- [TPose](https://tposegaming.com/zombies-arent-real-beginner-guide/) claims a garrison upgrade expands its magazine, and one mortar upgrade changes damage from 10 to 30 without changing blast size. It also reports garrison damage 5, sniper damage 80, and turret ammunition 1,000. All are **single-guide, build-unspecified claims**; verify with in-game UI and controlled tests before publishing numerical tables.
- TPose reports skill points are allocated to battle abilities in Loadout and can be reassigned between runs. Distinguish this system from upgrades to an already placed unit and from Safe Zone wall upgrades; exact unlocks, costs, caps and reset rules remain unknown.
- [GamesRor's indexed extracts](https://gamesror.com/games/zombies-aren-t-real/zombies-aren-t-real-co-op-desync-and-balance-issues-guide) attribute favorable opinions of helicopters and battleships, and unfavorable opinions of APC, Medevac and Security Bus, to players; another report values low-cost garrisons. These are individual preferences without controlled comparisons and include abilities/vehicles as well as static units. They cannot justify tiers.
- To make the upgrade and tier pages viable, record current build and unmodded settings; capture each unit's base and per-level cost, damage, range, rate, ammo/reload, unlock and upgrade effects; compare equal budgets on named scenarios and difficulties, including civilian losses and failure cases. Track beta versus public branch and repeat after relevant patches.
