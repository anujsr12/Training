const obj1 = {
    'fname' : 'Anuj',
    'lname' : 'Srivastava',
    'Age' : 22,
    'Dob' : new Date('06-03-1999'),
    'chinese name' : function(){
        return (this.lname +', '+ this.fname)
    },
    'job' : {
            'company' : 'tudip',
            'ocupation' : 'software developer',
            'joining date' : '12-22-2021'
    }
    
}

console.log(obj1.job.company)
delete obj1.job.company
console.log(obj1.job.company)

console.log(obj1['job'])
delete obj1['job']
console.log(obj1['job'])