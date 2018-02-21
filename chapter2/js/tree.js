function Tree () {

    this.left = null
    this.right = null
    this.key = null

}

Tree.prototype.insert = function (item) {
    // 小的值放在左边
    if (!this.key) {
        this.key = item
    } else if (item < this.key) {
        if (!this.left) {
            this.left = new Tree()
            this.left.key = item
        } else {
            this.left.insert(item)
        }
    } else {
        if (!this.right) {
            this.right = new Tree()
            this.right.key = item
        } else {
            this.right.insert(item)
        }
    }
}
// 中序遍历
Tree.prototype.InOrderTraverse = function (node, callback) {
    if (node) {
        node.InOrderTraverse(node.left, callback)
        callback(node)
        node.InOrderTraverse(node.right, callback)
    }
}
// 前序遍历
Tree.prototype.PreorderTraverse = function (callback) {
    if (this) {
        callback(this)
        this.left && this.left.PreorderTraverse(callback)
        this.right && this.right.PreorderTraverse(callback)
    }
}
// 后序遍历
Tree.prototype.PostOrderTraverse = function (node, callback) {
    if (node) {
        node.PostOrderTraverse(node.left, callback)
        node.PostOrderTraverse(node.right, callback)
        callback(node)
    }
}
// 最小
Tree.prototype.min = function () {
    if (this.left) {
        return this.left.min()
    } else {
        return this
    }
}
// 最大
Tree.prototype.max = function () {
    if (this.right) {
        return this.right.max()
    } else {
        return this
    }
}
// 查找
Tree.prototype.find = function (item) {
    if (this.key === item) {
        return this
    } else if (item < this.key && this.left) {
        return this.left.find(item)
    } else if (item > this.key && this.right) {
        return this.right.find(item)
    } else {
        return false
    }
}

Tree.prototype.remove = function (key) {
    if (!this) {
        return false
    }

    if (this.key == key) {
        if (!this.left && !this.right) { // 叶子节点
            return null
        } else if (this.right && this.left) {

            var aux = this.right.min()
            console.log('aux', aux)
            this.key = aux.key
            this.right = this.right.remove(aux.key)
            return this

        } else if (this.right && !this.left) {
            return this.right
        } else if (!this.right && this.left) {
            return this.left
        }
    } else if (key < this.key) {
        this.left = this.left.remove(key)
        return this
    } else if (key > this.key) {
        this.right = this.right.remove(key)
        return this
    } else {
        return false
    }

}

var tree = new Tree()

var items = [8,3,4,1,6,7,234,-2324]
var newItems = []

items.forEach(function (item) {
    tree.insert(item)
})

// console.log(tree)

var tree = tree.remove(8)

// console.log(tree)

tree.PreorderTraverse(function (node) {
    newItems.push(node.key) 
})

var minNode = tree.min()

// console.log('minNode', minNode)

var maxNode = tree.max()

// console.log('maxNode', maxNode)

var catchNode = tree.find(11)

// console.log('contains', catchNode)

console.log(items)
console.log(newItems)
