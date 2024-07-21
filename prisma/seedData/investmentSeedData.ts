import { TInvestment } from '../../src/types/TInvestment';

// Funzione per parsare le date nel formato richiesto
const parseInvestmentDate = (dateString: string): Date => new Date(dateString);

const investments: TInvestment[] = [
  {
    value: 600000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2018-01-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2018-01-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2018-01-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2018-02-15T00:00:00Z'),
  },
  {
    value: 950000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2018-02-20T00:00:00Z'),
  },
  {
    value: 1000000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2018-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2018-03-15T00:00:00Z'),
  },
  {
    value: 780000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2018-03-20T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2018-03-25T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2018-04-15T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2018-04-20T00:00:00Z'),
  },
  {
    value: 1020000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2018-04-25T00:00:00Z'),
  },
  {
    value: 660000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2018-05-15T00:00:00Z'),
  },
  {
    value: 780000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2018-05-20T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2018-05-25T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2018-06-15T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2018-06-20T00:00:00Z'),
  },
  {
    value: 1040000,
    annualInterestRate: 10.4,
    createdAt: parseInvestmentDate('2018-06-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2018-07-15T00:00:00Z'),
  },
  {
    value: 760000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2018-07-20T00:00:00Z'),
  },
  {
    value: 840000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2018-07-25T00:00:00Z'),
  },
  {
    value: 890000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2018-08-15T00:00:00Z'),
  },
  {
    value: 940000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2018-08-20T00:00:00Z'),
  },
  {
    value: 990000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2018-08-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2018-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2018-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2018-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2018-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2018-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2018-10-25T00:00:00Z'),
  },
  {
    value: 590000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2018-11-15T00:00:00Z'),
  },
  {
    value: 720000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2018-11-20T00:00:00Z'),
  },
  {
    value: 800000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2018-11-25T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2018-12-15T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2018-12-20T00:00:00Z'),
  },
  {
    value: 950000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2018-12-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2019-01-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2019-01-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2019-01-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2019-02-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2019-02-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2019-02-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2019-03-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2019-03-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2019-03-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2019-04-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2019-04-20T00:00:00Z'),
  },
  {
    value: 1020000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2019-04-25T00:00:00Z'),
  },
  {
    value: 650000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2019-05-15T00:00:00Z'),
  },
  {
    value: 780000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2019-05-20T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2019-05-25T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2019-06-15T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2019-06-20T00:00:00Z'),
  },
  {
    value: 1040000,
    annualInterestRate: 10.4,
    createdAt: parseInvestmentDate('2019-06-25T00:00:00Z'),
  },
  {
    value: 630000,
    annualInterestRate: 5.9,
    createdAt: parseInvestmentDate('2019-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2019-07-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2019-07-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2019-08-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2019-08-20T00:00:00Z'),
  },
  {
    value: 1010000,
    annualInterestRate: 10.5,
    createdAt: parseInvestmentDate('2019-08-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2019-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2019-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2019-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2019-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2019-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2019-10-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2019-11-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2019-11-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2019-11-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2019-12-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2019-12-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2019-12-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2020-01-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2020-01-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2020-01-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2020-02-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2020-02-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2020-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2020-03-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2020-03-20T00:00:00Z'),
  },
  {
    value: 830000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2020-03-25T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2020-04-15T00:00:00Z'),
  },
  {
    value: 930000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2020-04-20T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2020-04-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2020-05-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2020-05-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2020-05-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2020-06-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2020-06-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2020-06-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2020-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2020-07-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2020-07-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2020-08-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2020-08-20T00:00:00Z'),
  },
  {
    value: 1010000,
    annualInterestRate: 10.5,
    createdAt: parseInvestmentDate('2020-08-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2020-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2020-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2020-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2020-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2020-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2020-10-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2020-11-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2020-11-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2020-11-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2020-12-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2020-12-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2020-12-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2021-01-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2021-01-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2021-01-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2021-02-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2021-02-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2021-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2021-03-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2021-03-20T00:00:00Z'),
  },
  {
    value: 830000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2021-03-25T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2021-04-15T00:00:00Z'),
  },
  {
    value: 930000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2021-04-20T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2021-04-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2021-05-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2021-05-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2021-05-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2021-06-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2021-06-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2021-06-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 5.9,
    createdAt: parseInvestmentDate('2021-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2021-07-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2021-07-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2021-08-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2021-08-20T00:00:00Z'),
  },
  {
    value: 1010000,
    annualInterestRate: 10.5,
    createdAt: parseInvestmentDate('2021-08-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2021-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2021-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2021-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2021-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2021-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2021-10-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2021-11-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2021-11-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2021-11-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2021-12-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2021-12-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2021-12-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2022-01-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2022-01-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2022-01-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2022-02-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2022-02-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2022-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2022-03-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2022-03-20T00:00:00Z'),
  },
  {
    value: 830000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2022-03-25T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2022-04-15T00:00:00Z'),
  },
  {
    value: 930000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2022-04-20T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2022-04-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2022-05-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2022-05-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2022-05-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2022-06-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2022-06-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2022-06-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 5.9,
    createdAt: parseInvestmentDate('2022-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2022-07-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2022-07-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2022-08-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2022-08-20T00:00:00Z'),
  },
  {
    value: 1010000,
    annualInterestRate: 10.5,
    createdAt: parseInvestmentDate('2022-08-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2022-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2022-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2022-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2022-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2022-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2022-10-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2022-11-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2022-11-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2022-11-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2022-12-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2022-12-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2022-12-25T00:00:00Z'),
  },
  {
    value: 610000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2023-01-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.2,
    createdAt: parseInvestmentDate('2023-01-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.2,
    createdAt: parseInvestmentDate('2023-01-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.2,
    createdAt: parseInvestmentDate('2023-02-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.7,
    createdAt: parseInvestmentDate('2023-02-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.2,
    createdAt: parseInvestmentDate('2023-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2023-03-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2023-03-20T00:00:00Z'),
  },
  {
    value: 830000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2023-03-25T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2023-04-15T00:00:00Z'),
  },
  {
    value: 930000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2023-04-20T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2023-04-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2023-05-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2023-05-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2023-05-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2023-06-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2023-06-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2023-06-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 5.9,
    createdAt: parseInvestmentDate('2023-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2023-07-20T00:00:00Z'),
  },
  {
    value: 850000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2023-07-25T00:00:00Z'),
  },
  {
    value: 900000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2023-08-15T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2023-08-20T00:00:00Z'),
  },
  {
    value: 1010000,
    annualInterestRate: 10.5,
    createdAt: parseInvestmentDate('2023-08-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.5,
    createdAt: parseInvestmentDate('2023-09-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2023-09-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.0,
    createdAt: parseInvestmentDate('2023-09-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.0,
    createdAt: parseInvestmentDate('2023-10-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.5,
    createdAt: parseInvestmentDate('2023-10-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.0,
    createdAt: parseInvestmentDate('2023-10-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.6,
    createdAt: parseInvestmentDate('2023-11-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.1,
    createdAt: parseInvestmentDate('2023-11-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.1,
    createdAt: parseInvestmentDate('2023-11-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.1,
    createdAt: parseInvestmentDate('2023-12-15T00:00:00Z'),
  },
  {
    value: 910000,
    annualInterestRate: 9.6,
    createdAt: parseInvestmentDate('2023-12-20T00:00:00Z'),
  },
  {
    value: 960000,
    annualInterestRate: 10.1,
    createdAt: parseInvestmentDate('2023-12-25T00:00:00Z'),
  },

  {
    value: 610000,
    annualInterestRate: 5.8,
    createdAt: parseInvestmentDate('2024-01-15T00:00:00Z'),
  },
  {
    value: 740000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2024-01-20T00:00:00Z'),
  },
  {
    value: 820000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2024-01-25T00:00:00Z'),
  },
  {
    value: 870000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2024-02-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2024-02-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2024-02-25T00:00:00Z'),
  },
  {
    value: 620000,
    annualInterestRate: 5.9,
    createdAt: parseInvestmentDate('2024-03-15T00:00:00Z'),
  },
  {
    value: 750000,
    annualInterestRate: 6.4,
    createdAt: parseInvestmentDate('2024-03-20T00:00:00Z'),
  },
  {
    value: 830000,
    annualInterestRate: 7.4,
    createdAt: parseInvestmentDate('2024-03-25T00:00:00Z'),
  },
  {
    value: 880000,
    annualInterestRate: 8.4,
    createdAt: parseInvestmentDate('2024-04-15T00:00:00Z'),
  },
  {
    value: 930000,
    annualInterestRate: 9.9,
    createdAt: parseInvestmentDate('2024-04-20T00:00:00Z'),
  },
  {
    value: 980000,
    annualInterestRate: 10.4,
    createdAt: parseInvestmentDate('2024-04-25T00:00:00Z'),
  },
  {
    value: 600000,
    annualInterestRate: 5.7,
    createdAt: parseInvestmentDate('2024-05-15T00:00:00Z'),
  },
  {
    value: 730000,
    annualInterestRate: 6.3,
    createdAt: parseInvestmentDate('2024-05-20T00:00:00Z'),
  },
  {
    value: 810000,
    annualInterestRate: 7.3,
    createdAt: parseInvestmentDate('2024-05-25T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2024-06-03T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2024-06-08T00:00:00Z'),
  },
  {
    value: 860000,
    annualInterestRate: 8.3,
    createdAt: parseInvestmentDate('2024-06-15T00:00:00Z'),
  },
  {
    value: 920000,
    annualInterestRate: 9.8,
    createdAt: parseInvestmentDate('2024-06-20T00:00:00Z'),
  },
  {
    value: 970000,
    annualInterestRate: 10.3,
    createdAt: parseInvestmentDate('2024-06-25T00:00:00Z'),
  },
  {
    value: 640000,
    annualInterestRate: 6.0,
    createdAt: parseInvestmentDate('2024-07-15T00:00:00Z'),
  },
  {
    value: 770000,
    annualInterestRate: 6.5,
    createdAt: parseInvestmentDate('2024-07-20T00:00:00Z'),
  },
];

export default investments;
