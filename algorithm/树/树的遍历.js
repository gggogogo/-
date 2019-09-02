/*
 * @Author: GuoWei
 * @LastEditors: GuoWei
 * @Description:  树的前中后序遍历
 * @Date: 2019-03-30 19:25:40
 * @LastEditTime: 2019-04-19 21:36:24
 */

function traversal(tree, order) {
    var result = [];
    var preOrder = function (tree) {
        if (tree) {
            console.log(tree.val);
            result.push(tree.val);
            preOrder(tree.left);
            preOrder(tree.right);
        }
    };
    var inOrder = function (tree) {
        if (tree) {
            inOrder(tree.left);
            console.log(tree.val);
            result.push(tree.val);
            inOrder(tree.right);
        }
    };
    var postOrder = function (tree) {
        if (tree) {
            postOrder(tree.left);
            postOrder(tree.right);
            console.log(tree.val);
            result.push(tree.val);
        }
    };

    switch (order) {
        case 'pre':
            preOrder(tree);
            break;
        case 'in':
            inOrder(tree);
            break;
        case 'post':
            postOrder(tree);
            break;
    }
    return result;
}

function bfs(node) {
    if (node) {
        var stack = [];
        stack.push(node);
        while (stack.length !== 0) {
            node = stack.shift();
            console.log(node.val);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
    }
}
function preTraversal(node) {
    var stack = [];
    stack.push(node);
    while (stack.length) {
        node = stack.pop();
        console.log(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
}
function inTraversal(node) {
    if (node) {
        var stack = [];
        while (stack.length || node) {
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                console.log(node.val);
                node = node.right;
            }
        }
    }
}
function postTraversal(node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    stack.push(node)
    var tmp = null
    while (stack.length !== 0) {
        tmp = stack[stack.length - 1]
        if (tmp.left && node !== tmp.left && node !== tmp.right) {
            stack.push(tmp.left)
        } else if (tmp.right && node !== tmp.right) {
            stack.push(tmp.right)
        } else {
            console.log(stack.pop().val)
            node = tmp
        }
    }
}
var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,

        },
        right: {
            val: 4,

        }
    },
    right: {
        val: 5,
        left: {
            val: 6,

        },
        right: {
            val: 7,

        }
    }
}
// console.log(traversal(tree,'pre'))
// console.log(preTraversal(tree))
// console.log(traversal(tree, 'in'))
// console.log(inTraversal(tree))
console.log(traversal(tree,'post'))
console.log(postTraversal(tree))

