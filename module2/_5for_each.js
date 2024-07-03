["Apple", "Google", "Microsoft"].forEach(x => { console.log(x)});

["Apple", "Google", "Microsoft"].forEach((x, i) => { console.log(x, i)});



function repeat(str) {
    console.log(str.repeat(3));
}
['a', 'b', 'c'].forEach(repeat);

//-------------------------------------
//Sparse arrays: => arrays not with undefined or null values but empty slots

let arrayWithAbsentValues = [10, null, 20, undefined, 50];
for(const num of arrayWithAbsentValues){
    console.log(num);
}

arrayWithAbsentValues.forEach( num => console.log(num));

arrayWithAbsentValues[10] = 100;
console.log(arrayWithAbsentValues);  // result:[ 10, null, 20, undefined, 50, <5 empty items>, 100 ]


for(const num of arrayWithAbsentValues){
    console.log(num);
}  // normal loops treat empty slots as undefined

arrayWithAbsentValues.forEach( num => console.log(num)); //forEach loop skips empty slot altogether