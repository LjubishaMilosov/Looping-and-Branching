//with rray you should use for-of loop

const arr = [10, 20, 30]

for(let value of arr){
    console.log(value)
}

///if you wnat to know the index position of every element

console.log("Index value pairs")
for(let[index,value] of arr.entries()){
    console.log(index,value);
}

//you can use const or let in for of loop
console.log("Const:");
for(const value of arr){
    console.log(value);
    console.log(value * 2);
}

// this will result in error
for(const step = 1; step <= 5, step++;) {
    console.log("Step:" + step);
    }