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
var websites = {
    site1: "Google",
    site2: "Baidu"
};
function visitWebsites(obj) {
    console.log("visit site1: " + obj.site1);
    console.log("visit site2: " + obj.site2);
}
visitWebsites(websites);
