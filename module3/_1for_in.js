let stocks = ['Apple', 'Google','Microsoft', 'Verizon'];

for (let stock of stocks){
    console.log(stock);
}

for ( let stock in stocks){
    console.log(stock);
}

for ( let index in stocks) {
    console.log(stocks[index]);
}

// --------------------------------------------------------------------------

let stock = {
    "name": "Microsoft",
    "industry": "Tech",
    "price": 200,
    getDivYield() {
        return this.divident / this.price * 100;
    }
};

// TypeError: stock is not iterable:

// for(let property of stock){
//     console.log(property);
// }

for(let property in stock){
    if(stock.hasOwnProperty(property)){
        if(typeof stock[property] === 'function') {
            continue;
        }
        console.log(property + " -> " + stock[property]);
    }
    
}

// 'for in' can still be replaced with 'for of' eaither using the Object.keys method to get the properties or 
// Object.entries ythat gives you both keys and values: 

console.log("Object.keys: ");
for(let property of Object.keys(stock)){
    console.log(property);
}


console.log("Object.entries(both keys and values): ");
for(let [key, value] of Object.entries(stock)){
    console.log(key,value);
}



