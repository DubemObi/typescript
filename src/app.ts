import {Invoice} from "./classes/Invoice.js"
import {Payment} from "./interfaces/Payments.js"
import {HasFormatter} from "./interfaces/HasFormatter.js"
import {ListTemplate} from './classes/ListTemplates.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)

// interfaces
// export interface IsPerson {
//     name: string;
//     age?: number;
//     speak(a: string): void;
//     spend(a: number): number;
//   }
  
//   const me: IsPerson = {
//     name: 'shaun',
//     //age: 30,
//     speak(text: string): void {
//       console.log(text);
//     },
//     spend(amount: number): number {
//       console.log('I spent ', amount);
//       return amount;
//     },
//   };
  
//   console.log(me);
//   me.speak('hello, world');
  
//   const greetPerson = (person: IsPerson): void => {
//     console.log('hello ', person.name);
//   }
  
//   greetPerson(me);
//   //greetPerson({name: 'shaun'});

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// // invoices.push({ name: 'shaun' });
  
//   invoices.forEach(inv => {
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
//   })
//   console.log(invoices);
  

const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
//TYPECASTING
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter
  if( type.value === 'invoice' ){
    doc = new Invoice(...values)
  }else{
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end');
});

// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
  let docOne = addUID({name: 'yoshi', age: 40});
  //let docTwo = addUID('shaun');
  
  console.log(docOne.name);
  
  // with interfaces
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }
  
  const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'shaun' }
  };
  
  const docFour: Resource<string[]> = {
    uid: 1, 
    resourceName: 'shoppingList', 
    data: ['bread', 'milk']
  };
  
  console.log(docThree, docFour);


  //ENUMS 

//   enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }

// console.log(docOne);
// console.log(docTwo);

// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];