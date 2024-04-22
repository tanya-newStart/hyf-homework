// A future age calculator
const yearOfBirth = 1981;
const futureYear = 2045;

const age = futureYear - yearOfBirth;

console.log(`You will be ${age} years old in ${futureYear}.`);


// A dog age calculator
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

const age_humanYears =dogYearFuture - dogYearOfBirth;
const dogYear = age_humanYears*7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${age_humanYears} human years old in ${dogYearFuture}.`);
};