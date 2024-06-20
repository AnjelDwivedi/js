"use strict" // to treat all js code as newer version 

// alert(3+3) // we're using nodejs not browser (inspect then console where we write as a document or attach with html file)

// ; in js is a choice ; always think about readability and how more the code can be future proof

// for documentation we can go and check mdn (like alert mdn) but that is not original but by mozilla firefox and original one is from ECMAscript , it sets standards (how input , output etc should be) as earlier all different engine and different rules therefore one common like commity was set up

/*
primitive dataypes 

number -> 2 raised to the power 53
bigint 
string -> " " or ' '
boolean
null -> standalone value (and also a datatype) ; khaali hai undefined nhi 
undefined -> mtlb abhi value assign nhi hui hai 
symbol -> to find uniqueness 
*/

// object

let age = 10000
let country = "India"
let state = " "
let capital 
let temprature = null 

console.log([state,capital,temprature])

console.log(typeof age)
console.log(typeof country)

console.log(typeof null) // gives object as output ; a flaw (maybe) in js 
console.log(typeof undefined) // gives undefined as output as is a type 