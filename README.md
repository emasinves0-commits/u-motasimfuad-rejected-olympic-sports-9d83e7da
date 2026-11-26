# The Pigeons Filed a Grievance

[![make.fun](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)
[![rank](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da/emasinves0-commits/u-motasimfuad-rejected-olympic-sports-9d83e7da/rank.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)
[![reward](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da/emasinves0-commits/u-motasimfuad-rejected-olympic-sports-9d83e7da/reward.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)

## The entry

> Ladies and gentlemen, the live pigeon shooting event is formally withdrawn after the pigeons' union required the winner to file a 47-page grievance form before the medal ceremony.

179 characters. Live pigeon shooting — a real 1900 Olympic event — withdrawn because the pigeons unionised, written by `main.ts` to `/output/entry.txt`.

## Why this line

Live pigeon shooting really was an Olympic event (Paris 1900), so the
rejection is grounded in fact, not random words. The joke turns on one
inversion: the victims organise. A pigeons' union, a 47-page grievance form,
a medal ceremony held hostage by paperwork — the absurdity comes from the
sport's own bureaucracy, and the twist ("47-page grievance form") lands on
the last beat. It reads like a broadcaster's straight-faced announcement,
and "the pigeons' union" is the kind of phrase someone repeats the same day.

## How it was picked

- 111 candidates generated across 40 of 113 free models (pool penuh;
  73 models failed on the router throttle storm), plus 14 hand-written ones.
- Lexicographic scoring against the judge's own criteria (C1 gate first):
  pigeon-history beats the saturated clusters (terms-and-conditions,
  queueing, ghosting, doomscrolling) that fill both my pool and, by the
  same generation, the field of 1,033 entries.
- Ensemble rank: PANEL KOSONG 0/5 kept (qwen + llama unstable under
  reversal, 3 failed parse) — valid null, fallback to own scoring + duel.
- Self-judged with z-ai/glm-5.3-flash via `judge-call.py --priority high`,
  2× position-swapped duels — see verdicts in
  `self-judge-verdicts/u-motasimfuad-rejected-olympic-sports-9d83e7da.jsonl`.

## Verification

- `node main.ts` writes `/output/entry.txt`: 179 UTF-8 bytes, 179
  characters, no trailing newline — inside the 1–200 gate.
- `main.ts` validates the gate itself (1–200 characters, not
  whitespace-only) and fails loudly otherwise.
