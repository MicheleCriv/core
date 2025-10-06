#!/usr/bin/env node
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const rulesDir = path.resolve("./");
const specPath = process.argv[2];

if (!specPath) {
  console.error("Usage: cvs-check <path-to-spec.yaml>");
  process.exit(1);
}

const loadYAML = (p) => yaml.load(fs.readFileSync(p, "utf8"));

const rulesets = ["security.yaml", "privacy.yaml", "ai-ethics.yaml", "observability.yaml"]
  .map((f) => loadYAML(path.join(rulesDir, f)));

const projectSpec = loadYAML(specPath);

console.log("🔍 Checking compliance for:", projectSpec.name);
let passed = 0, failed = 0;

rulesets.forEach((set) => {
  set.rules.forEach((r) => {
    const ok = projectSpec?.implemented?.includes(r.id);
    if (ok) passed++;
    else {
      failed++;
      console.log(`❌ Missing rule: ${r.id} — ${r.title}`);
    }
  });
});

console.log(`\n✅ Passed: ${passed}  ❌ Failed: ${failed}`);
if (failed > 0) process.exit(1);
else console.log("🎉 CVS compliance check passed!");
