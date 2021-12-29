const obj = {}
console.log(typeof obj)
console.log(obj)

obj.Name = 'Anuj Srivastava'
obj.Age = '22'

console.log(obj)
console.log('name\t: '+ obj['Name'])
console.log('age\t: '+ obj['Age'])

obj['number'] = 8874428287

obj.score = [27,28,26,6,45]
console.log('number\t: '+ obj.number)
console.log('score of day2\t: '+ obj.score[1])
delete obj
console.log(obj)
