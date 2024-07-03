//ITERABLES:
// - Array
// - HTMLCollection
// - String
// - Sets (uniques values only)
// - Maps (key-value pairs)



console.log("Strings:");
let string = "abc";
for(const letter of string){
    console.log(letter);
}

console.log("Set:");
const set  = new Set(["a", "b", "c"]);
for(const element of set){
    console.log(element);
}

console.log("Maps:");
const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
])

for(const entry of map) {
    console.log(entry);
}

// to get the entry(key & value)
for(const entry of map) {
    console.log(`At key ${entry[0]} we have value ${entry.at(1)}`);
}

//to get the keys only
console.log("Keys:");
for(const key of map.keys()) {
    console.log(key);
}

//to get the values only
console.log("Values:");
for(const value of map.values()) {
    console.log(value);
}

