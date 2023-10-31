// ● მოახდინე პროექტის ინიციალიზაცია
// ● დააინსტალირე პაკეტი validator
// ● მოიძიე validator-ის დოკუმენტაცია
// npmjs.com - ზე
// ● დოკუმენტაციის მიხედვით გამოიყენე
// ბრძანება isEmail და დაბეჭდე არის თუ არა
// შემდეგი სიტყვები მეილი:
// ● test@test.com, abcDE123


var validator = require('validator');

console.log(validator.isEmail('test@test.com')); // true
console.log(validator.isEmail('abcDE123')); // false

