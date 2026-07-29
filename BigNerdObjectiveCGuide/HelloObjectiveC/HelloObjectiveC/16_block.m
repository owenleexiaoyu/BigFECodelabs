//
//  16_block.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//
//
//#import <Foundation/Foundation.h>
//
//int main(int argc, const char *argv[]) {
//    @autoreleasepool {
//        
//        __block int a = 1;
//        void (^myblock)();
//        myblock = ^{
//            a = 4;
//            NSLog(@"Inside block a vlaue = %d", a);
//        };
//        a = 3;
//        NSLog(@"Outside block a vlaue = %d", a);
//        myblock();
//    }
//    return 0;
//}
