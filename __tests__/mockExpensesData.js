import { faker } from '@faker-js/faker';

// generates 10 expenses with random data and put them in an array called expenses
const expenses = [];
for (let i = 0; i < 10; i++) {
  expenses.push({
    id: i + 1,
    description: faker.commerce.productName(),
    date: faker.date.past(),
    amount: faker.commerce.price(),
    convertedAmount: faker.commerce.price(),
    currency: faker.finance.currencyCode(),
    category: faker.commerce.productAdjective(),
    notes: faker.lorem.sentence(),
    createdAt: faker.date.past(),
  });
}

export default expenses;
