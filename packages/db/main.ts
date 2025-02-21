import type { SalaryPeriodRepoInterface } from './repository/interface';
import type { StartSalaryPeriodParam } from './types/salary_period';
import { SalaryPeriodRepository } from './repository/salary_period';

class SomeShit {
  r: SalaryPeriodRepoInterface;

  constructor(repo: SalaryPeriodRepoInterface) {
    this.r = repo;
  };
}

class Mock implements SalaryPeriodRepoInterface {
  async startSalaryPeriod(params: StartSalaryPeriodParam): Promise<number> {
    return 0;
  };
}

const repoSal = new SalaryPeriodRepository();
const mock = new Mock();
const someShit = new SomeShit(mock);
