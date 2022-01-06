import { existsSync, readFileSync, writeFileSync } from "fs";

export class Storage {
  storagePath: string;

  constructor() {
    this.storagePath = "storage/db.json";
  }

  saveHistory(history: string[]) {
    writeFileSync(this.storagePath, JSON.stringify({ history }));
  }

  loadHistory() {
    if (existsSync(this.storagePath)) {
      const data: { history: string[] } = JSON.parse(
        readFileSync(this.storagePath, { encoding: "utf-8" })
      );
      return data.history;
    } else {
      return null;
    }
  }
}
