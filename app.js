const customers = ['Max', 'Jon', 'Billy'];

const activeCustomers = ['Max', 'Jon'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);