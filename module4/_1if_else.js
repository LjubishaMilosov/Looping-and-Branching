let stock = {
    "name": "Google",
    "price": 100,
};

if(stock.price <= 100) console.log('Buy');

// if more things are done with the statement, the use braces

if(stock.price <= 100) {
    console.log('Buy');
    console.log('Buy some more');
} else {
    console.log('Wait');
}


//'swtch' statement is a good replacement for 'if' statement if there three to ten branches:

// if() {
//         //do something
// } else if(){
//     //do something else
// } else if(){
//     //do something else
// }

//use:
// swith (val) {
//     case a:
//         //do something
//         break;
//     case b:
//         //do something else
//         break;
//     default:
//         //do something else
//         console.log('Buy');
// }

// example:
class Portofolio {
    constructor(stocksPct, bondPct) {
        this.stocksPct = stocksPct;
        this.bondPct = bondPct;
    }
}

function generatePortofolio(riskTolerance) {
   
    switch (riskTolerance) {
        case: 'low':
            return new Portofolio(20,80);
        case: 'medium':
            return new Portofolio(50, 50);
        case: 'high':
            return new Portofolio(90,10);
        default:
            return new Portofolio(50.50);
}

console.log(generatePortofolio('low').stocksPct);
console.log(generatePortofolio('average').stocksPct);

function generatePortofolio_v2(riskTolerance) {
    let portofolio;
    switch (riskTolerance) {
        case: 'low':
            portofolio = new Portofolio(20,80);
            break;
        case: 'medium':
            portofolio = new Portofolio(50, 50);
            break;
        case: 'high':
            portofolio = new Portofolio(90,10);
            break;
        default:
            retportofolio = new Portofolio(50.50);
    }
return portofolio;
}

console.log('V2');
console.log(generatePortofolio_v2('low').stocksPct);