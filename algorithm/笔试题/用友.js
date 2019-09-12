var isSubtree = function (s, t) {
  //在这里实现判断t是否是s的子树
  if (s) {
    var stack = [];
    stack.push(s);
    while (stack.length !== 0) {
      if (stack[0].val === t.val) {
        JSON.stringify(stack[0]) === JSON.stringify(t)
        return true
      } else {
        f = stack.shift();
        // console.log(f.val);
        f.left && stack.push(f.left);
        f.right && stack.push(f.right);
      }
    }
  }
  return false
}

let s = {
  val: 3,
  left: { val: 4, left: { val: 1, left: null, right: null }, right: null },
  right: {
  }
}



