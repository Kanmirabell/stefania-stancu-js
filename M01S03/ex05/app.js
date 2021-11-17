var person = {
  name: 'Stef',
  surname: 'Stancu',
  age: 23,
  petOwner: true,
  skills: ['html', 'javaScript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 29,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.log(
  `Ma numesc ${person.name} ${person.surname} si stiu ${person.skills[0]} si ${person.skills[2]}.`,
);

console.log(`Sunt ${person.name} si acum invat JavaScript.`);

console.log(
  `Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}.`,
);
