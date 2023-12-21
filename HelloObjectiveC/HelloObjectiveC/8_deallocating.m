//
//  8_deallocating.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/2.
//  对象实例变量和ARC一章中验证对象实例属性如何被释放

#import <Foundation/Foundation.h>
#import "Employee.h"
#import "Asset.h"

//int main(int argc, const char *argv[]) {
//    @autoreleasepool {
//        NSMutableArray *employeeList = [[NSMutableArray alloc] init];
//        for (int i = 0; i < 10; i++) {
//            Employee *e = [[Employee alloc] init];
//            e.heightInMeters = 1.8 - i / 10;
//            e.weightInKilos = 90 + i;
//            e.employeeId = i;
//            [employeeList addObject:e];
//        }
//        for (int i = 0; i < 10; i++) {
//            Asset *a = [[Asset alloc] init];
//            a.label = [NSString stringWithFormat:@"Laptop %d", i];
//            a.resaleValue = 300 + 20 * i;
//
//            NSUInteger randomIndex = random() % [employeeList count];
//            Employee *randomEmployee = employeeList[randomIndex];
//            [randomEmployee addAsset:a];
//        }
//        NSLog(@"Employee list: %@", employeeList);
//        NSLog(@"Giving up ownership of one employee");
//        [employeeList removeObjectAtIndex:5];
//        NSLog(@"Giving up ownership of array");
//        employeeList = nil;
//    }
//    return 0;
//}
