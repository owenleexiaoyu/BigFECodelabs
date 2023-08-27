import React from "react";
import { View, Button } from "react-native";

export default () => {

    const onButtonPress: () => void = () => {
        // number 数值类型
        // const num1: number = 12;
        // const num2: number = 3.14;
        // console.log(num1 + num2);

        // const add = (n1: number, n2: number): number => {
        //     return n1 + n2;
        // }
        // console.log(add(7, 8));
        // // 编译器报错，但还可以运行
        // console.log(add(7, '8'));

        // let num3: number = 3;
        // // 编译器报错
        // num3 = "Hello";
        // // 还可以运行
        // console.log(num3);

        // const num4: Number = new Number(12);
        // console.log(num4);
        // console.log(num4.valueOf());

        // string 字符串类型
        // const s1: string = 'hello';
        // const s2: string = "Hello";
        // const name: string = "张三";
        // const s3: string = `你好，我叫${name}`;
        // console.log(s3);
        // console.log(2 + '3');
        // console.log('2' + 3);
        
        // const s4: String = new String("String对象");
        // console.log(s4);
        // console.log(s4.valueOf());

        // boolean 布尔类型
        // const b1: boolean = true;
        // const b2: boolean = false;
        // // 报错
        // const b3: boolean = null;
        // // !! 将一个其他类型转换成 boolean 类型，
        // const b4: boolean = !!null;
        // console.log(`!!null = ${b4}`);
        // console.log(`!!"" = ${!!""}`);
        // console.log(`!!"abc" = ${!!"abc"}`);
        // console.log(`!!-1 = ${!!-1}`);
        // console.log(`!!0 = ${!!0}`);
        // console.log(`!!12 = ${!!12}`)
        // const b5: boolean = 4 > 5;
        // console.log(b5);

        // const b6: Boolean = new Boolean(4 > 5);
        // console.log(b6);
        // console.log(b6.valueOf());

        // 数组
        // const a1: number[] = [1, 2, 3, 4, 5];
        // console.log(a1);
        // const a2: Array<number> = [1, 2, 3, 4, 5];
        // console.log(a2);
        // const a3: Array<number> = new Array(5);
        // console.log(a3);
        // a3[1] = 12;
        // a3[2] = 23;
        // console.log(a3);
        // a3.push(100);
        // console.log(a3);

        // const a4: Array<string | number> = new Array();
        // a4.push(3);
        // a4.push("张三");
        // // 编译报错
        // a4.push(true);
        // console.log(a4);

        // 元组
        // const t1: [string, number, boolean] = ['张三', 12, true];
        // console.log(t1);
        // console.log(t1[3]);
        // // 编译报错
        // t1[5] = 100;
        // t1.push(200);
        // console.log(t1);

        // 枚举
        // enum Job {
        //     Teacher,
        //     Programmer,
        //     Cook
        // }
        // enum Job {
        //     Teacher = 105,
        //     Programmer,
        //     Cook
        // }
        // enum Job {
        //     Teacher = 100,
        //     Programmer = 200,
        //     Cook = 300,
        // }
        // console.log(Job.Teacher);
        // console.log(Job.Programmer); 
        // console.log(Job.Cook); 
          
        // enum City {
        //     NanJing = "南京",
        //     Wuxi = "无锡",
        //     SuZhou = "苏州",
        // }
        // console.log(City.NanJing);

        // 函数类型
        // const f1: () => void = () => {
        //     console.log("f1 ...");
        // }
        // f1();
        // const f2: (s: string) => void = (s: string) => {
        //   console.log(s);
        // }
        // f2("hello");
        // const add = (n1: number, n2: number): number => {
        //   return n1 + n2;
        // }
        // console.log(add(5, 6));
        // const f3: (name: string, age: number) => void = (name: string, age: number) => {
        //     console.log(`我的名字叫${name}，我今年${age}岁`);
        //   }
        //   f3("张三", 12);
        //   // 可选参数
        //   const f4: (name: string, age?: number) => void = (name: string, age?: number) => {
        //     console.log(`我的名字叫${name}，我今年${age || 0}岁`);
        //   }
        //   f4("张三");
        //   // 默认参数
        //   const f5 = (name: string, age: number = 10) => {
        //     console.log(`我的名字叫${name}，我今年${age}岁`);
        //   }
        //   f5("李四");

        // 类型文件
        // const student: Student = {
        //     name: "kunkun",
        //     age: 30,
        //     hobby: ["唱", "跳", "RAP", "篮球"],
        // } as Student;
        // console.log(student);

        // 命名空间
        const dog: Info.Dog = {
            name: "大黄",
            age: 2,
            weight: 20,
        }
        console.log(dog);
    }

    return (
        <View>
            <Button 
                title="TypeScript 练习"
                onPress={onButtonPress}
            />
        </View>
    );
};