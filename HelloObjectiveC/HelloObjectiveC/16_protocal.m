//
//  16_protocal.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

#import <Foundation/Foundation.h>
#import "Person.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        Person *p = [[Person alloc] init];
        [p eat];
        [p drink];
        [p sayHello];
        if ([p respondsToSelector:@selector(calculate:arg2:)]) {
            NSLog(@"Person calculate result = %d", [p calculate:1 arg2:2]);
        } else {
            NSLog(@"Person not respond to calculate");
        }
    }
    return 0;
}
