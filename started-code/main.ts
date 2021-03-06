import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service"

class StringManipulations implements StringManipulationService {

    print(word: string): void {
        console.log("Given string: " + word);
        console.log("Given String in lowerCase: " + word.toLowerCase);
        console.log("Given String in UpperCase: " + word.toUpperCase);
        for (let i = 0; i < word.length; i++) {
            console.log(word.charAt(i) + " is at this index:" + i);
        }
        console.log("The length of the given String :" + word.length);
    }

    printWithSpace(sentence: string): void {
        let n = "";
        for (let i = 0; i < sentence.length; i++) {
            n += sentence.charAt(i) + " ";
        }
        console.log("Adding Spaces:" + n);
    }

    findVowel(str: string): void {
        let count: number = 0;
        let vowels: Array<string> = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for (let i = 0; i < str.length; i++) {
            if (vowels.indexOf(str.charAt(i)) != -1)
                count++;
        }
        console.log("No of vowels in " + str + " " + count);
    }

}


class NumbersManipulations implements NumberManipulationService {


    findPrime(num: number): void {
        let flag: number = 0;
        for (let i = 2; i < num / 2; i++) {
            if (num % i == 0) { flag = 1; break; }
        }
        if (flag == 1)
            console.log(num + " is not a prime number");
        else
            console.log(num + " is  a prime number");
    }


    findSum(n: number): number {
        let sum: number = 0;
        while (n != 0) {
            sum = sum + Math.floor(n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    }



    findMagic(num: number): void {
        let sum: number = 0;
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


    }



}

let stringOperations = new StringManipulations();
console.log("---String Operations!--------");
stringOperations.findVowel('prograd');
stringOperations.print('prograd');
stringOperations.printWithSpace('prograd');

let numberOperations = new NumbersManipulations();
console.log("------Number Opertaions!--------")
numberOperations.findMagic(199);
numberOperations.findPrime(3);
