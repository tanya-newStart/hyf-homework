// Similar to the format credit card number, now we need to identify the credit card type.

// console.log(getCardInfo(4781321334789876)); // 'visa'
// How can we find out what rules there are for credit cards? Programmers best friend is always available :)
const creditTypes = [
  { Visa: /^4[0-9]{12}(?:[0-9]{3})?$/ },
  {
    MasterCard:
      /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
  },
  { "American Express": /^3[47][0-9]{13}$/ },
  { Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
  { dankort: /^(5019)\d+$/ },
];
function getCardInfo(num) {
  for (const card of creditTypes) {
    for (const [type, regex] of Object.entries(card)) {
      if (regex.test(num)) {
        return type;
      }
    }
  }
  return "Unknown";
}
console.log(getCardInfo(4916338506082832));
