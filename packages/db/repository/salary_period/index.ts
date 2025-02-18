import type { SalaryPeriod, StartSalaryPeriodParam } from '../../types/salary_period';
import { getDatabase } from '../../root/connection';

export class SalaryPeriodRepository {
  async startSalaryPeriod(params: StartSalaryPeriodParam): Promise<number> {
    const db = await getDatabase();

    const query = `
    INSERT INTO salary_period (name, start_date)
    VALUES (?, ?)`;

    const { name, start_date } = params;
    const result = await db.runAsync(query, [name, start_date.toISOString()]);

    return result.lastInsertRowId;
  }

  async getPeriodList_TEST(): Promise<void> {
    const db = await getDatabase();

    const result = await db.getAllAsync('SELECT * FROM salary_period')
    console.log('result: ', result)
  }
}
