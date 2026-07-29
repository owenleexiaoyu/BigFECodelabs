//
//  Logger.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//

#import "Logger.h"

@implementation Logger

- (void)logCurrentTime {
    NSDate *now = [NSDate date];
    NSLog(@"Current time is %@", now);
}

- (void)logTimeZoneChange {
    NSLog(@"System time zone changed");
}

@end
