// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

const people1 = [
    {
      name: 'Alex',
      know: ['Eva', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Alex'],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: ['Alex'],
    },
  ]; //Not found
  
  const people2 = [
    {
      name: 'Alex',
      know: ['Eva', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: [],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Alex'],
    },
  ]; // Not found