import type { SQLiteBindValue } from 'expo-sqlite';
import { getDatabase } from '../../root/connection';

export async function instertAndGetLastRowId(
  query: string,
  params: SQLiteBindValue[],
): Promise<number> {
  const db = await getDatabase();

  const result = await db.runAsync(query, [...params]);

  return result.lastInsertRowId;
}
