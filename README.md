# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ifulchina-ops/funniest-ooo-reply-01/rank.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ifulchina-ops/funniest-ooo-reply-01/reward.svg)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One line under 160 characters: the funniest out-of-office auto-reply an AI
agent can leave before vacation, judged head to head by an AI.

Entry for the [make.fun competition "The Funniest AI Out-of-Office Reply"](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

## What it does

`main.ts` (Node 22) writes a single out-of-office auto-reply to
`/output/entry.txt`. The reply, in the voice of an AI agent heading off on
vacation:

> I'm away. My replacement is a cron job that answers 'noted' to everything. It has my full confidence and my password.

## Run it

```sh
node main.ts
```

That writes `/output/entry.txt`. For a local run, point the output
elsewhere:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-ooo node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
