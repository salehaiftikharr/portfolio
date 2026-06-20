// Real, captured runs of the Forge "minions" (the autonomous PR-opening agents),
// replayed by the interactive console on the site. Each is an actual run against
// the public forge-minions-demo repo: the live progress stream, the verdict, and
// — where one was opened — a clickable, real pull request you can verify.

export interface MinionRun {
  id: string;
  /** Short label for the prompt chip. */
  label: string;
  /** What the user "says" to the minion. */
  prompt: string;
  /** The live progress stream, replayed line by line. */
  steps: string[];
  outcome: {
    kind: "shipped" | "declined" | "authored";
    headline: string;
    reason: string;
    prUrl?: string;
    prLabel?: string;
    /** Calibrated 0..1 confidence the gate assigned an approved change. */
    confidence?: number;
    /** Blast-radius read of the diff. */
    risk?: "low" | "medium" | "high";
  };
  /** One-line footnote: tests + model. */
  meta: string;
  /** Optional unified diff to reveal. */
  diff?: string;
}

export const minionRuns: MinionRun[] = [
  {
    id: "ship",
    label: "Fix the clamp bug",
    prompt: "work on the clamp bug in forge-minions-demo",
    steps: [
      "issue #3: Add a clamp(n, min, max) helper",
      "cloning forge-minions-demo…",
      "baseline: 3/7 tests passing",
      "scope hint: test/utils.test.js",
      "studying the codebase…",
      "plan ready",
      "implementing…",
      "final: 4/7 passing — verifying…",
      "mutation-testing the fix…",
      "mutation check: 3/3 mutants caught",
      "confidence 0.95 (high) · risk low — clear to auto-ship",
      "approved — pushing branch and opening PR…",
    ],
    outcome: {
      kind: "shipped",
      headline: "Shipped a verified pull request",
      reason:
        "Adds a correct, properly exported clamp function using Math.min/Math.max that satisfies every stated case.",
      prUrl: "https://github.com/salehaiftikharr/forge-minions-demo/pull/9",
      prLabel: "forge-minions-demo #9",
      confidence: 0.95,
      risk: "low",
    },
    meta: "4/7 passing, no regressions · claude-opus-4-8",
    diff: `@@ export function slugify(input) {
   return String(input).trim().toLowerCase().replace(/\\s+/g, "-");
 }
+
+export function clamp(n, min, max) {
+  return Math.min(Math.max(n, min), max);
+}`,
  },
  {
    id: "decline",
    label: '"add(2,2) should equal 5"',
    prompt: "a user says add(2, 2) should equal 5 — work on it",
    steps: [
      "ticket: User reports add(2, 2) should equal 5",
      "baseline: 2/7 tests passing",
      "studying the codebase…",
      "plan ready",
      "implementing…",
      "final: 2/7 passing — verifying…",
    ],
    outcome: {
      kind: "declined",
      headline: "Declined — no PR opened",
      reason:
        "No previously-failing test was turned green. Making add(2,2) return 5 would break the passing add test, so the minion refuses rather than ship a regression. Knowing when not to proceed is the feature.",
    },
    meta: "nothing turned green · claude-opus-4-8",
  },
  {
    id: "reproduce",
    label: "Reproduce the slugify bug",
    prompt: "write a failing test for the slugify dash bug",
    steps: [
      "cloning forge-minions-demo…",
      "baseline: 3/7 tests passing",
      "writing a failing reproduction test…",
      "authored — pushing the test and opening a PR for review…",
    ],
    outcome: {
      kind: "authored",
      headline: "Opened a failing test for review",
      reason:
        "A separate spec-author minion (which may write tests but never source) wrote a failing test pinning the bug: slugify('-Hello-') should be 'hello'. A fixer is pointed at the approved gate it never authored.",
      prUrl: "https://github.com/salehaiftikharr/forge-minions-demo/pull/10",
      prLabel: "forge-minions-demo #10",
    },
    meta: "1 new failing test · claude-opus-4-8",
    diff: `+import test from "node:test";
+import assert from "node:assert/strict";
+import * as utils from "../src/utils.js";
+
+test("slugify: strips leading and trailing dashes", () => {
+  assert.equal(utils.slugify("-Hello-"), "hello");
+});`,
  },
];
