//
//  15_callback.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//
//
//#import <Foundation/Foundation.h>
//#import "Logger.h"
//#import "NetworkRequestDelegate.h"
//
//int main(int argc, const char * argv[]) {
//    @autoreleasepool {
        // 目标-动作对实现回调
        // 计时器，每隔 2s 打印当前时间
//        Logger *logger = [[Logger alloc] init];
//        NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:2.0 target:logger selector:@selector(logCurrentTime) userInfo:nil repeats:YES];

        // 辅助对象实现回调
        // 异步下载图片
//        NSURL *url = [NSURL URLWithString:@"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS7YYO_8EGOv5dsIg44rMwLFyk4-J3XDlbObe3NGV6RDskGr0-Nn_7M3VK-PCPV7MIBiNUHSVk9eHaCpWsjruciZ7jqO8yHU65uLHD7946nun6Yp-W3NjgXL84tdQ_-ehQ0PftUY8M9rWc88j-Csm7HACTUIdk4V_FXAw2ZRdi6Lx7FLggmsnRu8gHf2k/s1600/Social-%20Android-Studio-Hedgehog.png"];
//        NSURLRequest *request = [NSURLRequest requestWithURL:url];
//        NetworkRequestDelegate *delegate = [[NetworkRequestDelegate alloc] init];
//        [[NSURLConnection alloc] initWithRequest:request delegate:delegate startImmediately:YES];
        
        // 监听通知
//        Logger *logger = [[Logger alloc] init];
//        [[NSNotificationCenter defaultCenter] addObserver:logger              selector:@selector(logTimeZoneChange) name:NSSystemTimeZoneDidChangeNotification object: nil];
//        [[NSRunLoop currentRunLoop] run];
//    }
//    return 0;
//}
