{

    // problem1
    function formatString(input: string, toUpper?: boolean): string{
                if(toUpper === false){
                  return input.toLowerCase()
                }else{
                    return input.toUpperCase()
                }
    }

    // console.log(formatString("Hello"));
    // console.log(formatString("Hello", true));
    // console.log(formatString("Hello", false));
    
    
    
    // problem2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
  
    return items.filter(book => book?.rating >= 4)
    
    
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books); 
//   console.log(filterByRating(books));





// problem3
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// Function Signature:
function concatenateArrays<T>(...arrays: T[][]): T[]{
    let arr1:T[] = []
    
    
return arr1.concat(...arrays)
}
concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// console.log(concatenateArrays(["a", "b"], ["c"]));

concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));








// problem 4

// Description:

// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
class Vehicle {
    private make : string;
    private year : number;

    constructor(make:string,year:number){
        this.make = make;
        this.year = year;
    }

    getInfo(){
        return `Make: ${this.make}, Year:${this.year}`
    }
}

class Car extends Vehicle {
    private model : string;
    constructor(make: string, year:number, model:string){
        super(make,year)
        this.model = model
    }

    getModel(){
        return `Model: ${this.model}`
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
// console.log(myCar.getInfo());
// console.log(myCar.getModel());



// problem 5 
// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number
function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2
}

processValue("hello"); // Output: 5
processValue(10);      // Output: 20
// console.log(processValue("hello"));
// console.log(processValue(10));


// problem6
// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

// Interface & Function Signature:
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
        return products.length === 0 ? null : products.sort((a,b)=> a.price - b.price)[products.length-1]
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products);  
  
  // Output: { name: "Bag", price: 50 }

//   problem 7

// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
// Enum & Function Signature:

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
//   console.log(Day.Monday);
  
  function getDayType(day: Day): string{
     if(day === Day.Sunday){
        return "Weekend"
     } else {
        return "Weekday"
     }
  }
getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));


// Description: Create an async function that:

// Returns the square of a number after 1 second
// Rejects if the number is negative

async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve,reject)=>{
        if(n>0){
            setTimeout(() => {
               return resolve(n*n)
            }, 1000);
        } else{
            reject(
                Error("Negative number not allowed")
            )
        }
    })
}

// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

}