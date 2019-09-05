function add(str1, str2) {
    var flag = false;
    // 处理数组
    var ary1 = str1.split('').reverse().map((item) => {
        if (isNaN(parseInt(item))){
            flag = true;
        }
        return parseInt(item);
    });
    var ary2 = str2.split('').reverse().map((item) => {
        if (isNaN(parseInt(item))){
            flag = true;
        }
        return parseInt(item);
    });
    if(flag){
        console.log('请正确输入');
        return;
    }
    var longer = ary1.length >= ary2.length ? ary1 : ary2;
    var shorter = ary1.length < ary2.length ? ary1 : ary2;

    // 运算
    shorter.forEach((item, index) => {
        longer[index] += item;
    });
    // 进位
    for (let i = 0; i < longer.length; i++) {
        if (longer[i] >= 10) {
            longer[i] = longer[i] % 10;
            if (longer[i + 1]) {
                longer[i + 1]++;
            } else {
                longer[i + 1] = 1;
            }
        }
    }
    return longer.reverse().join('');
}

console.log(add('99999999999999999', '2')); 
console.log(add('123', '123')); 
console.log(add('', '2')); 
console.log(add('', '')); 
console.log(add('a', '2')); 