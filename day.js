// Finding Day of Birthday

var Puchega = prompt("Enter your Date Of Birthday");
var ProcessKrega = moment(Puchega, "DD/MM/YYYY");

console.log("Tumhare birthdate ka day hai:", ProcessKrega.format("dddd"));