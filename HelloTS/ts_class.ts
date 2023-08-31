/**
 * 定义一个类
 */
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log("Hello, my name is " + this.name);
//     }
// }
// let xiaoming = new Person("xiaoming");
// xiaoming.sayHello();

/**
 * 类的继承
 */
// class Student extends Person {
//     store: number;
// }
// let xiaoming = new Student("xiaoming");
// console.log(xiaoming.name);
// console.log(xiaoming.store);
// xiaoming.sayHello();

/**
 * 访问控制符
 */
// class Person {
//     name: string;
//     protected age: number;  // protected
//     private height: number; // private
    
// }
// let xiaoming = new Person();
// xiaoming.name = "xiaoming";// OK
// xiaoming.age = 12;
// xiaoming.height = 140; 

type WebSites = {
    site1: string,
    site2: string,
  }


var websites = {
    site1: "Google",
    site2: "Baidu",
  }
  
  function visitWebsites(obj: WebSites) {
    console.log("visit site1: " + obj.site1);
    console.log("visit site2: " + obj.site2);
  }
  
  visitWebsites(websites);