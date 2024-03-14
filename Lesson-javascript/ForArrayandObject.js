// Loop For of Array
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// for (let fruit of fruits){
//     console.log(fruit);
// };




// Loop For in Object 
const studentScore = {
    Olivia: 20,
    Liam: 13,
    Emma: 40,
    Noah: 18,
    Amelia: 32,
    Oliver: 10,
    Ave: 11,
    Elijah: 21,
    Sophia: 14,
    Mateo: 22,
}

// for (let student in studentScore) {
//     console.log(`${student} memiliki score : ${studentScore[student]}`);
// };

let scores = Object.values(studentScore);

console.log(scores)