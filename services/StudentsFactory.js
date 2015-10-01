signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.students = [
    { name: "Don Schemmel", signedIn: true },
    { name: "Mike Scott", signedIn: false },
    { name: "Ann Johnson", signedIn: false },
    { name: "Paul Jones", signedIn: false },
    { name: "Ozzy Osbourne", signedIn: true },
    { name: "James Hetfield", signedIn: false },
    { name: "Dimebag Darrell", signedIn: false },
    { name: "Phil Anselmo", signedIn: false },
  ];

  return factory;
});
