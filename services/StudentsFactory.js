signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.students = [
    { name: "Don Schemmel", signedIn: true },
    { name: "Mike Scott", signedIn: false },
    { name: "Ann Johnson", signedIn: false },
    { name: "Paul Jones", signedIn: false },
  ];

  factory.signInOut = function(student, value) {
    console.log(student);
    student.signedIn = value;
  };

  return factory;
});
