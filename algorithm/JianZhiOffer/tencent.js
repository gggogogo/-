// function test(n, k) {
//     if (k > n) {
// //         return 0;
// //     }

// // }

// // function test(len, ary) {
// //     var i,
// //         res = [],
// //         temp = [],
// //         ary = [],
// //         mIndex = 0,
// //         current = len;

// //     for (i = 0; i < len; i++) {
// //         if (ary[i] == current) {
// //             ary.push(ary[i])
// //             current--
// //             for (var j = 0; j < temp.length; j++) {

// //             }
// //             res.push()
// //         } else {
// //             res.push('')
// //             temp.push(ary[i])
// //         }
// //     }


// // }


// // function test(ary) {
//     //  var YES = "Yes,you can win!",
//     //      NO = "Oh,no.",
//     //     count = 0

// //     var run = function (m) {
// //         for (var i = 0; i < m.length; i++) {
// //             if (m[i] === m[i + 1]) {
// //                 count++
// //             }
// //             m.splice(i, 2)
// //         }
// //         i -= 2
// //         return (count % 2) ? NO : YES;
// //     }

// //     for (var i = 1; i < ary.length; i++) {
// //         var numbers = ary[i].split('').map(function (s) {
// //             s = +s
// //         });
// //         run(numbers);
// //         if (count % 2 == 0) {
// //             console.log(NO)
// //         } else {
// //             console.log(YES)
// //         }
// //         count = 0
// //     }
// // }
// // test(['12332', '112233'])

// // var run = function (m) {
// //     for (var i = 0; i < m.length; i++) {
// //         if (m[i] === m[i + 1]) {
// //             count++
// //         }
// //         m.splice(i, 2)
// //     }
// //     i -= 2
// //     return (count % 2) ? YES : NO;
// // }
// // console.log(run([1,2,3,3,2]))
// // console.log(run([1,1,2,2,3,3]))


// var readline = require('readline');
// const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
// });
// var lineCount = 0,
//     tokens = [],
//     count = 0;
// var YES = "Yes,you can win!"+'Yes,you can win!',

//          NO = "Oh,no.";
// rl.on('line', function(line){
//     if(lineCount == 0) {
//         lineCount = +line;
//     } else {
//         tokens.push(line.split(''))
//         count ++;
//         if(count ==lineCount ){
//             tokens.forEach((item)=>{
//                 console.log(run(item));
//             })
//         }
//     }
// });
//  function run (m) {
//      var count = 0;
//     for (var i = 0; i < m.length; i++) {
//         if (m[i] === m[i + 1]) {
//             count++
//         }
//         m.splice(i, 2)
//     }
//     i -= 2
//     return (count % 2) ? YES : NO;
// }




var readline = require('readline');
const control = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
control.question('', callBack);
control.on('close', function(close){
    process.exit();
});

var arr = [];
var num = 0;
function callBack(str){
  arr.push(str);

  if(arr.length==1){
  	num = Number(str, 10);
  }

  if(arr.length>num){
	test(arr);
    control.close();
  }else{
  	control.question('', callBack);
  }
}

function test(array){
    var count = 0;
    var flag = 1;
    var run = function(numberList){
        for(var i=0;i<numberList.length-1;i++){
            if(numberList[i]===numberList[i+1]){
                count++;
                numberList.splice(i, 2);
                i-=2;
            }
        }
    }
    if(flag){
        for(var i=1;i<array.length;i++){
            let numbers  = array[i].split('').map(s=>parseInt(s));
            run(numbers);
            if(count % 2 == 0){
                console.log('Oh,no.');
            }else{
                console.log('Yes,you can win!');
            }
            count = 0;
        }
    }

}