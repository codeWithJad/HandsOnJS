const firstNames = [
  'John',
  'James',
  'Sarah',
  'Jessica',
  'Mohamed',
  'Emily',
  'Jacob',
  'Emma',
  'Michael',
  'Olivia',
];

const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Miller',
  'Davis',
  'Garcia',
  'Rodriguez',
  'Martinez',
];

const roles = [
  'Frontend Developer',
  'JS Expert',
  'PHP Expert',
  'Backend Developer',
  'React Developer',
  'UI-UX Designer',
  'Tech Lead',
  'Dev Ops',
];

const companies = [
  'Apple Inc.',
  'Saudi Arabian Oil Company',
  'Microsoft Corporation',
  'Alphabet Inc.',
  'Amazon.com, Inc.',
  'Berkshire Hathaway Inc.',
  'UnitedHealth Group Incorporated',
  'Johnson & Johnson',
  'Exxon Mobil Corporation',
  'Visa Inc.',
  'Tencent Holdings Ltd',
  'Taiwan Semiconductor Manufacturing Company Limited',
  'JPMorgan Chase & Co.',
  'Tesla, Inc.',
  'Walmart Inc.',
  'LVMH Moët Hennessy - Louis Vuitton, SE',
  'Nvidia Corporation',
  'The Procter & Gamble Company',
  'Eli Lilly and Company',
  'Chevron Corporation',
  'Mastercard Incorporated',
  'The Home Depot, Inc.',
  'Meta Platforms, Inc.',
  'Kweichow Moutai Co. Ltd',
  'Novo Nordisk A/S',
  'Samsung Electronics Co., Ltd.',
  'Pfizer Inc.',
  'AbbVie Inc.',
  'Merck & Co., Inc.',
  'The Coca-Cola Company',
  'Bank of America Corporation',
  'Roche Holding AG',
  'Alibaba Group Holding Limited',
  'PepsiCo, Inc.',
  'Broadcom Inc.',
  'ASML Holding N.V.',
  'BHP Group',
  'Prosus N.V.',
  'Oracle Corporation',
  'AstraZeneca plc',
  'Thermo Fisher Scientific Inc.',
  'Industrial & Commercial Bank of China Ltd',
  'Costco Wholesale Corporation',
  'Cisco Systems, Inc.',
  'Shell plc',
  "L'Oréal SA",
  'Novartis AG',
  "McDonald's Corporation",
  'Abbott Laboratories',
  'Danaher Corporation',
];

const domain = 'gmail.com';

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

console.log(generateRandomNumber(1000000));

const generateUser = () => {
  const userId = generateRandomNumber(1000000);
  const firstName = firstNames[generateRandomNumber(firstNames.length)];
  const lastName = lastNames[generateRandomNumber(lastNames.length)];
  const userName = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`; // Jad Taha -> jad.taha
  const email = `${userName}@${domain}`; //  jad.taha@gmail.com
  const company = companies[generateRandomNumber(companies.length)];
  const expertiese = roles[generateRandomNumber(roles.length)];

  return {
    userId,
    firstName,
    lastName,
    userName,
    email,
    company,
    expertiese,
  };
};

const users = Array.from({ length: 100 }, generateUser);

console.log(JSON.stringify(users, null, 2));
