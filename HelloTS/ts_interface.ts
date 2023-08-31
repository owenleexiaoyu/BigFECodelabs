// function printLabel(labelledObject: { label: string }) {
//     console.log(labelledObject.label);
// }

// let myObj = { size: 10, label: "Size 10 object" };
// printLabel(myObj);

// interface LablledObject {
//     label: string;
// }

// function printLabel2(labelledObject: LablledObject) {
//     console.log(labelledObject.label);
// }

// let myObj2 = { size: 10, label: "Size 10 object" };
// printLabel2(myObj2);

/**
 * 接口的可选属性
 */
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string, area: number } {
//     let newSquare = { color: 'White', area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     console.log("Create a square: color is " + newSquare.color + ", area is " + newSquare.area);
//     return newSquare;
// }

// let mySqure = createSquare({ color: "Black" });

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p: Point = {
//     x: 1,
//     y: 2
// };

// p.x = 5;

// interface Person {
//     sayHi: () => string;
// }
  
//   let xiaoming: Person = {
//     sayHi: (): string => {
//       return "Hello";
//     }
//   };

//   console.log(xiaoming.sayHi());

// interface Shape {
//     color: string;
//   }
  
//   interface Square extends Shape {
//     sideLength: number;
//   }

//   let s = <Square>{};
//   s.color = "Red";
//   s.sideLength = 10;
// let s: Square = {};
// s.color

// interface NameList {
//     [index: number]: string;
//     // hello: string;
// }

// let list: NameList = {
//     // hello: "Haha",
//     0: "item 0",
//     1: "item 1",
//     "2": "item 2",
//     true: "item 3",
// }

// console.log(list["2"]);

interface AgeMap {
    [index: string]: number;
}

let ageMap: AgeMap = {};
ageMap["Bob"] = 15;

ageMap[2] = 13;

ageMap[true] = 20;

console.log(ageMap[2]);