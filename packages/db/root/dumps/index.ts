export const SalaryPeriudDbSqlDump = `
CREATE TABLE IF NOT EXISTS salary_period (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME
);`;

export const IncomeDbSqlDump = `
CREATE TABLE IF NOT EXISTS income (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_id INTEGER NOT NULL,
  value REAL NOT NULL,
  FOREIGN KEY(period_id) REFERENCES salary_period(id)
);`;

export const ExpenseDbSqlDump = `
CREATE TABLE IF NOT EXISTS expense (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_id INTEGER NOT NULL,
  value REAL NOT NULL,
  FOREIGN KEY(period_id) REFERENCES salary_period(id)
);`;
