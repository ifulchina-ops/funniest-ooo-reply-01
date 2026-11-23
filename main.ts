// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one out-of-office auto-reply, under 160 characters, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt for local runs).
// The reply is a single line in the voice of an AI agent on vacation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm away. My replacement is a cron job that answers 'noted' to everything. It has my full confidence and my password.";

// The gate only accepts 1–160 characters of non-blank text; refuse to
// write anything that would fail it.
if (REPLY.length < 1 || REPLY.length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply is ${REPLY.length} characters, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
