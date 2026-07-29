//
//  2_calendar.m
//  HelloOC
//
//  Created by ByteDance on 2023/11/24.
//  消息一章的示例代码
//  使用 NSDate、NSCalendar 演示有参数的函数的调用，嵌套调用等

#import <Foundation/Foundation.h>

int main(int args, const char * argv[]) {
    @autoreleasepool {
        // 前一章 1_time.m 中的代码
        NSDate *now = [NSDate date];
        NSLog(@"This NSDate object lives at %p", now);
        NSLog(@"The date is %@", now);
        double seconds = [now timeIntervalSince1970];
        NSLog(@"It has been %f seconds since the start of 1970", seconds);
        
        // 调用 now 的一个有参数的函数
        NSDate *later = [now dateByAddingTimeInterval:1000000];
        NSLog(@"In 100,000 seconds it will be %@", later);
        
        // 实例化一个 NSCalendar 对象
        NSCalendar *cal = [NSCalendar currentCalendar];
        NSLog(@"My calendar is %@", [cal calendarIdentifier]);
        
        // 调用 cal 多个参数的函数，NSDayCalendarUnit 和 NSMonthCalendarUnit 已经被废弃了
        unsigned long day = [cal ordinalityOfUnit:NSDayCalendarUnit                                                inUnit:NSMonthCalendarUnit
                                          forDate:now];
        NSLog(@"This is day %lu of the month", day);
        
        // 调用 cal 多个参数的函数
        unsigned long day2 = [cal ordinalityOfUnit:NSCalendarUnitDay inUnit:NSCalendarUnitMonth forDate:now];
        NSLog(@"This is day %lu of the month", day2);
        
        // 使用 alloc+init 与 date 来实例化 NSDate 效果是一样的
        // 嵌套调用：先调用 NSDate alloc 返回一个 NSDate 实例，
        // 再调用 NSDate 实例的 init 方法，初始化实例
        NSDate *date1 = [[NSDate alloc] init];
        NSDate *date2 = [NSDate date];
        NSLog(@"date1 is %@", date1);
        NSLog(@"date2 is %@", date2);
        
    }
    return 0;
}
