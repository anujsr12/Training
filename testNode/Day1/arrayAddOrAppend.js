var array = new Array('a','b','c')

console.log('array : ', array)

console.log('to add data from start/0th index we use unshift')
array.unshift('d','e')
console.log('array after unshilt operation (adding d to to 0th index) : ', array)

console.log('to append or edit data in array at specific index use splice')
array.splice(2,3,'f','g','h')
console.log('after using splice operation : ', array)