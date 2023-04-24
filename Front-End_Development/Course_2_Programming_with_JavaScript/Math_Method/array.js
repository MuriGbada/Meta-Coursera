// array are iterable

var veggies = ['onion', 'carrot', 'tomato'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(i,".", veggies[i]);
}