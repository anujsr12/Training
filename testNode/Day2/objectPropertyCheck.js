// weather the object has that property or not
// if object has then Object.hasOwnProperty will return true else false
const obj1 = {
    'fname' : 'Anuj',
    'lname' : 'srivastava',
    'Age' : '22',
    'Dob' : new Date('06-03-1999')
}
const target = Object.defineProperty( {},'foo', {
    value: 1,
    writable: false,
    enumerable:false
})
Object.defineProperty(target, 'count', {
    value: 3,
    writable: true,
    enumerable:true
})
target.foo = 23
target.count = 21

console.log(Object.keys(target))
console.log(target.foo)
console.log(target.count)

var a = 10;
console.log('count' in target);

console.log(target.hasOwnProperty('lol'))
