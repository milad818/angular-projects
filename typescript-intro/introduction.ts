
// VARIABLES
// let myName: string = '';
// myName = 'test';
// myName = 5   // raises error

// let myName: any = '' ;    // of any type, use only if necessary
                          // alternative would be union

// union allows multiple type vis pipeline character '|'      
let myName: string | null = null;
myName = 'test';


// FUNCTIONS
// union is allowed also in functions, especially when returning a result
function addShipping(price: number, shipping: number): number | boolean {
  return price + shipping
  // return 'test'
}

addShipping(20, 4);


// ARRAYS
let item = ["book", "you", "handle"];  // the type is automatically set to string
let emptyArray = [];    // the type is automatically set to any
let typedArray: string[] = [];   // manually typed
let typedArrayMultiple: string[] | number[] = [];   // manually typed


// OBJECTS
// If you hover over the object, the types are auto-detected
const person = {
  name: "Jessie",
  occupation: "Plumber",
  age: 23
}

// a single object, which probably can be modified
const account: {
  name: string,
  balance: number,
  age: number,
  status?: string   // Optional; otherwise it will throw an error
} = {
  name: "Jessie",
  balance: 23000,
  age: 23
}

let accounts: {}[];   // a typed array of accounts of type object


// INTERFACES (better in pascal case)
interface IAccount {
  name: string,
  balance: number,
  age: number,
  status?: string,
  deposit?: () => void   // made optional via '?'
}

const acc: IAccount = {
  name: "Jessie",
  balance: 23000,
  age: 23
}

let accs: IAccount[];


// CLASSES
class InvestmentAcc implements IAccount {

  // 'implements' tells TypeScript this class must have all the properties and methods that IAccount requires
  // It doesn't automatically assign types to constructor parameters
  constructor(
    // if not typed, property won't initialize
    public name: string,
    public balance: number,
    public age: number
  ) {}

  private withdraw() {

  }
}


// GENERICS
class Queue {
  private data: string[] = [];

  add(item: string) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const queue1 = new Queue();
queue1.add('Johnathan');
queue1.add('Amir');

const queue2 = new Queue();
// queue2.add(34);   // raises an error
                        // add is meant for strings, not numbers

// the solution
// add <T>
// change the property data type to T
// add data type where you instantiate e.g., AnotherQueue<number>()
class AnotherQueue<T> {

  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }
}

const anotherQueue1 = new AnotherQueue<string>();
anotherQueue1.add('Johnathan');
anotherQueue1.add('Amir');

const anotherQueue2 = new AnotherQueue<number>();
anotherQueue2.add(34);

// Additionaly, Generics can be applied to both functions and class methods 
function someFunction<T>(paramOne: T) : T {
  return paramOne
}

class SomeClass {

  someMethod<T>(items: T[]) : T[] {
    return items
  }
}

