"use strict";
var Town = /** @class */ (function () {
    function Town(city, country, nbInhabitants) {
        console.log(Town.instanceCount++);
        this.city = city;
        this.country = country;
        this.nbInhabitants = nbInhabitants;
    }
    Town.prototype.getCity = function () {
        return this.city;
    };
    Town.prototype.setCity = function (city) {
        this.city = city;
    };
    Town.prototype.getCountry = function () {
        return this.country;
    };
    Town.prototype.setCountry = function (country) {
        this.country = country;
    };
    Town.prototype.setNbHabitants = function (nbHabitants) {
        if (nbHabitants < 0) {
            console.log("don't number negatif");
        }
        else {
            this.nbInhabitants = nbHabitants;
        }
    };
    Town.prototype.getNbHabitants = function () {
        return this.nbInhabitants;
    };
    Town.prototype.toString = function () {
        return 'city of ' + this.city + ' in ' + this.country + ' with ' + this.nbInhabitants + ' habitants';
    };
    Town.instanceCount = 1;
    return Town;
}());
var toulouse = new Town('toulouse', 'france', 4000);
var paris = new Town('paris', 'france', 300);
paris.setNbHabitants(23);
console.log(toulouse.toString(), " ", paris.toString());
