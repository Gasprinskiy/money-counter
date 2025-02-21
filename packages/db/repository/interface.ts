import type { StartSalaryPeriodParam } from '../types/salary_period';

export interface SalaryPeriodRepoInterface {
  startSalaryPeriod: (params: StartSalaryPeriodParam) => Promise<number>;
}
