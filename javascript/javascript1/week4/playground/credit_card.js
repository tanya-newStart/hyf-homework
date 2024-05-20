// const formattedCreditCardObject = formatCreditCardNumber(123456789);
// console.log(formattedCreditCardObject);
// /*
// {
//   original: 123456789,
//   formatted: "1234 5678 9",
// }
// */

// const num = 123456789;
// const str = num.toString();
// const str1 = str.slice(0, 4);
// const str2 = str.slice(4, 8);
// const str3 = str.slice(8);
// console.log(str3 + str2);

function formatCreditCardNumber(num) {
  if (typeof num !== "number") {
    return "Please enter a number";
  }
  const str = num.toString();
  const arr = [];
  arr.push(str.slice(0, 4), str.slice(4, 8), str.slice(8));
  const formattedStr = arr.join(" ");

  return { original: num, formatted: formattedStr };
}
console.log(formatCreditCardNumber(123456789));
