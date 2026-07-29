//
//  10_collections.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

//#import <Foundation/Foundation.h>
//
//int main(int argc, const char *argv[]) {
//    @autoreleasepool {
//        NSDictionary *numberOfFruit = @{
//            @"Apple": @2,
//            @"Banana": @4,
//            @"Orange": @5,
//        };
//        NSNumber *appleNum = numberOfFruit[@"Apple"];
//        NSLog(@"Apple number is %@", appleNum);
//
//        NSMutableArray *list = [[NSMutableArray alloc] init];
//        [list addObject:@"Hello"];
//        // 添加 int，float 等基础类型
//        [list addObject:@4];
//        [list addObject:@3.14];
//        // 添加结构
//        NSPoint somePoint = NSMakePoint(100, 100);
//        NSValue *pointValue = [NSValue valueWithPoint:somePoint];
//        [list addObject:pointValue];
//        // 添加 nil
//        [list addObject:[NSNull null]];
//        for (int i = 0; i< [list count]; i++) {
//            NSLog(@"Item %d: %@", i, list[i]);
//        }
//    }
//    return 0;
//}
