
// // for(i = 2; i <= 20; i = i+2) {
// //     console.log(i);

// function PrintPoem(){
//     console.log("twinkle twinkle litte star how i wonder what you are ?")
// }

// // PrintPoem();

// function RollaDice(){
//     let rand = Math.floor(Math.random() * 6)+ 1;
//     console.log(rand);
// }

// // RollaDice();

// function average(a,b,c){
//     average= (a + b + c) / 3 ;
//     console.log(average);
// }

// // average(10,20,30);

// function table(n){
//     for (let i=n; i<= n*10; i = i + n){
//         console.log(i);
//     }    
// }

// // table(5);

// function sum1ton(n){
//     let sum = 0;
//     for(i=1; i<=n; i++){
//         sum = sum + i;        
//     }
//     return sum;
// }

// // console.log(sum1ton(20));

// Practice Question
// let a = [1,2,3,4,5,6,7,8,9];


// function largeNo(a,num){
//     for(i=1; i < a.length; i++){
//         if(a[i]>num){
//             console.log(a[i]);
//         }
//     }
// }

// largeNo(a,5);

// str = "abcdabcdefgggh";
// let ans = '';

// function uniquechar(str){
//     for(i=1; i<str.length; i++){
//         let currchar = str[i];
//         if(ans.indexOf(currchar) == -1){
//             ans += currchar;
//         }
//     return ans;
//     }

// }

// uniquechar(str);

// let country = ["Austrailia", "Germany", "United States of America"];

// function longname(country){
//     if(country[0].length > country[1].length && country[0].length > country[2].length){
//         console.log(country[0]);
//     }
//     else if(country[1].length > country[0].length && country[1].length > country[2].length){
//         console.log(country[1]);
//     }
//     else if(country[2].length > country[1].length && country[2].length> country[0].length){
//         console.log(country[2]);
//     }
// }

// longname(country);

// above can be done using for loop

// str = "aayush";

// function vowelcount(str){
//     let count = 0;
//     for(i = 1; i < str.length; i++){
//         if(
//             str.charAt(i) == 'a' ||
//             str.charAt(i) == 'e' ||
//             str.charAt(i) == 'i' ||
//             str.charAt(i) == 'o' ||
//             str.charAt(i) == 'u'
//         ){
//             count++;
//         }                    
//     }
    
//     return count; 
// }

// vowelcount(str);

// console.log("hi there");

//  setTimeout(() => {
//     console.log("Apna college")}
//     ,4000);

// console.log("welcome to");

// const sqr = (n) => n*n;
// console.log(sqr(5));

// id = setInterval(() => {
//     console.log("Hell0 World");
// },2000);

// setTimeout( () => {
//     clearInterval(id)
// },10000 );//

// arr = [1,2,3,4,5,6,7,8,9]
// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total/arr.length;
// }

// console.log(arrayAverage(arr));



let post = {
    username : "aayuuushh",
    content : "Good",
    like : 1999,
    repost : 33,
    tags : 334
};

console.log(post);