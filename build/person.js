"use strict";
var Person = /** @class */ (function () {
    function Person(lastname, firstname, age, adresse) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        this.adresse = adresse;
    }
    Person.prototype.getLastname = function () {
        return this.lastname;
    };
    Person.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    Person.prototype.getFirstname = function () {
        return this.firstname;
    };
    Person.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAdresse = function () {
        return this.adresse;
    };
    Person.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Person.prototype.toString = function () {
        return 'my name is ' + this.firstname + ' ' + this.lastname + ' I am ' + this.age + ' years and I live at ' + this.adresse;
    };
    return Person;
}());
var titi = new Person('timothé', 'laude', 22, '1 bis avenue escalade');
var thierry = new Person('thierry', 'laude', 50, "25 boulevard d'arcole");
console.log(titi + " " + thierry);
