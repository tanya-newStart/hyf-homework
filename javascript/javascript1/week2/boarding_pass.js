function getFullname(
  firstname,
  lastname,
  useFormalName = false,
  isFemale = false
) {
  try {
    if (!firstname || !lastname)
      throw "Error! Both first and last names are required.";
    if (useFormalName && isFemale) {
      return "Baroness " + firstname + " " + lastname;
    }
    if (useFormalName) {
      return "Lord " + firstname + " " + lastname;
    } else {
      return firstname + " " + lastname;
    }
  } catch (error) {
    return error;
  }
}
fullname1 = getFullname("Benjamin", "Hughes", true); // returns "Benjamin Hughes"
fullname2 = getFullname("Tanya", "Dewland", true, true); //need another input of type "checkbox" for gender in html
fullname3 = getFullname("Quick", false, true); //returns an error
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
console.log(getFullname("Benjamin", "Hughes", false)); // returns "Benjamin Hughes"
console.log(getFullname("", "")); //returns an error
