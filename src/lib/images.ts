import 'server-only';
import { existsSync } from 'node:fs';
import path from 'node:path';

/** Vrátí skutečnou fotku, pokud je v /public, jinak náhradní obrázek. Vyhodnocuje se při buildu. */
export function pickImage(photo: string, fallback: string) {
  return existsSync(path.join(process.cwd(), 'public', photo)) ? photo : fallback;
}
