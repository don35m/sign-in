signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.students = [
    { name: "Don Schemmel", signedIn: false },
    { name: "Mike Scott", signedIn: false },
    { name: "Ann Johnson", signedIn: false },
    { name: "Paul Jones", signedIn: false },
  ];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, signedIn: false });
    factory.studentName = null;
  };

  return factory;
});
