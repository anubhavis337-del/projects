function ATM(bal, amount) {
  let withdraw = 0;
  if (bal >= 500) {
    if (amount % 100 === 0) {
      withdraw = bal - amount;
      return `Your updated balance is ${withdraw}`;
    }
    return "Enter valid amount like........100,200....";
  }
  return "Make sure u have sufficient balance";
}
console.log(ATM(400, 200));

//1=================================
let bal=600;
let amount=300;
let withdraw = 0;
if (bal >= 500) {
    if (amount % 100 === 0) {
     withdraw = bal - amount;
      console.log(`Your updated balance is ${withdraw}`);
    }else{
    console.log("Enter valid amount like........100,200....");
  }
}else{
    console.log("Make sure u have sufficient balance");

}
//question 2================================
let str="I Love to cod   e with music"
let sent=str.toLowerCase();
let words=sent.split(" ")
let longest=""
console.log(`Number of words:`,words.length)
for(let word of words){
   if(word.length>longest.length){
       longest=word
}
}console.log(`Longest word is:`,longest)

let count=0
for(let i=0;i<=sent.length;i++){
  if(sent[i]==="a" ||sent[i]==="e"||sent[i]==="i"||sent[i]==="o"||sent[i]==="u"){
    count++
  }
}console.log(`Number of vowel in sentence:`,count)

//3===============================
// let num = [12, 5, 18, 7, 25, 10, 30, 3];
// let sum = 0;
// let count = 0;
// let even = 0;
// let odd = 0;
// let largest = 0;
// let largest2 = 0;

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > largest) largest = num[i];
//   count++;
//   sum = sum + num[i];

//   if (num[i] % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// for (let i = 0; i < num.length; i++) {
//   if (num[i] < largest && num[i] > largest2) {
//     largest2 = num[i];
//   }
// }

// console.log(`Sum of all numbers is:`,sum);

// let average = sum / count;
// console.log(`Average is:`,average);

// console.log(`Number of even numbers:`,even);
// console.log(`Number of odd numbers:`,odd);
// console.log(`Second largest number is:`,largest2);
