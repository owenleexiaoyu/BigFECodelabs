//
//  18_plist.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//

#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSMutableArray *stocks = [[NSMutableArray alloc] init];
        NSDictionary *stock = @{
            @"symbol": @"APPL",
            @"shares": @200,
            @"buyDate": [NSDate date],
            @"selled": @YES,
            @"datas": [NSData dataWithContentsOfFile:[@"~/Desktop/ash.png" stringByExpandingTildeInPath]],
        };
        [stocks addObject:stock];
        stock = @{
            @"symbol": @"GOOG",
            @"shares": @150.6,
            @"buyDate": [NSDate date],
            @"selled": @NO,
        };
        [stocks addObject:stock];
        NSString *path = [@"~/Desktop/test.plist" stringByExpandingTildeInPath];
        [stocks writeToFile:path atomically:YES];
        
        NSArray *stockList = [NSArray arrayWithContentsOfFile:path];
        for (NSDictionary *dict in stockList) {
            NSLog(@"I have %@ stock, shares are %@", dict[@"symbol"], dict[@"shares"]);
        }
    }
    return 0;
}
