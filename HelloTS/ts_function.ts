// function add(x: number, y: number) {
//     return x + y;
// }

// console.log(add(1, 2));

/**
 * 测试函数的可选参数
 * @param firstName 
 * @param lastName 
 * @returns 
 */
// function buildName(firstName: string, lastName?: string) {
// 	if (lastName) {
//   	return firstName + " " + lastName;
//   } else {
//   	return firstName;
//   }
// }

// let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.");
// let result3 = buildName("Bob", "Adams");
/**
 * 测试默认参数
 */
// function calculateDiscount(price: number, discount: number = 0.5): void {
//     var finalPrice = price * discount;
//     console.log("final price = " + finalPrice);
// }

// calculateDiscount(1000);
// calculateDiscount(1000, 0.7);

/**
 * 测试剩余参数
 */
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
  
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);

/**
 * 测试匿名函数调用
 */
// let res = (function(x: number, y: number): number {
//     return x + y;
//   })(1, 2);
// console.log(res);

/**
 * 测试构造函数
 */
// let myFunction = new Function("a", "b", "let c = a + 1; return c * b;");
// console.log(myFunction(3, 4));

/**
 * 测试函数重载
 */
// 定义重载签名
// function greet(person: string): string;
// function greet(persons: string[]): string[];
// // 定义实现签名
// function greet(person: unknown): unknown {
//     if (typeof person === 'string') {
//         return `Hello, ${person}!`;
//     } else if (Array.isArray(person)) {
//         let names = person.join(", ")
//         return `Hello, ${names}!`;
//     }
//     throw new Error('Unable to greet');
// }

// let persons = ["Bob", "Sam", "Owen"];
// console.log(greet(persons[0]));
// console.log(greet(persons));


// let shape = {
//     name: "rectangle",
//     popup: function() {

//         console.log('This inside popup(): ' + this.name);

//         setTimeout(function() {
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);

//     }
// };

// shape.popup();

/**
 * 测试箭头函数
 */
// console.log("\n\n");
// let shape2 = {
//     name: "rectangle",
//     popup: function() {

//         console.log('This inside popup(): ' + this.name);

//         setTimeout( () => {
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);

//     }
// };

// shape2.popup();
