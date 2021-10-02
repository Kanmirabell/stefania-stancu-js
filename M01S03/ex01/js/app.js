console.log(person.name);
console.log(person.age.toString());

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' ' +
    'si am ' +
    person.age +
    ' ani.',
);

console.log((2021 - person.age).toString());

console.log(
  person.name + ' ' + person.surname + ' are ' + person.age + ' ani.',
);

console.log(
  person.name + ' ' + 's-a nascut in ' + (2021 - person.age).toString() + '.',
);
