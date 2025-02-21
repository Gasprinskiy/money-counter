import type { SalaryPeriod, StartSalaryPeriodParam } from '../../types/salary_period';
import type { SalaryPeriodRepoInterface } from '../interface';
import { getDatabase } from '../../root/connection';
import { instertAndGetLastRowId } from '../../tools/repo-generic';

export class SalaryPeriodRepository implements SalaryPeriodRepoInterface {
  async startSalaryPeriod(params: StartSalaryPeriodParam): Promise<number> {
    const query = `
    INSERT INTO salary_period (name, start_date)
    VALUES (?, ?)`;

    const { name, start_date } = params;

    return instertAndGetLastRowId(query, [name, start_date.toISOString()]);
  }

  //   async getPeriodList_TEST(): Promise<void> {
  //     const db = await getDatabase();

  //     const result = await db.getAllAsync('SELECT * FROM salary_period');
  //     console.log('result: ', result);
  //   }
}
