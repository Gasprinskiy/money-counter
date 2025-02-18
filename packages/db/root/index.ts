import { getDatabase } from './connection';
import { ExpenseDbSqlDump, IncomeDbSqlDump, SalaryPeriudDbSqlDump } from './dumps';

export async function initDatabase(): Promise<void> {
  try {
    const db = await getDatabase();

    await db.runAsync(SalaryPeriudDbSqlDump);
    await db.runAsync(IncomeDbSqlDump);
    await db.runAsync(ExpenseDbSqlDump);
  } catch (e) {
    console.error('Error on database init: ', e);
  }
}
