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

const nest = function(obj){
    console.log(typeof obj)
    Object.entries(obj).forEach(([key, val])=>{
        console.log(key,':',val)
        if (typeof val == 'object'){
            nest (val)
        }
    })
}
nest(obj1)