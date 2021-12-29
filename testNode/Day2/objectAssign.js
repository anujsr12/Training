const obj1 = {}
const obj2 = {
    'fname' : 'Anuj',
    'lname' : 'srivastava',
    'Age' : '22',
    'Dob' : new Date('06-03-1999')
}
Object.assign(obj1,obj2, {'joining_date' : new Date('12-22-2021')})
console.log(obj1)

console.log(Object.keys(obj1.Dob))
console.log(obj1.Dob)