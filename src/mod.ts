import { walkSync, WalkEntry } from '../deps.ts';

function ls(dir: string) {
  const items: Array<WalkEntry> = new Array<WalkEntry>();

  for (const entry of walkSync(dir)) {
    items.push(entry);
  }

  return items;
}

function readConfig() {
  const pwd = Deno.cwd();

  
}

function main() {
  const entries = ls('.').filter(
    (we: WalkEntry) => we.name !== '.' && we.name == '.git'
  );

  console.log(entries);
}

main();
