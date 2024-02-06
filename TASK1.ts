// Task 1

let x : string = "Abhishek kumar";
let y : number = 1;
let z : boolean = true;

console.log(x , y , z);


// Task 2

function addTWONUMBER(num1:number , num2:number) : number{
return num1 + num2;
}

console.log(`Addition of two Numbers is : ${addTWONUMBER(5 , 8)} .`);

function addTWOSTRING (str1:string , str2:string) : string{
    return str1 + str2;
}

console.log (`Concating two Strings : ${addTWOSTRING('Abhishek' , ' Kumar')} .`);


function areaofRECT (width:number , height:number) : number{
    return width * height;
}
console.log(`Area of RECTANGLE with dimension 8 and 10 is ${areaofRECT(8 , 10)} . `)

// Task3

interface Product {
    name: string;
    price: number;
    description: string;
  }
  
  let product: Product = {
    name: "Merchant Of Venice",
    price: 123.45,
    description: "Novel Written by William Shakesphere"
  };
  
  console.log(product);

let product1: Product = {
    name: "English - I",
    price: 109,
    description: "English Poem Book"
  };
  
  let product2: Product = {
    name: "English - II",
    price: 210,
    description: "English Story Book"
  };

  let product3: Product = {
    name: "Hindi - I",
    price: 278,
    description: "Hindi Book"
  };
  
  // Task 4
  function addProductPrices(product1: Product, product2: Product , product3 : Product): number {
    return product1.price + product2.price + product3.price;
  }
  
  console.log(`Prices of the books in total is ${addProductPrices(product1, product2 , product3)} . `);

//   Task 5
function printFirstWordFromDescription(product: Product): string {
    return product.description.split(' ')[0];
  }
  
  console.log(printFirstWordFromDescription(product1));
  console.log(printFirstWordFromDescription(product2));
  console.log(printFirstWordFromDescription(product3));
  
