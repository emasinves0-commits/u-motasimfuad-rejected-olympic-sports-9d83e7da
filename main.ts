import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Rejected Olympic Sport: live pigeon shooting (an actual 1900 Olympic
// event) formally withdrawn — not because of the shooting, but because the
// pigeons unionised and buried the ceremony in paperwork. 179 UTF-8
// characters, inside the 1-200 gate.
const ENTRY =
  "Ladies and gentlemen, the live pigeon shooting event is formally withdrawn after the pigeons' union required the winner to file a 47-page grievance form before the medal ceremony.";
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function writeEntry(text: string): string {
  validateEntry(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  // Read back and confirm the written bytes are exactly the entry.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== text) {
    throw new Error("entry.txt read-back mismatch");
  }
  return written;
}

function main(): void {
  writeEntry(ENTRY);
}

main();
