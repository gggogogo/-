// var readline = require('readline');

// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputArr = [];
// rl.on('line', function (line) {
//     inputArr = line.trim().split(' ');
//     console.log(test(inputArr));

// });
// rl.on('close',function(){
//     process.exit(0);
// })

// // function test(inputArr){
// //     inputArr.shift();
// //     var i = 0;
// //     while(inputArr.length){
// //         var perLength = inputArr[i].length;
// //         let str = '';
// //         if(perLength < 9){
// //             for(let j = 0;j<8-perLength;j++){
// //                 str += '0';
// //             }
// //             inputArr[i] += str;
// //         }
// //         else{
// //             var temp = inputArr[i].slice(0,8);
// //             inputArr.push(inputArr[i].substr(8,inputArr[i].length - 8));
// //             inputArr[i] = temp;
// //         }
// //         i++;
// //         if(i=== inputArr.length){break;}
// //     }
// //     return inputArr.sort().join(' ');
// // }
// var readline = require('readline');
// const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
// });
// rl.on('line', function(line){
//     console.log(f2(line));
// });
// function f2(str) {
//     var ary = str.match(/[0-9]\([a-zA-Z]+\)/g);
//     for (var i = 0; i < ary.length; i++) {
//         var temp1 = ary[i].match(/[0-9]+/)[0],
//             temp2 = ary[i].match(/[a-zA-Z]+/)[0],
//             tempStr = ''
//         for (var j = 0; j < temp1; j++) {
//             tempStr += temp2;
            
//         }
//         str = str.replace(ary[i],tempStr)

       
//     }
//     return str.split('').reverse().join('');
// }

// // console.log('abc3(A)4(BC)'.match(/[0-9]\([a-zA-Z]+\)/g))

// // console.log(f2('abc3(A)4(BC)'))

console.log(2+'2')
console.log('2'+2)