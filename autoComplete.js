// function f(val) {
//     function inner(innerVal) {
//         return f(val + innerVal);
//     }
//     inner.val = val;
//     return inner;
// }

// console.log(f(1)(2));


let input = document.getElementById('value');
let sugWrapper = document.querySelector('.sug-wrapper');
input.addEventListener('input', function () {
    autoComplete(sugWrapper, input);

});

let words = ['abcsd', 'dsada', 'rqr', 'qwertyuuioipo', 'asdfghjkl', 'zxcvbnm'];

function match(str) {
    return words.filter((item) => {
        return (item.indexOf(str) !== -1);
    });
}
function autoComplete(wrapper, input) {
    wrapper.innerHTML = '';
    let ul = document.createElement('ul');
    let str = '';
    let valList = [];
    let index = -1;
    valList = match(input.value);
    if (valList.length === 0) {
        wrapper.style.display = 'none';
    } else {
        wrapper.style.display = 'block';
        valList.forEach((item, index) => {
            str += ` <li class="sug-item" index=${index}>${item}</li>`
        });
        ul.innerHTML = str;
        wrapper.appendChild(ul);

        var liAry = document.querySelectorAll('.sug-wrapper li');

        wrapper.addEventListener('click', function (e) {
            choice(e.target.getAttribute('index'), valList);
        });
        input.addEventListener('keyup', function (e) {
            if (e.keyCode === 40) {
                if (index < valList.length - 1) {
                    ++index;
                    input.value = valList[index];
                    [].forEach.call(liAry, function(item, i) {
                        if(i === index){
                            item.classList.add('heighLight');
                        } else {
                            item.classList.remove('heighLight');
                        } 
                    })    
                }
            } else if (e.keyCode === 38) {
                if (index > 0) {
                    --index;
                    input.value = valList[index];
                    [].forEach.call(liAry, function(item, i) {
                        if(i === index){
                            item.classList.add('heighLight');
                        } else {
                            item.classList.remove('heighLight');
                        }
                        
                    })
                }
            } else if(e.keyCode === 8) {
                if(input.value==''){
                    wrapper.style.display = 'none';
                }
            }
        });
    }
}
