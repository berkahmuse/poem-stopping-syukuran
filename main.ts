import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = `The hand that stops reaching
is not the hand that failed.
It learned the shape of enough,
set the cup down whole,
and stayed — not stuck, but rooted —
where the leaving would have cost
the only self it had left to keep.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
