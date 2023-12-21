//
//  11_sorting.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

//#import <Foundation/Foundation.h>
//#import "Employee.h"
//#import "Asset.h"
//
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
//        NSSortDescriptor *voa = [NSSortDescriptor sortDescriptorWithKey:@"valueOfAssets" ascending:YES];
//        NSSortDescriptor *eid = [NSSortDescriptor sortDescriptorWithKey:@"employeeId" ascending:YES];
//        [employeeList sortUsingDescriptors:@[voa, eid]];
//        NSPredicate *predicate = [NSPredicate predicateWithFormat:@"employeeId > 5"];
//        NSArray * employeeListIdBiggerThan5 = [employeeList filteredArrayUsingPredicate:predicate];
//        NSLog(@"Employees sorting: %@", employeeList);
//        NSLog(@"Employees filtering: %@", employeeListIdBiggerThan5);
//    }
//    return 0;
//}
