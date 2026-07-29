//
//  2_practice_date.m
//  HelloOC
//
//  Created by ByteDance on 2023/11/24.
//  消息一章的练习代码
//  使用两个 NSDate，计算从出生到现在的时间间隔（单位：秒）

//#import <Foundation/Foundation.h>
//
//int main(int args, const char * argv[]) {
//    @autoreleasepool {
//        // 先设定出生年月日信息
//        NSDateComponents *comps = [[NSDateComponents alloc] init];
//        [comps setYear:1996];
//        [comps setMonth:5];
//        [comps setDay:4];
//        [comps setHour:0];
//        [comps setMinute:0];
//        [comps setSecond:0];
//        // 创建一个日历对象
//        NSCalendar *cal = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
//        // 通过日历创建具体日期的 NSDate 对象
//        NSDate *dateOfBirth = [cal dateFromComponents:comps];
//        
//        // 创建现在的 NSDate 对象
//        NSDate *dateNow = [NSDate date];
//        
//        // 计算两个日期之间的间隔
//        double secondsIntervalFromBirth = [dateNow timeIntervalSinceDate:dateOfBirth];
//        NSLog(@"There are %f seconds from birth to now", secondsIntervalFromBirth);
//    }
//    return 0;
//}
