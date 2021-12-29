const obj1 = {
    'fname' : 'Anuj',
    'lname' : 'srivastava',
    'Age' : 22,
    'Dob' : new Date('06-03-1999')
}
Object.entries(obj1).forEach(([key,value])=>{
    console.log(key +': '+value)
})

for(var[key,val] of Object.entries(obj1)){
    console.log(key +': '+typeof val)
}

obj1.Age++
console.log(obj1.Age)