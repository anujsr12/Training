var array = new Array('a','b','c')

console.log('<to delete data from front>')
console.log('array before shift operation : ', array)

array.shift()

console.log('array after shift operation')
console.log('element at 0th index is deleted from array : ',array)

console.log('\n<to delete data from back>')
console.log('array before pop operation : ', array)

array.pop()

console.log('array after pop operation')
console.log('element at nth index is deleted (last element of array) from array : ',array)

var array = new Array('a','b','c',1,2,3)
console.log('deleted data from array using splice from till to the specified index')
console.log('array before splice operation : ', array)
array.splice(0,3)
console.log('after applying splice operation', array)