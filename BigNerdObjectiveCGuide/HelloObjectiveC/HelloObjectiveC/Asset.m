//
//  Asset.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/2.
//

#import "Asset.h"
#import "Employee.h"

@implementation Asset

- (NSString *)description {
    if (self.holder) {
        return [NSString stringWithFormat:@"<%@: $%d, holder is %@>", [self label], [self resaleValue], [self holder]];
    } else {
        return [NSString stringWithFormat:@"<%@: $%d, no holder>", [self label], [self resaleValue]];
    }
}

- (void)dealloc {
    NSLog(@"Asset deallocating %@", self);
}

@end
