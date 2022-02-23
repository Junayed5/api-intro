const shop = {
    name:'Ittadi store',
    address:'Hanif sorok',
    owner : 'sanket khan'
}

// Pack object on string
const string = JSON.stringify(shop);

//Unpack/parse string to object
const convert = JSON.parse(string)


// console.log(shop);
console.log(string);
console.log(convert);