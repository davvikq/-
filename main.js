// 1
const words = ['peach', 'apple', 'grape', 'apricot', 'kiwi', 'orange', 'banana', 'ananas']

let filterAwords = words.filter((item) => item.charAt(0) == 'a' || item.charAt(0) == 'A')

console.log(filterAwords)
console.log(words.sort());

let reduceLength = words.reduce((long, current) => 
    long.length > current.length ? long : current
)
console.log(reduceLength);

let JoinArray = words.join('')
console.log(`Длина строк: ${JoinArray.length}`)

let newItems = prompt('Что вы хотите добавить?')
words.push(newItems)
console.log(words);

// 2
let num1 = [6, 18, 23, 3, 2, [22, 59]]
let num2 = [101, 4, 59, 89, 0, 7, 31, 12]

let concatArrays = num1.flat().concat(num2)
let sumArray = concatArrays.reduce((a, b) => a + b)
console.log(sumArray);

// 3
let numbers = [42, 'Alex', 'John', 18, 23, 100, 1]
let names = ['Tyler', 'Stark', 'Jake', 'Igor']

let numbersFilter = numbers.filter((item) => typeof(item) != 'string')
console.log(numbersFilter);

let namesFilter = numbers.filter((item) => typeof(item) == 'string')
// console.log(namesFilter);

let concatName = names.concat(namesFilter)
console.log(concatName);

if (concatName.includes('Constantin') || concatName.includes('constantin')){
    console.log('Уже есть имя: Constantin');
} else if (!concatName.includes('Constantin') || !concatName.includes('constantin')) {
    concatName.push('Constantin')
    console.log('+Constantin');
    let YesNo = confirm('Хотите посмотреть что содержится в массиве?')
    if (YesNo == true) {
        console.log(concatName);
    } else {
        alert('Ладно')
    }
}
// console.log(concatName);