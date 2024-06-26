const passBox = document.getElementById("text");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijlmnopqrstuvwxyz";
const specialChar = "!@#$%^&*()-_=+\|[]{};:/?.>";
const number = "0123456789";
const length = 12;
const allChar = upperCase + lowerCase + specialChar + number;

function createPass() {
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passBox.value = password;
}

function copyPassword() {
    passBox.select();
    document.execCommand("copy");
}