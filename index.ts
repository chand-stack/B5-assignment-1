
    function formatString(input: string, toUpper?: boolean): string{
                if(toUpper === false){
                  return input.toLowerCase()
                }else{
                    return input.toUpperCase()
                }
    }

    formatString("Hello")
    formatString("Hello", true)
    formatString("Hello", false)
    
    
    

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(book => book?.rating >= 4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
filterByRating(books); 





function concatenateArrays<T>(...arrays: T[][]): T[]{
    let arr1:T[] = []
return arr1.concat(...arrays)
}
concatenateArrays(["a", "b"], ["c"]);     

concatenateArrays([1, 2], [3, 4], [5]);     






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
myCar.getInfo();   
myCar.getModel(); 





function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2
}

processValue("hello"); // Output: 5
processValue(10);      // Output: 20




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
  
 


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
     if(day === Day.Sunday || day === Day.Saturday){
        return "Weekend"
     } else {
        return "Weekday"
     }
  }
getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"




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

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

