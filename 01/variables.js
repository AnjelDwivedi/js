const accountId = 1234 // const can't be changed later 
let accountEmail = "2028007@kiit.ac.in"
var accountPassword = "qwerty"
accountCity = "Bhopal" // js is a very safe language , we can reserve space for a variable with mentioning anything before but this is a very bad practice 
let accountState ; // ; is a choice in js and if not variable is just declared and no value is assigned then js considers it undefined 

// other than constant , to declare variables we can use let and var(not used anymore as scope{} was unknown , both functional and block scope)

// compiler knows keywords along with meaning and purpose etc .

// accountId = 9876 // don't worry , node.js will analyse all at last (so mistakes get caught)
accountEmail = "ann@gmail"
accountPassword = "annman"
accountCity = "Prayagraj"

console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // rather than writing again and again console.log , this


