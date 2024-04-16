// A future age calculator
let yearOfBirth = 1981;
let futureYear = 2045;

let age = futureYear - yearOfBirth;

console.log(`You will be ${age} years old in ${futureYear}.`);


// A dog age calculator
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;

let age_humanYears =dogYearFuture - dogYearOfBirth;
let dogYear = age_humanYears*7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${age_humanYears} human years old in ${dogYearFuture}.`);
};