const obj1 = {
    'fname' : 'Anuj',
    'lname' : 'Srivastava',
    'Age' : 22,
    'Dob' : new Date('06-03-1999'),
    'chinese name' : function(){
        return (this.lname +', '+ this.fname)
    }
}

console.log(obj1['chinese name']())