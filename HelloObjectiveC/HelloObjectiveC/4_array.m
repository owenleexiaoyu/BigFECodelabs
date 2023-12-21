//
//  4_array.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/26.
//

#import <Foundation/Foundation.h>

//int main(int argc, const char * argv[]) {
//    @autoreleasepool {
//        NSArray *arr = @[@"Apple", @"Banana", @"Orange"];
//        NSMutableArray *arr = @[@"Apple", @"Banana", @"Orange"].mutableCopy;
//        NSLog(@"The count of arr is %lu", [arr count]);
//
//        NSLog(@"The first item is %@", arr[0]);
//        NSLog(@"The third item is %@", arr[2]);
//
//        for (int i = 0; i < [arr count]; i++) {
//            NSString *str = arr[i];
//            NSLog(@"Item %d is %@", i, str);
//            if ([str isEqualToString:@"Banana"]) {
//                [arr removeObject:str];
//            }
//        }
//        for (NSString *str in arr) {
//            NSLog(@"Fruit item: %@", str);
//            if ([str isEqualToString:@"Banana"]) {
//                [arr removeObject:str];
//            }
//        }
        
//        NSDate *now = [NSDate date];
//        NSDate *tomorrow = [now dateByAddingTimeInterval:24 * 60 * 60];
//        NSDate *yesterday = [now dateByAddingTimeInterval:-24 * 60 *  60];
        
//        NSArray * dateList = @[now, tomorrow, yesterday];
//        NSLog(@"The first date is %@", dateList[0]);
//        NSLog(@"The third date is %@", dateList[2]);
        
//        // 创建一个空数组
//        NSMutableArray *dateList = [NSMutableArray array];
//        // 添加两个元素
//        [dateList addObject:now];
//        [dateList addObject:tomorrow];
//        // 将 yesterday 插入数组起始位置
//        [dateList insertObject:yesterday atIndex:0];
//        // 遍历数组
//        for (NSDate *d in dateList) {
//            NSLog(@"Here is a date: %@", d);
//        }
//        // 删除第一个元素
//        [dateList removeObjectAtIndex:0];
//        NSLog(@"Now the first date is %@", dateList[0]);
//
//    }
//    return 0;
//}
