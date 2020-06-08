"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log("Given string: " + word);
        console.log("Given String in lowerCase: " + word.toLowerCase);
        console.log("Given String in UpperCase: " + word.toUpperCase);
        for (var i = 0; i < word.length; i++) {
            console.log(word.charAt(i) + " is at this index:" + i);
        }
        console.log("The length of the given String :" + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var n = "";
        for (var i = 0; i < sentence.length; i++) {
            n += sentence.charAt(i) + " ";
        }
        console.log("Adding Spaces:" + n);
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str.charAt(i)) != -1)
                count++;
        }
        console.log("No of vowels in " + str + " " + count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = 0;
        for (var i = 2; i < num / 2; i++) {
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            console.log(num + " is not a prime number");
        else
            console.log(num + " is  a prime number");
    };
    NumbersManipulations.prototype.findSum = function (n) {
        var sum = 0;
        while (n != 0) {
            sum = sum + Math.floor(n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        sum = this.findSum(num);
        //console.log("sum ac" + sum);
        while (true) {
            if (sum > 9) {
                sum = this.findSum(sum);
            }
            else
                break;
        }
        if (sum == 1)
            console.log('magin no');
        else
            console.log('not a magic no');
    };
    return NumbersManipulations;
}());
var stringOperations = new StringManipulations();
console.log("---String Operations!--------");
stringOperations.findVowel('prograd');
stringOperations.print('prograd');
stringOperations.printWithSpace('prograd');
var numberOperations = new NumbersManipulations();
console.log("------Number Opertaions!--------");
numberOperations.findMagic(199);
numberOperations.findPrime(3);
