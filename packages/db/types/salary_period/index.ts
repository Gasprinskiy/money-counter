export interface SalaryPeriod {
  id: number;
  name: string;
  start_date: Date;
  end_date: Date | null;
}

export type StartSalaryPeriodParam = Omit<SalaryPeriod, 'id' | 'end_date'>;
