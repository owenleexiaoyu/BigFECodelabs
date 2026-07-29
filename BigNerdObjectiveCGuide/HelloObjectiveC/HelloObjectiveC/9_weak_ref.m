//
//  9_weak_ref.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

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
//        NSMutableArray *allAssets = [[NSMutableArray alloc] init];
//        for (int i = 0; i < 10; i++) {
//            Asset *a = [[Asset alloc] init];
//            a.label = [NSString stringWithFormat:@"Laptop %d", i];
//            a.resaleValue = 300 + 20 * i;
//
//            NSUInteger randomIndex = random() % [employeeList count];
//            Employee *randomEmployee = employeeList[randomIndex];
//            [randomEmployee addAsset:a];
//            [allAssets addObject:a];
//        }
//        NSLog(@"Employee list: %@", employeeList);
//        NSLog(@"Giving up ownership of one employee");
//        [employeeList removeObjectAtIndex:5];
//        NSLog(@"All Assets: %@", allAssets);
//        NSLog(@"Giving up ownership of array");
//        allAssets = nil;
//        employeeList = nil;
//    }
//    return 0;
//}
