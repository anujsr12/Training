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
let arr = [23,24,24,25,12,12,12,11]

let max = arr.reduce(function(pre,curr){
    if (curr<pre){
        return curr
    }
    return pre    
})
console.log(max)