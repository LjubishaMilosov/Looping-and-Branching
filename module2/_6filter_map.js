let prices = [20, 50, 120, 200];
let filtered = prices.filter(price => price  > 100);
console.log(filtered);

//result: 
// ['Microsoft', 'MSFT', 'Tech', '7.46', '220', '0.96']
// ['Walmart', 'WMT', 'Retail', '2.71', '131', '0.51']
// ['Intel', 'INTC', 'Tech', '4.11', '26', '0.71']
// ['International Business Machines', 'IBM', 'Tech', '0.9', '121', '0.83']
// ['Pfizer', 'PFE', 'Pharmaceuticals', '5.61', '43', '0.64']
// ['GitLab', 'GTLB', 'Software', '0.148', '45', '']


// if we need only the name of the company and beta value we can use the 'map' method :

// example of thing that can be done with map:

let newNums = prices.map(price => (price / 3).toFixed(1).toString().concat(" used"));
console.log(newNums);