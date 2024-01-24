"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
signUpUser("shreekar", "shreekar@mail.com", true);
var myValue = addTwo(5);
getUpper("typescript");
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("s", "s@s.com", true);
// function getValue(myVal:number):boolean{
//   if(myVal>5){
//     return true
//   }
//   return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["iron man", "captain america", "thor odison"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errormsg) {
    console.log(errormsg);
}
function handleError(errormsg) {
    throw new Error(errormsg);
}
