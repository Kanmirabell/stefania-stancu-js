var friends = [
  {
    name: 'Stef',
    surname: 'Stancu',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn(`
  Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.
`);
var i = 0;
var friendsLength = friends.length;

for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];

  console.log(friend.surname);
}

console.warn(`
  Afiseaza numele complet inversat al tuturor prietenilor,
  insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul
  keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
`);
for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];
  var friendFullReversedName = `${friend.surname} ${friend.name}`;

  if (friend.name === 'Steven') {
    console.log(`M-am oprit la ${friendFullReversedName}.`);

    break;
  }

  console.log(friendFullReversedName);
}

console.warn(`
  Folosind keywordul continue, afiseaza numele complet inversat al
  prietenilor, doar daca numarul de caractere total al
  numelor lor este mai mare de 13 sub forma de propozitii
  “Prenume Nume are mai mult de 13 caractere.”.
`);
var charCount = 13;

for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];
  var fullNameLength = `${friend.name}${friend.surname}`.length;

  if (fullNameLength <= charCount) {
    continue;
  }

  console.log(
    `${friend.surname} ${friend.name} are mai mult de ${charCount} caractere.`,
  );
}
