// Finding age

var UserDob = prompt("Enter Your Date Of Bith");
var ApnaDob = moment(UserDob,'DD/MM/YYYY');

var b = moment();
var age = b.diff(ApnaDob, 'years');
console.log("Tumhari age hai:",age);


