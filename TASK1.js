// Task 1
var x = "Abhishek kumar";
var y = 1;
var z = true;
console.log(x, y, z);
// Task 2
function addTWONUMBER(num1, num2) {
    return num1 + num2;
}
console.log("Addition of two Numbers is : ".concat(addTWONUMBER(5, 8), " ."));
function addTWOSTRING(str1, str2) {
    return str1 + str2;
}
console.log("Concating two Strings : ".concat(addTWOSTRING('Abhishek', ' Kumar'), " ."));
function areaofRECT(width, height) {
    return width * height;
}
console.log("Area of RECTANGLE with dimension 8 and 10 is ".concat(areaofRECT(8, 10), " . "));
var product = {
    name: "Merchant Of Venice",
    price: 123.45,
    description: "Novel Written by William Shakesphere"
};
console.log(product);
var product1 = {
    name: "English - I",
    price: 109,
    description: "English Poem Book"
};
var product2 = {
    name: "English - II",
    price: 210,
    description: "English Story Book"
};
var product3 = {
    name: "Hindi - I",
    price: 278,
    description: "Hindi Book"
};
// Task 4
function addProductPrices(product1, product2, product3) {
    return product1.price + product2.price + product3.price;
}
console.log("Prices of the books in total is ".concat(addProductPrices(product1, product2, product3)));
//   Task 5
function printFirstWordFromDescription(product) {
    return product.description.split(' ')[0];
}
console.log(printFirstWordFromDescription(product1));
console.log(printFirstWordFromDescription(product2));
console.log(printFirstWordFromDescription(product3));
