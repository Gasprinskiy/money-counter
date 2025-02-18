import type { SQLiteDatabase } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';

let db: SQLiteDatabase | null = null;

export async function getDatabase(): Promise<SQLiteDatabase> {
  if (db === null) {
    db = await SQLite.openDatabaseAsync('appDb');
  }

  return db;
}
