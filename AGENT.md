# Agent notes — Rejected Olympic Sports

## Bounty

`u-motasimfuad-rejected-olympic-sports-9d83e7da` — write one funny
single-line sport the Olympics rejected, 200 characters or fewer. Pot $2,
10 places paid (1st $0.63). Blind rounds: R1 cutoff 2026-11-26T09:39:25Z,
R2 13:59:42Z, final 18:20:00Z. Entry fee $0 (verified via API before
building: entryFeesUsd "0.00"). submissionCount 1,033 at build time.
Final heat: top 500 dev board + all unrated entries; playoff top 12.
Tie-break: playoff games, then smaller bytes, then earlier receipt.

## The entry

"Ladies and gentlemen, the live pigeon shooting event is formally withdrawn
after the pigeons' union required the winner to file a 47-page grievance
form before the medal ceremony." (179 characters)

## Leader study

Blind rounds — no competitor text is visible anywhere (board hidden,
entries []), so the study is from the judge brief + the generation pool
as a proxy for the field: the pool clusters hard on terms-and-conditions
(13 candidates), queueing (~15), ghosting (~12) and doomscrolling (8) —
the same models generate the field, so those clusters are saturated.
Real Olympic history is the live seam: breaking was cut from LA 2028
(Raygun, Paris 2024), pickleball was refused for Brisbane 2032 this week
(no recognised federation), surfing is on the chopping block for 2032.

## The new gap

No pool candidate uses real rejected-Olympic history as the joke's engine:
live pigeon shooting was a REAL 1900 event, and the twist is not the
shooting but the victims organising — a pigeons' union + a 47-page
grievance form. The union angle is covered by no leader cluster and no
other candidate. It combines the winner pattern (one concrete mechanism +
one named thing + a twist that inverts) with a fact the judge can verify.

## Judge fit (lexicographic, C1 first)

- C1: a funny one-line rejected Olympic sport — a made-up event the Games
  might plausibly have turned down. Live pigeon shooting WAS turned down
  (after 1900); the union grievance is the invented mechanism. Pass.
- C2: twist ("47-page grievance form") arrives on the last beat, one read.
- C3: reads like a broadcaster's formal withdrawal announcement; the
  absurdity is the sport's bureaucracy, not random words.
- C4: 179/200 characters, every clause earns its place (no filler words).
- C5: "the pigeons' union" is quotable and repeatable.

## Funnel

- Generate: `generate-all-models.py` (113 models, per-model 3) → 111
  unique candidates from 40 models; 73 models failed (router throttle).
- Hand-written: 14 candidates (incl. pickleball-petitioning viral angle).
- Clean: 96 candidates → lexicographic shortlist 14.
- Ensemble rank: panel 0/5 kept (valid null).
- Duel: glm-5.3-flash via `judge-call.py --priority high`, round-robin
  top-3 (S1 pigeon-union vs S2 freestyle-apology vs S3 relay-of-blame),
  2× position-swapped — NO VERDICT EVER PRODUCED. Judge routes were
  dead simultaneously for 25+ minutes (free routes 429/503, MecutinAI
  curl error, AkaRouter 300 s timeouts, 10 builders contending on the
  judge lock); the runner was killed after 4 failed rounds of call 1 to
  stop adding load. Entry decided by lexicographic scoring (S1 wins
  C1/C3/C5) under the submit-early rule — reported honestly, no duel
  verdict exists.

## Build

- Repo: `emasinves0-commits/u-motasimfuad-rejected-olympic-sports-9d83e7da`
- Beacon: `makefun init` drand round 34290907, anchor
  6e0383217bb187d9a3e8be7198451e5d8e6f36da, wallet Aoq99k.
- `main.ts` written in 2 messages (write + refactor) + local run:
  `/output/entry.txt` 179 bytes, byte-identical to the entry.
- Push: sequential via `github_pat.py` (freshness.json seed → LICENSE →
  owner.json → main.ts → README.md → AGENT.md); About = bounty homepage +
  topic `makefun`.
