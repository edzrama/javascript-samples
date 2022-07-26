function validate(password) {
    let oneLowerChar = /(?=.+[a-z])/;
    let oneUpperChar = /(?=.+[A-Z])/;
    let oneDigit = /(?=.+[0-9])/;
    let oneSpecialChar = /(?=.+[!@#$%^&*])/;
    let minimumLengthChar = /(?=.{8,})/;

    let isValid = oneLowerChar.test(password) &&
        oneUpperChar.test(password) &&
        oneDigit.test(password) &&
        oneSpecialChar.test(password) &&
        minimumLengthChar.test(password)

    return isValid ? "Your password is valid": "Invalid password";
}

// let name = prompt("Please Enter your password");
// validate(name);

console.log(validate("ABcdef123#"));
console.log(validate("abdfjkd"));